<template>
  <div id="appGame">
    <img src="./assets/logo.png">
    <HelloWorld msg="App4 - appGame"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'appGame',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#appGame {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #ccc;
}
</style>
