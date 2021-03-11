<template>
  <div class="score-list">
    <div class="song-container">
      <!-- <p>{{ song[1].title }}</p> -->
      <ul
        class="song-box"
        @click="toggle(index)"
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
        :youtube_info="youtube_info"
      />
    </div>
  </div>
</template>



<style scoped>
.score-list {
  width: 100%;
  height: 100%;
}

.song-container {
  width: 100%;
  height: 410px;
  /* max-height: 500px; */
  display: block;
  overflow-y: auto;
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
  cursor: default;
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
  letter-spacing: 0.15em;
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
  .song-container {
    width: 100%;
    height: 350px;
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
}

@media screen and (min-width: 1370px) {
  .song-container {
    width: 100%;
    height: 450px;
  }
}

@media screen and (min-width: 1900px) {
  .song-container {
    height: 630px;
    max-height: 630px;
  }
}
</style>
<script>
const song_index = { number: 0 };
const api_url = new URL(
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&key=AIzaSyCgl9sRiR_XWmeVGJQktWVZSdw6JFaG_YE"
);
// const player_url = "https://youtu.be/";

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
      isClosed: false, //クリックしたら開く

      song_index: song_index,
      youtube: "",
      youtube_info: [],
    };
  },
  methods: {
    toggle(index) {
      this.isClosed = !this.isClosed;
      song_index.number = index;
      const player_url = "https://youtu.be/";

      if ("youtube" in this.song_get[song_index.number]) {
        for (
          let i = 0;
          i < this.song_get[song_index.number].youtube.length;
          i++
        ) {
          // console.log(this.song_get[song_index.number].youtube.length);
          console.log(this.song_get[song_index.number].youtube[i]);
          const youtube_key = this.song_get[song_index.number].youtube[i];

          //youtubeの動画閲覧リンクを作成
          // this.youtube_info[i].url = new URL(youtube_key, player_url);

          var youtube_url = new URL(youtube_key, player_url);
          console.log(youtube_url);

          //youtubeのapiへ
          const url_search = api_url.searchParams;
          url_search.toString();
          url_search.set("id", youtube_key);
          // console.log(url_search.toString());
          api_url.href;

          //↓youtube_apiが作動しているかどうかの確認
          // console.log((this.youtube_info.url = link));
          // console.log(youtube);
          // console.log((this.youtube_info.url = this.youtube_info.url + youtube));

          this.youtube_api(i, youtube_url); //youtube_apiを作動させている
          console.log(this.youtube_info);
        }
      }
    },
    youtube_api(i, youtube_url) {
      fetch(api_url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          let youtube_all = {
            img: json.items[0].snippet.thumbnails.medium.url,
            title: json.items[0].snippet.title,
            url: youtube_url,
          };
          this.youtube_info.push(youtube_all);
          // this.youtube_info[i].img =
          //   json.items[0].snippet.thumbnails.medium.url;
          // this.youtube_info[i].title = json.items[0].snippet.title;
        })
        .catch((error) => console.log(error));
    },
    toziru() {
      this.youtube_info.splice(0);
      this.isCenter = !this.isCenter;
      this.isClosed = !this.isClosed;
    },
  },
};
</script>
