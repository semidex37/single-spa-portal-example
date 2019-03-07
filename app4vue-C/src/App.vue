<template>
  <div id="appCharlie">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/aboutCharlie">About (Charlie)</router-link>
      <button @click="loadData">loadData</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      data: state => state.data
    })
  },
  methods: {
    loadData() {
      console.log('this.$route', this.$route);
      console.log('store.data', this.data);
    }
  },
  mounted() {
    if(this.data.initPageUrl) {
      console.log("this.data.initPageUrl", this.data.initPageUrl);
      this.$router.push({ name: this.data.initPageUrl });
    }

  }
}
</script>

<style scoped>
#appCharlie {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgba(0,0,0,0);
}
</style>
