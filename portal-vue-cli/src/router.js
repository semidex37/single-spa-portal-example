import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import * as singleSpa from 'single-spa'
import _ from 'lodash'

Vue.use(Router)

const router = new Router({
  // base: '/#/app4/',
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/app4',
      name: 'app4',
      component: () => import('./views/App4.vue')
    },
    {
      path: '/app5',
      name: 'app5',
      component: () => import('./views/App5.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log("router.beforeEach");

  const appNames = singleSpa.getAppNames();
  // console.log('appNames:', appNames);
  _.forEach(appNames, (appName) => {
    singleSpa.unloadApplication(appName);
  });

  return next();
})

export default router
