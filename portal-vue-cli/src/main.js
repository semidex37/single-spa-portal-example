import es6promise from 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
// import init from './portal'

Vue.config.productionTip = false

new Vue({
  render: (h) => {
    // init();
    return h(App)
  },
}).$mount('#app')
