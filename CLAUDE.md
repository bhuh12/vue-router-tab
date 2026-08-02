# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo overview

`vue-router-tab` v2 is a Vue 3 tab-bar component library built on Vue Router. This branch (`v2-vue3-refactor`) is a from-scratch composable-based rewrite of the v1 mixin-based library. It's a pnpm workspace with three packages:

- root (`/`) — the library itself, published as `vue-router-tab`
- `demo/` — a standalone demo app consuming the library via `workspace:*`
- `docs/` — VitePress documentation site

## Commands

Run from repo root unless noted. The `vp` CLI comes from `vite-plus` and reads config from `vite.config.ts`.

- `pnpm install` — install deps (root `prepare` runs `vp config`)
- `pnpm test` — run all tests (`vp test`, vitest + happy-dom, matches `src/**/*.test.ts`)
- `pnpm test -- <pattern>` or `pnpm vitest run <file>` — run a single test file
- `pnpm build` — build the library (`vp pack`, outputs to `dist/`)
- `pnpm check` — format + lint (`vp check`); add `--fix` to auto-fix
- `pnpm lint` / `pnpm fmt` — lint only / format only
- `pnpm stylelint` — lint `.scss`/`.vue` styles
- `pnpm typecheck` — `vue-tsc` on the library, then typecheck the demo package
- `pnpm verify` — full gate: check + stylelint + test + build + demo build + typecheck (this is what CI runs)
- `pnpm demo:dev` / `pnpm demo:build` — run/build the demo app
- `pnpm docs:dev` / `pnpm docs:build` — run/build the docs site

CI (`.github/workflows/ci.yml`) runs on push/PR to `v2-vue3-refactor` and executes: `vp install`, `pnpm check`, `pnpm stylelint`, `pnpm test`, `pnpm build`, `pnpm demo:build`, `pnpm typecheck` — in that order. Match this locally before considering work done.

Formatting conventions (from `vite.config.ts`): single quotes, no semicolons, no trailing commas.

## Architecture

### Composable decomposition

The v1 library was one large mixin. v2 splits it into single-purpose composables under `src/composables/`, each returning a `reactive({...})` object. `RouterTab.vue`'s `<script setup>` is the composition root: it calls each composable in dependency order and wires their outputs together — read it first when tracing how a feature works end to end.

Dependency order (each composable receives only what it needs, not the whole props/instance):

```
useState()              root reactive state: items, activeTabId, activeTab, $alive, pages, onDragSort
  -> useI18n(props)
  -> useContextmenu()                      (no deps)
  -> usePageLeave(state)                   topology root, only depends on state
  -> useTabs(state, props, i18n, pageLeave)
  -> useRestore(state, props, {basePath}, tabs)
  -> useOperate(state, {defaultPath, initTabs}, tabs, pageLeave, restore)
  -> useIframe({basePath}, ops, rootEl)
  -> useTabScroll(state, ctxmenu, scrollRef, rootEl)
```

Two RouterAlive-adjacent pieces sit outside this chain:

- `useRouteMatch.ts` — reactive per-`<RouterAlive>` route matching (`useRouteMatch`) plus a pure-function equivalent (`matchRoute`) for matching arbitrary/future routes (used by `getIdByPath`, restore, iframe path building, the navigation guard).
- `useRouterTab.ts` — a registry (`Map<tabId, instance>`) that `RouterTab.vue` registers itself into on setup and clears on scope dispose; `useRouterTab(tabId?)` (the public composable users import) reads from this registry. Supports multiple `<RouterTab>` instances via the `tabId` prop.

Some composables export an `install*` side-effect function in addition to their state factory (e.g. `usePageLeave` exports `installGuard`, `useRestore` exports `installRestore`, `useContextmenu` exports `installContextmenu`). These register router guards / lifecycle listeners and are called once from `RouterTab.vue` setup, separate from the reactive state factory.

### Why props are passed as getters, not spread

Composables that need a live prop value receive an object literal with a getter (e.g. `{ get basePath() { return basePath.value } }`), never a spread/destructured copy. Spreading captures a setup-time snapshot and silently loses reactivity — this has been a recurring bug source (see comments in `RouterTab.vue` referencing "本项目踩过三次"). When adding a new composable dependency, follow the same getter pattern.

### meta.routerTab is the single config surface

All per-route configuration lives under `route.meta.routerTab` (typed as `RouterTabMeta` in `src/types.ts`), not flat `meta` fields — this is a breaking change from v1 and intentionally not backwards compatible. Fields can be static values or functions of the current route (`MetaValue<T> = T | ((route) => T)`). `useTabs.ts`'s `TAB_PROPS`/`FN_PROPS` constants define which fields exist and which are function-evaluatable.

### RouterAlive caching model

`RouterAlive.vue` wraps `<keep-alive>` and is the highest-risk/most subtle part of the codebase. Key mechanics:

- Cache identity (`cacheId`) is `key` when `reuse: true`, or `` `${key}@${alivePath}` `` when `reuse: false` — this lets same-key-different-path pages get independent cache slots.
- Each cached page is wrapped in a uniquely-`name`d component (`wrapName` / `wrap`) because `<keep-alive :include>` matches by component `name`, not by vnode key.
- `alivePaths` (a `reactive Map`) tracks each key's current cached path so `include` recomputes when a same-key page's path changes (needed for `reuse: false` correctness).
- The navigation guard in `usePageLeave.ts` (`installGuard`) has three branches mirroring v1's `leaveGuard`: tab address replaced (`replace`), leaving the tab component's route subtree (`leave`), navigating away from an uncached tab (`leave`). Don't collapse these branches without re-reading the comments — each exists for a specific regression.

### Types-first contracts

`src/types.ts` is the single source of truth for `RouterTabProps` (post-`withDefaults` shape) and `RouterTabPropsInput` (pre-defaults, what the component actually declares via `defineProps`). Composables take `Pick<RouterTabProps, 'foo' | 'bar'>` rather than the whole props object. When adding a prop, add it to `RouterTabProps`, add it to `PropsWithDefault` if it has a default, and give it a default in `RouterTab.vue`'s `withDefaults(...)`.

`RouterTabPublic` is the user-facing instance shape returned by `useRouterTab()`; `RouterTabInternal` extends it with fields only internal sibling components (`TabItem`, `TabScroll`, `Contextmenu`) need. When exposing a new capability to end users, add it to `RouterTabPublic`; internal-only wiring goes on `RouterTabInternal`.

### Tests

Tests live in `src/__tests__/` (not colocated with source) and mirror composables/components 1:1. `helpers.ts` provides `withSetup(fn, router)` to run a composable inside a mounted component's setup context (needed because composables call `useRouter()`/`useRoute()`). Most composable tests build a minimal router + call the composable via `withSetup`, then assert on the returned reactive object directly.
