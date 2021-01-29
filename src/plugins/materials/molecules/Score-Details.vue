<template>
  <div class="details" @click="tamesi()">
    <div class="button" @click="search()"></div>
    <Use-list-button v-if="$route.name == '楽譜リスト'" />
    <Return-button v-if="$route.name == '楽譜リスト'" />
    <div v-if="$route.name == '楽譜リスト'">
      <h3>{{ song_info[song_index.number].title }}</h3>
      <ul class="details-box">
        <li class="details-item">
          <span class="details-titel">作曲者</span>
          {{ song_info[song_index.number].composer }}
        </li>
        <li class="details-item">
          <span class="details-titel">編曲者</span>
          {{ song_info[song_index.number].arranger }}
        </li>
        <li class="details-item">
          <span class="details-titel">出版社</span>
          {{ song_info[song_index.number].publisher }}
        </li>
        <li class="details-item">
          <span class="details-titel">ジャンル</span>
          {{ song_info[song_index.number].genre }}
        </li>
        <li class="details-item">
          <span class="details-titel">アーティスト</span>
          {{ song_info[song_index.number].artist }}
        </li>
        <li class="details-item">
          <span class="details-titel">棚番号</span>
          {{ song_info[song_index.number].shelf }}ー
          {{ song_info[song_index.number].shelfNum }}
        </li>

        <!-- <li
          v-for="(tag, index) in song_info[song_index.number].tag.length"
          :key="tag.id"
        >
          {{ song_info[song_index.number].tag[index] }}
        </li> -->
      </ul>
    </div>

    <div v-else>
      <form v-on:submit.prevent="submit">
        <div class="form-container">
          <div class="column-1">
            <div class="form-box">
              <label for="title">曲名</label>
              <input
                type="text"
                placeholder="曲名"
                class="col-sm-9 form-control"
                id="title"
                v-model="edit_data.title"
                required
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
                required
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
                <input type="text" id="shelf" v-model="edit_data.shelf" />
                <!-- <p>の</p> -->
              </div>

              <div class="form-box">
                <label for="rack">－</label>
                <input type="text" id="shelfNum" v-model="edit_data.shelfNum" />
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
                required
              />
            </div>
          </div>

          <div class="colmun-2">
            <button type="submit">登録</button>
          </div>
          <!-- <h1>{{ $store.state.songs[0].all_song[0] }}</h1> -->
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  margin-top: 50px;
  padding: 0 30px;
}

.form-box {
  margin-top: 20px;
  border-bottom: solid 1px #d0d3e2;
  background: #f6f6f6;
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.test {
  width: 100px;
  height: 100px;
  border: solid 1px black;
}
label {
  display: inline-block;
  color: #101748;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 0;
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
  font-weight: 600;
}

input::placeholder {
  color: #d0d3e2;
}

.rack-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.colmun-2 {
  margin: 20px;
}

@media screen and (min-width: 1024px) {
  .form-box {
    margin-top: 30px;
  }

  label {
    font-size: 15px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  .column-1,
  .colmun-2 {
    margin: 0 30px;
  }

  .form-container {
    margin-top: 0px;
    display: grid;
    grid-template-areas: "right left";
    grid-template-columns: 1fr 1fr;
  }

  .column-1 {
    grid-area: right;
  }

  .colmun-2 {
    grid-area: left;
  }
}
h3 {
  color: #101748;
  font-weight: 600;
  margin: 0 30px;
}

ul {
  padding: 0;
}

.details-box {
  padding: 0 30px;
}

.details-item {
  color: #101748;
  font-size: 15px;
  font-weight: 600;
  text-align: right;
  margin-top: 25px;
  /* background-color: #fff; */
  border-bottom: solid 1px #d0d3e2;
}

.details-titel {
  font-size: 12px;
  float: left;
  color: #8f92a5;
}
.button {
  width: 100px;
  height: 100px;
  background-color: black;
}
</style>

<script>
import edit from "../../../assets/edit.js";

export default {
  computed: {
    song: function () {
      return this.$store.state.songs;
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
      this.$store.commit("search");
      console.log(this.$store.state.result);
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