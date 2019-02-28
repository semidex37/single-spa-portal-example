import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  base: '/#/app4/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home,
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/aboutBeta',
      name: 'aboutBeta',
      component: () => import('@/views/About.vue'),
    }
  ]
})
