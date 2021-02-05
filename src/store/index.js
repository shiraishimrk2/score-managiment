import Vue from 'vue'
import Vuex from 'vuex'
// import songs from '../assets/song.json'
// import songs from "@/assets/song.json"
// import aaa from "tamesi"

// const path = require('path')
const fs = require('fs')
const jsonData = JSON.parse(fs.readFileSync('assets/song.json', 'utf-8', function readFileCallBack(err) {
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
    notice: jsonData[2].notice_score,
    // song:tame[0].all_song,
    // data: process.env.jsonData,
    // jdata:jsonData[0].all_song,
    result: [],
    lends: [],
    Search_Word: '',
    tamesi: []
  },
  getters: {
    songs: function (state) {

      return state.songs.filter(song => {
        // console.log(song.title)
        console.log(song.title.includes(state.Search_Word))
        return song.title.includes(state.Search_Word) ||
          song.artist.includes(state.Search_Word) ||
          song.publisher.includes(state.Search_Word) ||
          song.composer.includes(state.Search_Word) ||
          song.arranger.includes(state.Search_Word) ||
          song.genre.includes(state.Search_Word)
      })
    },
    lends: function (state) {
      return state.songs.filter(song => {
        return song.click.includes('true')
      })
    }
    // genres:function(state,)
  },
  mutations: {
    search: function (state) {
      const length = state.songs.length;
      const regex = RegExp(/^[ぁ-んァ-ン一-龥]/);
      for (var i = 0; i < length; i++) {
        var table = state.songs[i].title
        // console.log(regex.test(table))
        if (regex.test(table) == true) {
          state.result.push(table)
        }
      }
      console.log(state.result)
    },
    song_search: function (state, keyword,) {
      state.Search_Word = keyword
    },
    genre_click: function (state, index) {
      if (index == 0) {
        state.Search_Word = ''
      }
      else {
        state.Search_Word = state.genre[index]
      }

    },
    search_reset: function (state) {
      state.Search_Word = ''
    },

  },
  actions: {
  },
  modules: {
  }
})
