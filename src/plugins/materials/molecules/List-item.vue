<template>
  <div class="score-list">
    <div class="song-container">
      <!-- <p>{{ song[1].title }}</p> -->
      <ul
        class="song-box"
        @click="toggle(index)"
        v-for="(songs, index) in tamesi"
        :key="songs.id"
      >
        <li class="song item1">
          {{ tamesi[index].title }}
        </li>

        <li class="song item2">
          {{ tamesi[index].artist }}
        </li>

        <li class="song item3">
          {{ tamesi[index].shelf }} -
          {{ tamesi[index].shelfNum }}
        </li>

        <li class="song item4">
          {{ tamesi[index].publisher }}
        </li>
      </ul>
    </div>
    <div class="details-box">
      <Score-Details
        @close="toziru()"
        class="Accordion-Item"
        :class="{ animation: isClosed }"
        :song_info="tamesi"
        :song_index="song_index"
      />
    </div>
  </div>
</template>

<style scoped>
.song-container {
  width: 100%;
  height: 100%;
  max-height: 380px;
  display: block;
  overflow-y: scroll;
}

.song-container::-webkit-scrollbar {
  display: none;
}

.song-box {
  width: 100%;
  height: 65px;
  margin: 0;
  padding: 0;
  background-color: #f6f6f6;
  border-bottom: solid 1px#eff0f4;
  /* display: inline; */
  display: grid;
  grid-template-areas:
    "one two"
    "three four ";
  grid-template-columns: 2fr 1fr;
  /* grid-template-rows: 1fr; */
}

.song {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

ul > .item1 {
  grid-area: one;
}
ul > .item2 {
  grid-area: two;
}
ul > .item3 {
  grid-area: three;
}
ul > .item4 {
  grid-area: four;
}

.item1,
.item2 {
  margin-top: 18px;
  color: #101748;
}

.item3,
.item4 {
  font-size: 12px;
  margin-bottom: 10px;
  color: #8f92a5;
}

.item1,
.item3 {
  margin-left: 30px;
}

.item2,
.item4 {
  text-align: right;
  margin-right: 30px;
}

.Accordion-Item {
  width: 100%;
  height: 90%;
  position: absolute;
  top: 100%;
  z-index: 10;
  background: #e9e9e9;
  border-radius: 8px 8px 0 0;
  transition: all 1000ms 0s ease;
}

/* .start {
  display: none;
} */

.details-box {
  /* margin: 80px 0; */
  background-color: rgb(230, 153, 153);
}

.animation {
  /* animation-name: slidein;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-timing-function: ease; */
  /* overflow: hidden; */
  /* display: none; */
  /* visibility: hidden; */
  /* opacity: 0; */
  /* padding: 20px 0; */
  transform: translateY(-100%);
}

@media screen and (min-width: 1024px) {
  .Accordion-Item {
    width: calc(100% - 60px);
  }

  .item2,
  .item3,
  .item4 {
    text-align: right;
    margin-left: 20px;
  }

  .song {
    margin: 0;
    margin-left: 20px;
    margin-top: 15px;
  }

  .item1 {
    margin-left: 30px;
  }

  .item4 {
    margin-right: 30px;
  }

  .song-box {
    height: 50px;
    margin-right: 60px;
    text-overflow: ellipsis;
    grid-template-areas: "one three two four ";
    grid-template-columns: 3fr 1fr 1fr 1fr;
  }

  .song-container {
    max-height: 500px;
  }
}
</style>

<script>
const song_index = { number: 0 };
export default {
  computed: {
    song: function () {
      return this.$store.state.songs;
    },
    tamesi: function () {
      // console.log(this.$store.getters.songs);
      return this.$store.getters.songs;
    },
  },
  data: function () {
    return {
      // isOpened: true, //初期で閉じている状態
      isClosed: false, //クリックしたら開く
      // isCenter: false, //これは閉じるときのもの(必要ないかもしれない)
      song_index: song_index,
    };
  },
  methods: {
    toggle(index) {
      // console.log(ta);
      // this.isOpened = !this.isOpened;
      this.isClosed = !this.isClosed;
      // this.isCenter = !this.isCenter;
      // console.log(index);
      // const song_number = song_info[index].title;
      // console.log(song_number);

      song_index.number = index;

      // console.log(this.song_index.number);
      // console.log(song_index.number);
      // this.song_number = song_number;
    },
    toziru() {
      // this.isOpened = !this.isOpened;
      this.isCenter = !this.isCenter;
      this.isClosed = !this.isClosed;
    },
  },
};
</script>