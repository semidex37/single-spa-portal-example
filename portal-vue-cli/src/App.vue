<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Portal Vue Cli"/>

    <div style="margin: 1em; border: solid 1px black; float:left; width: calc(100% - 2em);">

      <div class="app_box">
        <div id="app4" >
          App4
        </div>

      </div>

      <div class="app_box">
        <div id="appGame">
          App - Game
        </div>

      </div>

      <div class="app_box">
        <div id="appBeta">
          App - Beta
        </div>
      </div>

      <div class="app_box">
        <div id="appAlpha">
          App - Alpha
        </div>

      </div>

      <div class="app_box">
        <div id="appCharlie">
          App - Charlie
        </div>

      </div>

      <div style="clear: both"></div>
    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import init from './portal'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted() {
    console.log("App.vue: mounted");
    init();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app_box {
  margin: 0.5em;
  border: solid 1px black;
  width: 400px;
  float: left;
}
</style>
