<template>
  <div id="appBeta">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/aboutBeta">About (Beta)</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#appBeta {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
