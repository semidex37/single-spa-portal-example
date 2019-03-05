<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="app_container">

      <div class="app_box">
        <h4>app5appDelta</h4>
        <div id="app5appDelta"></div>
      </div>

      <div class="app_box">
        <h4>app5app4</h4>
        <div id="app5app4"></div>
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

    appLoader([
      {
        base: 'appCharlie',
        name: 'appDelta',
        hash: '/app5',
        globalEventDistributor: 'app5appDelta'
      },
      // {
      //   base: 'appBeta',
      //   globalEventDistributor: 'app5appDelta'
      // },
      {
        base: 'app4',
        name: 'app45',
        hash: '/app5',
        globalEventDistributor: 'app5app4'
      }
    ])
  }
}
</script>
