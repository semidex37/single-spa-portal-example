<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="app_container">

      <div class="app_box">
        <h4>쇼핑 목록 (A)</h4>
        <div id="app4appGame"></div>
      </div>

      <div class="app_box">
        <h4>장바구니 (C)</h4>
        <div id="app4appCharlie"></div>
      </div>


    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { appLoader } from '../appLoader'

export default {
  name: 'home',
  components: {
  },
  mounted() {
    console.log("App4:mounted");

    // 'appGame', 'appCharlie'

    const routeBaseUrl = this.$route.path;

    appLoader([
      {
        base: 'appGame',
        appName: 'app4appGame',
      },
      {
        base: 'appCharlie',
        appName: 'app4appCharlie',
        routeBaseUrl,
        // initPageUrl: 'aboutCharlie'
      },
    ])
  }
}
</script>

<style>

</style>
