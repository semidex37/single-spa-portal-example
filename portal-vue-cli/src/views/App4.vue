<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="app_container">

      <div class="app_box">
        <h4>app4appCharlie</h4>
        <div id="app4appCharlie"></div>
      </div>

      <div class="app_box">
        <h4>app4appGame</h4>
        <div id="app4appGame"></div>
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
    appLoader([
      {
        base: 'appGame',
        globalEventDistributor: 'app4appGame'
      },
      {
        base: 'appCharlie',
        globalEventDistributor: 'app4appCharlie'
      },
    ])
  }
}
</script>

<style>

</style>
