import Vue from 'vue'
import Vuex from 'vuex'
const fs = require('fs')
const jsonData = JSON.parse(fs.readFileSync('assets/song.json', 'utf-8', function readFileCallBack(err) {
  if (err) {
    console.log(err)
  }
}))
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    songs: jsonData[0].all_song,
    genre: jsonData[1].all_genre,
    notice: jsonData[2].notice_score,
    lends: [],
    Search_Word: '',
    Search_tags: {
      text: "検索項目",
      value: ""
    },
  },
  getters: {
    songs: function (state) {
      state.Search_Word.trim();
      if (state.Search_Word === "") return state.songs;

      return state.songs.filter(song => {
        // console.log(song.title)
        // console.log(song)
        // console.log(song.title.includes(state.Search_Word))

        //検索の本部
        if (state.Search_tags.value == "") {
          return song.title.includes(state.Search_Word) ||
            song.artist.includes(state.Search_Word) ||
            song.arranger.includes(state.Search_Word) ||
            song.genre.includes(state.Search_Word) ||
            song.tag.includes(state.Search_Word)
        } else if (state.Search_tags.value == "title") {
          return song.title.includes(state.Search_Word)
        } else if (state.Search_tags.value == "artist") {
          return song.artist.includes(state.Search_Word)
        } else if (state.Search_tags.value == "composer") {
          return song.composer.includes(state.Search_Word)
        }
      });
    },
    lends: function (state) {
      return state.songs.filter(song => {
        return song.click.includes('true')
      })
    },
  },
  mutations: {
    song_search: function (state, keyword) {
      state.Search_Word = keyword;
    },
    updateSearch_tags: function (state, value) {
      // console.log(state.Search_tags)
      // console.log(value)
      state.Search_tags = value
      // console.log(state.Search_tags)
    },
    genre_click: function (state, index) {
      if (index == 0) {
        state.Search_Word = ''
      } else {
        state.Search_Word = state.genre[index]
      }
    },
    search_reset: function (state) {
      state.Search_Word = ''
    },
    countupd: function (state) {
      state.count++
    }
  },
  actions: {},
  modules: {}
})