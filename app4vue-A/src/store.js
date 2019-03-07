import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const createStore = function(options, globalEventDistributor) {
  return new Vuex.Store({
    state: {
      data: options,
      globalEventDistributor: globalEventDistributor
    },
    mutations: {

    },
    actions: {

    }
  })
}

// export default createStore();
