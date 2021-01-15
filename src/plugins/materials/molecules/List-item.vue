<template>
  <div class="score-list">
    <p>{{ song[0].all_song[1].title }}</p>
    <ul
      class="song-box"
      @click="toggle(index)"
      v-for="(songs, index) in song[0].all_song.length"
      :key="songs.index"
    >
      <li class="song_item">
        {{ song[0].all_song[index].title }}
      </li>

      <li class="song_item">
        {{ song[0].all_song[index].artist }}
      </li>

      <li class="song_item">
        {{ song[0].all_song[index].arranger }}
      </li>
    </ul>
    <Score-Details
      class="Accordion-Item"
      :class="{ transform: isOpened, tamesi: isClosed }"
      :song_info="song[0].all_song"
      :song_index="song_index"
    >
    </Score-Details>
  </div>
</template>
<script>
const song_index = { number: 0 };

export default {
  computed: {
    song: function () {
      return this.$store.state.songs;
    },
  },
  data: function () {
    return {
      isOpened: true,
      isClosed: false,
      song_index: song_index,
    };
  },
  methods: {
    toggle(index) {
      // console.log(ta);
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