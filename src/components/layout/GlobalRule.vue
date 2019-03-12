<template>
  <main class="app-main">
    <router-tab :alive-id="route => route.fullPath.replace(route.hash, '')"/>
  </main>
</template>
