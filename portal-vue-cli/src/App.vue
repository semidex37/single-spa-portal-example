<template>
  <div id="app">
    <HeaderNav/>
    <div>
      <button @click="loadData">loadData</button>
      <h4>loadAppConfig: {{ loadAppConfig }}</h4>
      <h4>getMountedApps: {{ getMountedApps }}</h4>
      <h4>getAppNames: {{ getAppNames }}</h4>
    </div>
    <router-view/>
  </div>
</template>

<script>
import * as singleSpa from 'single-spa'
import init from './portal'
import HeaderNav from './components/HeaderNav'
import HelloWorld from './components/HelloWorld.vue'
import { loadAppConfig } from './appLoader'

singleSpa.getMountedApps()
singleSpa.getAppNames()

export default {
  name: 'app',
  components: {
    HeaderNav,
    HelloWorld
  },
  mounted() {
    init();
    console.log("App.vue: mounted");
  },
  data() {
    return {
      loadAppConfig: null,
      getMountedApps: null,
      getAppNames: null,
    }
  },
  methods: {
    loadData() {
      this.loadAppConfig = JSON.stringify(loadAppConfig);
      this.getMountedApps = singleSpa.getMountedApps();
      this.getAppNames = singleSpa.getAppNames();

      console.log(this.$route);
    },
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

.app_container {
  margin: 1em;
  border: solid 1px black;
  float: left;
  width: calc(100% - 2em);
}

.app_box {
  margin: 0.5em;
  border: solid 1px black;
  width: 400px;
  float: left;
}

.app_box > div {
  margin: 0.5em;
  padding: 0.5em;
  border: solid 1px black;
  background-color: #116466;
}
</style>
