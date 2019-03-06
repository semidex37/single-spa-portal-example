<template>
  <div id="app4">
    <div id="nav">
      <a href="#/app4">App 4</a> |
      <a href="#/app5">App 5</a>
    </div>
    <img src="./assets/logo.png">
    <HelloWorld msg="App4 - Default"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app4',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#app4 {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
  background-color: #ccc;
}
</style>
