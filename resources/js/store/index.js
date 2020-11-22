import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      check: false,
      user: null
    },
    snackbar: {
      show: false,
      text: '',
      color: undefined
    }
  },
  mutations: {
    SET_AUTH: (state, auth) => state.auth = {...auth},
    SET_SNACKBAR: (state, payload) => state.snackbar = Object.assign({}, state.snackbar, payload)
  },
  actions: {
  },
  modules: {
  }
})
