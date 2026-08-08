# Nuxt

::: warning Nuxt is not supported yet
The current version doesn't support Nuxt. All tab configuration goes through `meta.routerTab` (see [Getting Started](./)), and page-level dynamic info goes through [`useRouterPage()`](../advanced/dynamic-tab-info). See [SSR Limitations](#ssr-limitations) below for why it isn't supported yet.
:::

## SSR Limitations

Tab caching itself conflicts with SSR:

- Caching relies on `KeepAlive` and client-side component instances staying alive; there's no "tab history" concept during server-side rendering
- Tab restoration (`restore`) relies on `sessionStorage`, which isn't available on the server
- Iframe tabs can only mount on the client

So even if Nuxt 3 support is added in the future, it can only run as a **client-only plugin** (`ssr: false` or wrapped in `<ClientOnly>`), and this path hasn't been verified yet.

## Alternatives

For projects that need SSR, it's recommended to use tabs only in admin/back-office areas (which usually don't need SEO or first-screen SSR) and configure that area for client-side rendering.

If you get this working with Nuxt 3, feel free to share your approach on [GitHub Issues](https://github.com/bhuh12/vue-router-tab/issues).
