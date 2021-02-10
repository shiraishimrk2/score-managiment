<template>
  <div class="score-list">
    <div class="song-container">
      <!-- <p>{{ song[1].title }}</p> -->
      <ul
        class="song-box"
        @click="
          toggle(index);
          youtube_click();
        "
        v-for="(songs, index) in song_get"
        :key="songs.id"
      >
        <li class="song item1">
          {{ song_get[index].title }}
        </li>

        <li class="song item2">
          <img
            class="movie-img"
            src="../assets/movie.png"
            v-show="'youtube' in song_get[index]"
          />
        </li>

        <li class="song item3">
          {{ song_get[index].shelf }} -
          {{ song_get[index].shelfNum }}
        </li>

        <li class="song item4">
          {{ song_get[index].publisher }}
        </li>
      </ul>
    </div>
    <div class="details-box">
      <Score-Details
        @close="toziru()"
        :class="{ animation: isClosed }"
        :song_info="song_get"
        :song_index="song_index"
        :youtube_inf="youtube_info"
      />
    </div>
  </div>
</template>

<style scoped>
.song-container {
  width: 100%;
  height: 450px;
  /* max-height: 500px; */
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
  border-bottom: solid 1.5px#eff0f4;
  /* display: inline; */
  display: grid;
  grid-template-areas:
    "one two"
    "three four ";
  grid-template-columns: 2fr 1fr;
  /* grid-template-rows: 1fr; */
}

.song-box:hover {
  background-color: #e6e6e6;
  opacity: 0.8;
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
  margin-top: 13px;
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

.movie-img {
  width: 25px;
}

.details-box {
  width: 100%;
  height: 100%;
}

.animation {
  transform: translateY(-100%);
}

@media screen and (min-width: 1024px) {
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
    margin-left: 50px;
  }

  .item2 {
    margin-right: 50px;
  }

  .movie-img {
    width: 30px;
  }

  .song-box {
    height: 50px;
    margin-right: 60px;
    text-overflow: ellipsis;
    grid-template-areas: "one three four two ";
    grid-template-columns: 3fr 0.5fr 1.5fr 1.5fr;
  }

  .song-container {
    max-height: 450px;
  }
  @media screen and (min-width: 1900px) {
    .song-container {
      height: 630px;
      max-height: 630px;
    }
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
    song_get: function () {
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
      youtube: "",
      youtube_info: {
        img: "",
        title: "",
        url: "https://youtu.be/",
      },
    };
  },
  methods: {
    toggle(index) {
      this.isClosed = !this.isClosed;

      song_index.number = index;
    },
    youtube_click() {
      const youtube = this.song_get[song_index.number].youtube;
      const url = new URL(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&key=AIzaSyCgl9sRiR_XWmeVGJQktWVZSdw6JFaG_YE"
      );
      const url_search = url.searchParams;
      url_search.toString();
      url_search.set("id", youtube);
      console.log(url_search.toString());
      url.href;

      // const link = new URL("https://youtu.be/");
      // const link_search = link.serachParams;
      // link_search.toString();
      // link_search.set("id", youtube);
      var d = new URL(youtube, "https://youtu.be/");
      this.youtube_info.url = d;
      console.log((this.youtube_info.url = d));
      console.log(youtube);
      console.log((this.youtube_info.url = this.youtube_info.url + youtube));
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          this.youtube_info.img = json.items[0].snippet.thumbnails.medium.url;
          this.youtube_info.title = json.items[0].snippet.title;
          console.log(json);
        })
        .catch((error) => console.log(error));
    },
    toziru() {
      this.isCenter = !this.isCenter;
      this.isClosed = !this.isClosed;
    },
  },
};
</script>