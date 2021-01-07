<template>
  <div class="score-list">
    <ul class="song-box" @click="toggle()">
      <li class="song" v-for="(song, index) in song_length" :key="song.id">
        <h4>{{ song_info[index].title }}</h4>
      </li>
    </ul>
    <Score-Details
      class="Accordion-Item"
      :class="{ transform: isOpened, tamesi: isClosed }"
      :song="songs"
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

    toggle() {
      this.isOpened = !this.isOpened;
      this.isClosed = !this.isClosed;
      // console.log(index);
      // console.log(tamesi);
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