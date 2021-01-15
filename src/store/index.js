import Vue from 'vue'
import Vuex from 'vuex'
import songs from '../assets/song.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello Vuex',
    songs:songs
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
