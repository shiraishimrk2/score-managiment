<template>
  <div class="Accordion-Item">
    <div class="details">
      <div class="bg-box" @click="close()"></div>

      <div class="inner" v-if="$route.name == '楽譜リスト'">
        <div class="button-box">
          <Use-list-button
            v-if="$route.name == '楽譜リスト' || $route.name == '楽曲リスト'"
            :song_index="song_index"
          />
        </div>

        <div class="close-button" @click="close()">
          <p class="close-icon">✖</p>
        </div>

        <h3>{{ song_info[song_index.number].title }}</h3>
        <div class="details-container">
          <ul class="details-box clm-1">
            <li class="details-item">
              <p class="details-title">作曲者</p>
              <p class="details-result">
                {{ song_info[song_index.number].composer }}
              </p>
            </li>

            <li class="details-item">
              <p class="details-title">編曲者</p>
              <p class="details-result">
                {{ song_info[song_index.number].arranger }}
              </p>
            </li>

            <li class="details-item">
              <p class="details-title">出版社</p>
              <p class="details-result">
                {{ song_info[song_index.number].publisher }}
              </p>
            </li>

            <li class="details-item">
              <p class="details-title">ジャンル</p>
              <p class="details-result">
                {{ song_info[song_index.number].genre }}
              </p>
            </li>

            <li class="details-item">
              <p class="details-title">アーティスト</p>
              <p class="details-result">
                {{ song_info[song_index.number].artist }}
              </p>
            </li>

            <li class="details-item">
              <p class="details-title">棚番号</p>
              <p class="details-result">
                {{ song_info[song_index.number].shelf }} -
                {{ song_info[song_index.number].shelfNum }}
              </p>
            </li>

            <li class="details-item">
              <p class="details-title">タグ</p>
              <p class="details-result">
                {{ song_info[song_index.number].tag }}
              </p>
            </li>

            <li class="details-item">
              <p class="details-title">備考欄</p>
              <p class="details-result">
                {{ song_info[song_index.number].remarks }}
              </p>
            </li>
          </ul>
          <ul class="details-box clm-2">
            <li class="details-item">
              <p class="details-title">YoutubeURL</p>
              <div v-if="show_youtube">
                <div
                  v-for="(youtubes, index) in youtube_info.length"
                  :key="youtubes.id"
                >
                  <p>{{ youtube_info[index].title }}</p>
                  <img
                    @click="youtube_click(youtube_info[index].url)"
                    class="details-result"
                    :src="youtube_info[index].img"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="inner" v-else>
        <form v-on:submit.prevent="submit">
          <button type="submit" class="add-button">変更の登録</button>
          <div class="close-button" @click="close()">
            <p class="close-icon">✖</p>
          </div>

          <h3 class="add-title">
            「{{ song_info[song_index.number].title }}」の編集
          </h3>

          <div class="details-container">
            <div class="details-box clm-1">
              <div class="form-box">
                <label class="form-title" for="title">曲名</label>
                <input
                  type="text"
                  placeholder="曲名"
                  class="col-sm-9 form-control edit-title"
                  id="title"
                  v-model.lazy="song_[index].title"
                />
              </div>

              <div class="form-box">
                <label class="form-title" for="composer">作曲者</label>
                <input
                  type="text"
                  placeholder="作曲者"
                  class="col-sm-9 form-control edit-title"
                  id="composer"
                  v-model="song_[index].composer"
                />
              </div>

              <div class="form-box">
                <label class="form-title" for="arranger">編曲者</label>
                <input
                  type="text"
                  placeholder="編曲者"
                  class="col-sm-9 form-control edit-title"
                  id="arranger"
                  v-model="song_[index].arranger"
                />
              </div>

              <div class="form-box">
                <label class="form-title" for="publisher">出版社</label>
                <input
                  type="text"
                  placeholder="出版社"
                  class="col-sm-9 form-control edit-title"
                  id="publisher"
                  v-model="song_[index].publisher"
                />
              </div>

              <div class="form-box">
                <label class="form-title" for="genre">ジャンル</label>
                <input
                  type="text"
                  placeholder="ジャンル"
                  class="col-sm-9 form-control edit-title"
                  id="genre"
                  v-model="song_[index].genre"
                />
              </div>

              <div class="form-box">
                <label class="form-title" for="artist">アーティスト</label>
                <input
                  type="text"
                  placeholder="アーティスト"
                  class="col-sm-9 form-control edit-title"
                  id="artist"
                  v-model="song_[index].artist"
                />
              </div>

              <div class="rack-box">
                <div class="form-box rack__item">
                  <label class="form-title" for="rack">棚番号</label>
                  <input
                    class="rack edit-title"
                    type="text"
                    id="shelf"
                    v-model="song_[index].shelf"
                  />
                  <!-- <p>の</p> -->
                </div>

                <div class="form-box rack__item2">
                  <label class="form-title" for="rack">－</label>
                  <input
                    class="rack edit-title"
                    type="text"
                    id="shelfNum"
                    v-model="song_[index].shelfNum"
                  />
                  <!-- <p>段目</p> -->
                </div>
              </div>
              <div class="form-box">
                <label class="form-title" for="tag">キーワード</label>
                <input
                  type="text"
                  placeholder="(例) 明るい"
                  class="col-sm-9 form-control edit-title"
                  id="tag"
                  v-model="song_[index].tag"
                />
              </div>
              <div class="form-box">
                <label class="form-title" for="tag">備考欄</label>
                <input
                  type="text"
                  placeholder="備考"
                  class="col-sm-9 form-control edit-title"
                  id="tag"
                  v-model="song_[index].remarks"
                />
              </div>
            </div>

            <div class="details-box clm-2">
              <div class="form-box">
                <label class="form-title" for="youtube">Youtube ID</label>
                <input
                  type="text"
                  placeholder="https://www.youtube.com/watch?v=***********"
                  class="col-sm-9 form-control edit-title"
                  id="youtube"
                  v-model="song_[index].youtube"
                />
              </div>
            </div>
            <!-- <h1>{{ $store.state.songs[0].all_song[0] }}</h1> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Accordion-Item {
  position: absolute;
  transition: all 1000ms 0s ease;
  width: 100%;
  height: 100%;
  top: 100%;
  z-index: 2;
}
.bg-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: gray;
  opacity: 0.8;
  /* transition: all 1000ms 0s ease; */
}

.inner {
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
  background-color: #f6f6f6;
  position: absolute;
  top: 50px;
  transition: all 1000ms 0s ease;
}

.button-box {
  margin-top: 20px;
  margin-left: 30px;
}

.add-button {
  width: 100px;
  height: 30px;
  margin-top: 30px;
  border-radius: 3px;
  margin-left: 30px;
  stroke: none;
  border: none;
  background: #101748;
  color: #fff;
  font-size: 14px;
}

.close-button {
  width: 20px;
  height: 20px;
  background-color: #f6f6f6;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 25px;
  right: 30px;
  text-align: center;
}

.close-button:hover {
  opacity: 0.3;
}

.close-icon {
  margin: 0;
  color: #646886;
  padding-left: 1px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  cursor: default;
}

h3 {
  font-size: 25px;
  color: #101748;
  font-weight: 600;
  margin: 10px 30px;
}

ul {
  padding: 0;
}

.details-container {
  width: 100%;
  height: 100%;
  margin-top: 25px;
  /* display: grid;
  grid-template-columns: 1fr; */
}

.details-box {
  /* height: 50px; */
  padding: 0 30px;
  margin: 0;
  display: grid;
  /* text-align: right; */
}

.details-item {
  height: 50px;
  margin-top: 10px;
  color: #101748;
  font-size: 15px;
  font-weight: 600;
  display: grid;
  grid-gap: 4%;
  grid-template-columns: 1fr 3fr;
}

.details-title {
  margin-top: 20px;
  font-size: 10px;
  float: left;
  color: #8f92a5;
}

.youtube-title {
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #8f92a5;
}

.details-result {
  margin: 10px 0;
  border-bottom: 2px solid #eff0f4;
}

.youtube-result {
  font-size: 15px;
  font-weight: 600;
  color: #101748;
}

.youtube-item:hover {
  opacity: 0.6;
}

.add-title {
  margin: 0;
  margin-top: 10px;
  margin-left: 20px;
}

.form-box {
  height: 60px;
  display: grid;
  grid-gap: 4%;
  grid-template-columns: 1fr 3fr;
}

form {
  width: 100%;
  height: 100%;
}

.form-title {
  margin-top: 20px;
  display: inline-block;
  color: #8f92a5;
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 0;
}

.edit-title[type="text"] {
  width: 100%;
  /* height: 50px; */
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  outline: none;
  /* text-align: right; */
  background: none;
  color: #101748;
  font-size: 15px;
  font-weight: 600;
  border-bottom: 2px solid #eff0f4;
}

.edit-title::placeholder {
  color: #d0d3e2;
}

.rack-box {
  display: grid;
  grid-template-columns: 1.8fr 1fr;
}

.rack__item {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
}

.rack__item2 {
  display: grid;
  grid-template-columns: 0.3fr 2.5fr;
}

.clm-1 {
  margin-top: 10px;
}

@media screen and (min-width: 1024px) {
  .bg-box {
    width: calc(100% - 60px);
    height: 100%;
    top: 0;
  }

  .inner {
    width: 75%;
    margin: 0 10.5%;
    box-shadow: 3px -3px 30px rgba(119, 119, 119, 0.342) inset;
  }

  .add-button {
    width: 125px;
    height: 30px;
    border-radius: 3px;
    stroke: none;
    background: #101748;
    color: #fff;
    font-size: 14px;

    position: static;
  }
  .close-button {
    border: solid 2px #646886;
    width: 30px;
    height: 30px;
  }

  .close-icon {
    font-size: 23px;
    padding-left: 1px;
  }

  .details-container {
    /* margin-top: 23px; */
    display: grid;
    grid-template-areas: "left right ";
    grid-template-columns: 1fr 1fr;
  }

  .details-box {
    height: 50px;
  }

  .details-item {
    height: 42px;
    margin-top: 25px;
  }

  .details-title {
    margin-top: 10px;
    font-size: 13px;
  }

  h3 {
    font-size: 30px;
  }

  .add-title {
    display: inline-block;
    margin-top: 30px;
  }

  .clm-1 {
    grid-area: left;
  }

  .clm-2 {
    grid-area: right;
  }

  .form-box {
    margin-top: 15px;
    height: 47px;
  }

  label {
    margin-top: 0;
    font-size: 13px;
  }

  .edit-title {
    height: 20px;
  }
}
</style>

<script>
import edit from "../../../assets/edit.js";

export default {
  computed: {
    song: function() {
      return this.$store.state.songs;
    },
    song_: {
      get() {
        return this.song_info;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    index: {
      get() {
        return this.song_index.number;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    youtube_: {
      get() {
        return this.youtube_info;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    show_youtube: function() {
      return "youtube" in this.song_[this.index];
    },
  },
  data: function() {
    return {};
  },
  methods: {
    youtube_click(url) {
      const newUrl = encodeURI(url);
      const { shell } = require("electron");
      shell.openExternal(newUrl);
    },
    close() {
      this.$emit("close");
      console.log(this.song_index.number);
    },
    search() {
      console.log(this.song_info[this.song_index.number].title);
      console.log(this.song_index.number);
    },
    submit() {
      const edit_data = {
        title: this.song_[this.index].title,
        artist: this.song_[this.index].artist,
        composer: this.song_[this.index].composer,
        arranger: this.song_[this.index].arranger,
        publisher: this.song_[this.index].publisher,
        genre: this.song_[this.index].genre,
        shelf: this.song_[this.index].shelf,
        shelfNum: this.song_[this.index].shelfNum,
        tag: this.song_[this.index].tag,
        youtube: this.song_[this.index].youtube,
      };
      edit.form(edit_data, this.song_index);
      console.log("成功");
      console.log(this.edit_data);
    },
  },
  props: {
    song_info: {
      type: Array,
    },
    song_index: {
      type: Object,
    },
    youtube_info: {
      type: Array,
    },
  },
};
</script>
