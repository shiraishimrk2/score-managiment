import Vue from 'vue'
import Vuex from 'vuex'
// import songs from '../assets/song.json'
// import songs from "@/assets/song.json"
// import aaa from "tamesi"

// const path = require('path')
const fs = require('fs')
const jsonData = JSON.parse(fs.readFileSync('assets/song.json','utf-8', function readFileCallBack(err){
  if (err) {
    console.log(err)
  }
}))

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello Vuex',
    songs: jsonData[0].all_song,
    genre: jsonData[1].all_genre,
    // song:tame[0].all_song,
    // data: process.env.jsonData,
    // jdata:jsonData[0].all_song,
    result:[],
  },
  mutations: {
    search: function (state) {
      // console.log(state.jdata)
      // console.log(state.song)
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
