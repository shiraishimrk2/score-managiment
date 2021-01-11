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
        {{ song_info[index].artist }}
      </li>

      <li class="song_item">
        {{ song_info[index].arranger }}
      </li>
    </ul>
    <Score-Details
      class="Accordion-Item"
      :class="{ transform: isOpened, tamesi: isClosed }"
      :song_info="song_info"
      :song_index="song_index"
    >
    </Score-Details>
  </div>
</template>
<script>
import songs from "../../../assets/song.json";
// console.log(songs);

// const tamesi = songs[0].all_song[0];
// console.log(tamesi);

// const tamesi2 = tamesi.id;
// console.log(tamesi2);

const song_length = songs[0].all_song.length;
// console.log(song_length);

const song_info = songs[0].all_song;
// console.log(song_info);

const song_index = { number: 0 };

export default {
  data: function () {
    return {
      // scorelists: [],
      isOpened: true,
      isClosed: false,
      songs: songs,
      song_length: song_length,
      // tamesi: tamesi,
      song_info: song_info,
      song_index: song_index,
    };
  },
  methods: {
    toggle(index) {
      this.isOpened = !this.isOpened;
      this.isClosed = !this.isClosed;
      // console.log(index);
      // const song_number = song_info[index].title;
      // console.log(song_number);

      song_index.number = index;
      // console.log(song_index.number);
      // this.song_number = song_number;
    },
    // sendindex(index) {
    //   this.index.push(index);
    // },
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