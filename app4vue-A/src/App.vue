<template>
  <div id="appGame">
    <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld msg="App4 - appGame - A"/>-->
    <GameList></GameList>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GameList from './components/GameList'

export default {
  name: 'appGame',
  components: {
    HelloWorld,
    GameList
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
  background-color: rgba(0,0,0,0);
}
</style>
