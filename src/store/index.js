import Vue from 'vue'
import Vuex from 'vuex'
import songs from '../../assets/song.json'

// const fs = require('fs');
// var tamesi =fs.readFile("assets/song.json", "utf-8", (err) => {
//   if (err) throw err;
//   console.log(data);
// });
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello Vuex',
    songs: songs[0].all_song,
    genre: songs[1].all_genre,
    // tamesi:tamesi,
    result:[],
  },
  mutations: {
    search: function (state) {
      // console.log(tamesi)
      // console.log(state.genre)
      // console.log(state.songs)
      // var a = state.songs[0].all_song[0].title
      // var ueo = JSON.parse(JSON.stringify(a))
      // console.log(ueo)
      // console.log(state.songs[0].all_song[0].title)
      const length = state.songs.length;
      const regex = RegExp(/^[ぁ-んァ-ン一-龥]/);
      for (var i = 0; i < length; i++){
        var table = state.songs[i].title
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
