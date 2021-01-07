<template>
  <div class="score-list">
    <ul
      class="song-box"
      @click="toggle(index)"
      v-for="(song, index) in song_length"
      :key="song.index"
    >
      <li class="song_item">
        {{ song_info[index].title }}
      </li>
      <li class="song_item">
        {{ song_info[index].id }}
      </li>
    </ul>
    <Score-Details
      class="Accordion-Item"
      :class="{ transform: isOpened, tamesi: isClosed }"
      :song_info="song_info"
      :song_title="song_title"
    >
    </Score-Details>
  </div>
</template>
<script>
// import axios from "axios";
import songs from "../../../assets/song.json";
console.log(songs);

var tamesi = songs[0].all_song[0];
console.log(tamesi);

var tamesi2 = tamesi.id;
console.log(tamesi2);

var song_length = songs[0].all_song.length;
console.log(song_length);

var song_info = songs[0].all_song;
console.log(song_info);

var i = { number: 0 };

export default {
  data: function () {
    return {
      // scorelists: [],
      isOpened: true,
      isClosed: false,
      songs: songs,
      song_length: song_length,
      // indexlist: [],
      tamesi: tamesi,
      song_info: song_info,
      // songs: [],
      // index: Number,
      song_title: i,
    };
  },
  // computed: {
  //   song_list: function () {
  //     for (var i = 0; i < this.scorelists.length; i++) {
  //       if ((this.scorelists[i].id = this.id)) {
  //         return this.scorelists[i];
  //       }
  //     }
  //   },
  // },
  methods: {
    // getScorelists() {
    //   axios.get("/api/scores").then((res) => {
    //     this.scorelists = res.data;
    //   });
    // },
    // getSong() {
    //   axios.get("../../../assets/song.json").then((response) => {
    //     this.songs = response.data;
    //   });
    // },

    toggle(index) {
      this.isOpened = !this.isOpened;
      this.isClosed = !this.isClosed;
      console.log(index);
      var song_title = song_info[index].title;
      console.log(song_title);
      i.number = index;
      console.log(i.number);
      // this.song_title = song_title;
    },
    // sendindex(index) {
    //   this.index.push(index);
    // },
  },
  mounted() {
    // this.getScorelists();
    // this.getSong();
  },
};
</script>
<style scoped>
.Accordion-Item {
  width: 100%;
  /* height: 50px; */
  background: #f6f6f6;
  transition: all 300ms 0s ease;
  position: relative;
  /* top: -200px; */
  /* z-index: -10; */
}
.transform {
  transform: translateY(280px);
  display: none;
}
.tamesi {
  transform: translateY(-300px);
}
</style>