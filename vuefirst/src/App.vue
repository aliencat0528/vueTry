<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div>
      <!--<base-banner/>-->
      <nav-bar-bstrap/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import BaseBanner from '@/components/BaseBanner.vue'
import HamburgerTest from '@/components/HamburgerTest.vue'
import NavBarBstrap from '@/components/NavBarBstrap.vue'

export default {
  name: 'App',
  components: {
    BaseBanner,
    HamburgerTest,
    NavBarBstrap
  }
}
</script>

<style>

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  /*color: #2c3e50;
  margin-top: 60px;*/
}

</style>
