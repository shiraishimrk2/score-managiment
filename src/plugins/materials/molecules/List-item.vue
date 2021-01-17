<template>
  <div class="score-list">
    <div class="song-container">
      <p>{{ song[0].all_song[1].title }}</p>
      <ul
        class="song-box"
        @click="toggle(index)"
        v-for="(songs, index) in song[0].all_song.length"
        :key="songs.index"
      >
        <li class="song">
          {{ song[0].all_song[index].title }}
        </li>

        <li class="song">
          {{ song[0].all_song[index].artist }}
        </li>

        <li class="song">
          {{ song[0].all_song[index].arranger }}
        </li>
      </ul>
    </div>
    <Score-Details
      @close="toziru()"
      class="Accordion-Item"
      :class="{ start: isOpened, animation: isClosed }"
      :song_info="song[0].all_song"
      :song_index="song_index"
    />
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
      isOpened: true, //初期で閉じている状態
      isClosed: false, //クリックしたら開くアニメーション
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
    toziru() {
      this.isClosed = !this.isClosed;
      this.isOpened = !this.isOpened;
    },
  },
};
</script>

<style scoped>
/* .score-wrap {
  position: relative;
} */
.score-list {
  overflow: hidden;
}

.song-container {
  width: 100%;
  height: 430px;
  display: block;
  overflow-y: auto;

  /* transition: all 0.5s; */
}

.song-box {
  width: 100%;
  height: 300px;
  margin: 0;
  padding: 0;
  background-color: rgb(169, 178, 190);
}

.song {
  margin: 10px;
}

.bg-box {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.4;
  visibility: hidden;
}

.Accordion-Item {
  width: 100%;
  height: 85%;
  position: absolute;
  z-index: 10;
  background: #cfcfcf;
  border-radius: 8px 8px 0 0;
}

.start {
  display: none;
}

.animation {
  animation-name: slidein;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  /* overflow: hidden; */
  /* display: none; */
  /* visibility: hidden; */
  /* opacity: 0; */
}

@keyframes slidein {
  100% {
    /* opacity: 1; */
    /* visibility: visible; */
    transform: translateY(-100%);
  }
}
/* 
.transform {
  transform: translateY(120px);

  display: block;
  animation: try 1s linear 0s;
}


.tamesi {
  transform: translateY(-600px);
} */
</style>
