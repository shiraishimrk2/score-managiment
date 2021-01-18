import Vue from 'vue'
import Vuex from 'vuex'
import songs from '../assets/song.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello Vuex',
    songs: songs,
    result:[]
  },
  mutations: {
    search: function (state) {
      // var a = state.songs[0].all_song[0].title
      // var ueo = JSON.parse(JSON.stringify(a))
      // console.log(ueo)
      // console.log(state.songs[0].all_song[0].title)
      const length = state.songs[0].all_song.length;
      const regex = RegExp(/^[ぁ-んァ-ン一-龥]/);
      for (var i = 0; i < length; i++){
        var table = state.songs[0].all_song[i].title
        // console.log(regex.test(table))
        if (regex.test(table) == true) {
          state.result.push(table)
        }
      } 
      
          console.log(state.result)
    }
  },
  actions: {
  },
  modules: {
  }
})
