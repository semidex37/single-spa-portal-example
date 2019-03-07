import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

// const About = () => import('./views/About.vue')

Vue.use(Router)

export const createRouter = function(routeBaseUrl) {
  return new Router({
    base: '/#' + routeBaseUrl,
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/aboutCharlie',
        name: 'aboutCharlie',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        component: About
      }
    ]
  })
};


// export default new Router({
//   base: '/#/app4/',
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/aboutCharlie',
//       name: 'aboutCharlie',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
