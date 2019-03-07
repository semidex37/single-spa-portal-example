import 'es6-promise/auto';
// import 'core-js/es7/object';
// import 'core-js/es7/array';
import Vue from 'vue'
import App from './App.vue'
import router from './router'

console.log("portal - main.js");

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => {
    return h(App)
  }
}).$mount('#app')
