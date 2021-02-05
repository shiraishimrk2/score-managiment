<template>
  <div class="Accordion-Item">
    <div class="details">
      <div class="bg-box" @click="tamesi()"></div>

      <div class="inner" v-if="$route.name == '楽譜リスト'">
        <div class="button-box">
          <Use-list-button
            v-if="$route.name == '楽譜リスト' || $route.name == '楽曲リスト'"
            :song_index="song_index"
          />
        </div>

        <h3>{{ song_info[song_index.number].title }}</h3>
        <div class="details-container">
          <ul class="details-box" clm-1>
            <li class="details-item">
              <span class="details-title">作曲者</span>
              {{ song_info[song_index.number].composer }}
            </li>
            <li class="details-item">
              <span class="details-title">編曲者</span>
              {{ song_info[song_index.number].arranger }}
            </li>
            <li class="details-item">
              <span class="details-title">出版社</span>
              {{ song_info[song_index.number].publisher }}
            </li>
            <li class="details-item">
              <span class="details-title">ジャンル</span>
              {{ song_info[song_index.number].genre }}
            </li>
            <li class="details-item">
              <span class="details-title">アーティスト</span>
              {{ song_info[song_index.number].artist }}
            </li>
            <li class="details-item">
              <span class="details-title">棚番号</span>
              {{ song_info[song_index.number].shelf }}ー
              {{ song_info[song_index.number].shelfNum }}
            </li>
            <li class="details-item">
              <span class="details-title">タグ</span>
              {{ song_info[song_index.number].tag }}
            </li>
            <li class="details-item">
              <span class="details-title">備考欄</span>
              {{ song_info[song_index.number].remarks }}
            </li>
          </ul>

          <ul class="details-box clm-2">
            <li class="details-title">右側</li>
          </ul>
        </div>
      </div>

      <div class="inner" v-else>
        <form v-on:submit.prevent="submit">
          <button type="submit" class="add-button">変更の登録</button>
          <h3 class="add-title">
            「{{ song_info[song_index.number].title }}」の編集
          </h3>
          <div class="details-container">
            <div class="details-box clm-1">
              <div class="form-box">
                <label for="title">曲名</label>
                <input
                  type="text"
                  placeholder="曲名"
                  class="col-sm-9 form-control"
                  id="title"
                  v-model="edit_data.title"
                />
              </div>

              <div class="form-box">
                <label for="composer">作曲者</label>
                <input
                  type="text"
                  placeholder="作曲者"
                  class="col-sm-9 form-control"
                  id="composer"
                  v-model="edit_data.composer"
                />
              </div>

              <div class="form-box">
                <label for="arranger">編曲者</label>
                <input
                  type="text"
                  placeholder="編曲者"
                  class="col-sm-9 form-control"
                  id="arranger"
                  v-model="edit_data.arranger"
                />
              </div>

              <div class="form-box">
                <label for="publisher">出版社</label>
                <input
                  type="text"
                  placeholder="出版社"
                  class="col-sm-9 form-control"
                  id="publisher"
                  v-model="edit_data.publisher"
                />
              </div>

              <div class="form-box">
                <label for="genre">ジャンル</label>
                <input
                  type="text"
                  placeholder="ジャンル"
                  class="col-sm-9 form-control"
                  id="genre"
                  v-model="edit_data.genre"
                />
              </div>

              <div class="form-box">
                <label for="artist">アーティスト</label>
                <input
                  type="text"
                  placeholder="アーティスト"
                  class="col-sm-9 form-control"
                  id="artist"
                  v-model="edit_data.artist"
                />
              </div>

              <div class="rack-box">
                <div class="form-box">
                  <label for="rack">棚番号</label>
                  <input class="rack" type="text" id="shelf" v-model="shelf" />
                  <!-- <p>の</p> -->
                </div>

                <div class="form-box">
                  <label for="rack">－</label>
                  <input
                    class="rack"
                    type="text"
                    id="shelfNum"
                    v-model="edit_data.shelfNum"
                  />
                  <!-- <p>段目</p> -->
                </div>
              </div>
              <div class="form-box">
                <label for="tag">キーワード</label>
                <input
                  type="text"
                  placeholder="(例) 明るい"
                  class="col-sm-9 form-control"
                  id="tag"
                  v-model="edit_data.tag"
                />
              </div>
              <div class="form-box">
                <label for="tag">備考欄</label>
                <input
                  type="text"
                  placeholder="備考"
                  class="col-sm-9 form-control"
                  id="tag"
                  v-model="edit_data.remarks"
                />
              </div>
            </div>

            <div class="details-box clm-2">
              <p>右側</p>
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
  margin-top: 30px;
  margin-left: 30px;
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
  text-align: right;
}

.details-item {
  height: 40px;
  color: #101748;
  font-size: 15px;
  font-weight: 600;
  margin-top: 17px;
  border-bottom: solid 1px #d0d3e2;
}

.details-title {
  font-size: 12px;
  float: left;
  color: #8f92a5;
}

.form-box {
  margin-top: 20px;
  border-bottom: solid 1px #d0d3e2;
  background: #f6f6f6;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

form {
  width: 100%;
  height: 100%;
}

label {
  display: inline-block;
  color: #8f92a5;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 0;
  text-align: left;
}

input[type="text"] {
  width: 100%;
  height: 30px;
  padding-bottom: 10px;
  border: none;
  outline: none;
  text-align: right;
  background: none;
  color: #101748;
  font-size: 14px;
  font-weight: 600;
}

input::placeholder {
  color: #d0d3e2;
}

.rack-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.rack {
  text-align: center;
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

.add-title {
  margin: 0;
  margin-top: 10px;
  margin-left: 30px;
}

.clm-1 {
  margin-top: 10px;
}

@media screen and (min-width: 1024px) {
  .details-box {
    height: 50px;
  }

  .details-item {
    height: 42px;
    margin-top: 25px;
  }

  .details-title {
    font-size: 14px;
  }

  h3 {
    font-size: 30px;
  }

  .details-container {
    margin-top: 23px;
    display: grid;
    grid-template-areas: "left right ";
    grid-template-columns: 1fr 1fr;
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
  .form-box {
    margin-top: 20px;
  }

  input {
    height: 20px;
  }
}
</style>

<script>
import edit from "../../../assets/edit.js";

// const edit_data = {
//   title: "",
//   artist: "",
//   composer: "",
//   arranger: "",
//   publisher: "",
//   genre: "",
//   shelf: "",
//   shelfNum: "",
//   tag: "",
// };
export default {
  computed: {
    song: function () {
      return this.$store.state.songs;
    },
    title: {
      get() {
        return this.song_info[this.song_index.number].title;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    artist: {
      get() {
        return this.song_info[this.song_index.number].artist;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    composer: {
      get() {
        return this.song_info[this.song_index.number].composer;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    arranger: {
      get() {
        return this.song_info[this.song_index.number].arranger;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    publisher: {
      get() {
        return this.song_info[this.song_index.number].publisher;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    genre: {
      get() {
        return this.song_info[this.song_index.number].genre;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    shelf: {
      get() {
        return this.song_info[this.song_index.number].shelf;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    shelfNum: {
      get() {
        return this.song_info[this.song_index.number].shelfNum;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    tag: {
      get() {
        return this.song_info[this.song_index.number].tag;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
    remarks: {
      get() {
        return this.song_info[this.song_index.number].remarks;
      },
      set(value) {
        this.$emit("change", value);
      },
    },
  },
  data: function () {
    return {
      edit_data: {
        title: this.song_info[this.song_index.number].title,
        artist: this.song_info[this.song_index.number].artist,
        composer: this.song_info[this.song_index.number].composer,
        arranger: this.song_info[this.song_index.number].arranger,
        publisher: this.song_info[this.song_index.number].publisher,
        genre: this.song_info[this.song_index.number].genre,
        shelf: this.song_info[this.song_index.number].shelf,
        shelfNum: this.song_info[this.song_index.number].shelfNum,
        tag: this.song_info[this.song_index.number].tag,
      },
      // isOpened: true,
      // isClosed: false,
    };
  },
  methods: {
    tamesi() {
      this.$emit("close");
      // this.isOpened = !this.isOpened;
      // this.isClosed = !this.isClosed;
      // console.log("ok");
    },
    search() {
      console.log(this.song_info[this.song_index.number].title);
      console.log(this.song_index.number);
      // this.$store.commit("search");
      // console.log(this.$store.state.result);
    },
    submit() {
      edit.form(this.edit_data, this.song_index);
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
    // class: {
    //   type: String,
    // },
    // toggle: {
    //   type: Function,
    // },
  },
};
</script>