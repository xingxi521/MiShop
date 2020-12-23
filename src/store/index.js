import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'',
    carCount:0
  },
  mutations: {
    setUserName(state,username){
      state.username = username;
    },
    setCarCount(state,count){
      state.carCount = count;
    }
  },
  actions: {
  },
  modules: {
  }
})
