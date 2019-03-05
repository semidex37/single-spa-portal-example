<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="app_container">

      <div class="app_box">
        <h4>app4</h4>
        <div id="app4"></div>
      </div>

      <div class="app_box">
        <h4>appGame</h4>
        <div id="appGame"></div>
      </div>

      <div class="app_box">
        <h4>appBeta</h4>
        <div id="appBeta"></div>
      </div>

      <div class="app_box">
        <h4>appAlpha</h4>
        <div id="appAlpha"></div>
      </div>

      <div class="app_box">
        <h4>appCharlie</h4>
        <div id="appCharlie"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
