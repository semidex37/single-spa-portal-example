<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="app_container">

      <div class="app_box">
        <h4>app5app4</h4>
        <div id="app5app4"></div>
      </div>

      <div class="app_box">
        <h4>장바구니 (C)</h4>
        <div id="app5appDelta"></div>
      </div>


    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { appLoader } from '../appLoader'

export default {
  name: 'home',
  components: {
  },
  mounted() {
    console.log("App4:mounted");

    const routeBaseUrl = this.$route.path;

    appLoader([
      {
        base: 'appCharlie',
        appName: 'app5appDelta',
        routeBaseUrl,
        hash: '/app5',
        initPageUrl: 'aboutCharlie'
      },
      {
        base: 'app4',
        appName: 'app5app4',
        hash: '/app5',
      }
    ])
  }
}
</script>
