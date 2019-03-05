<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ data }}</h2>
    <button onclick="">Button</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getData() {
      axios.get('/api/hello').then((data) => {
        console.log('getData', data);
        if(data) {
          this.data = data.data;
        }
      })
    }
  },
  data() {
    return {
      data: this.getData()
    }
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
