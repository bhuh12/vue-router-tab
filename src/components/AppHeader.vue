<template>
  <header class="app-hd">
    <div class="app-home">
      <a class="rt-icon-menu toggle-side" @click="$emit('sidebar-change')"></a>
      <img class="site-logo" src="img/logo.png" alt="Vue Router Tab - logo">
      <h2 class="site-title">
        <a href="../">Vue Router Tab</a> - Demo
      </h2>
    </div>

    <site-link/>
  </header>
</template>

<script>
import SiteLink from '@/components/SiteLink.vue'

export default {
  name: 'AppHeader',
  components: { SiteLink }
}
</script>

<style lang="scss" scoped>
.app-hd {
  display: flex;
  position: relative;
  z-index: 99;
  height: 50px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  align-items: center;
  justify-content: space-between;

  .app-home {
    display: flex;
    align-items: center;
  }

  .toggle-side {
    display: none;
    margin-left: .5rem;
    padding: .5rem;
    font-size: 1.25rem;
    cursor: pointer;

    @include screen-mob {
      display: block;
    }
  }

  .site-logo {
    $s: 1.3rem;
    margin: 0 .5rem 0 1.5rem;
    width: $s;
    height: $s;

    @include screen-mob {
      margin-left: .5rem;
    }
  }

  .site-title {
    margin: 0;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1;

    a {
      font-weight: 600;
      text-decoration: none;
      color: $text;

      &:hover {
        color: $color;
      }
    }
  }

  .site-link {
    margin-right: 1em;

    @include screen-mob {
      display: none;
    }

    /deep/ a {
      margin: 0 .3em;
    }
  }
}
</style>
