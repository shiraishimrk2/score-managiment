<template>
  <form v-on:submit.prevent="submit">
    <div class="form-container">
      <div class="cloumn-1">
        <div class="form-box">
          <label for="title" class="col-sm-3 col-form-label">曲名</label>
          <input
            type="text"
            class="col-sm-9 form-control"
            id="title"
            v-model="song_info.title"
          />
        </div>

        <div class="form-box">
          <label for="title" class="col-sm-3 col-form-label"
            >アーティスト</label
          >
          <input
            type="text"
            class="col-sm-9 form-control"
            id="artist"
            v-model="song_info.artist"
          />
        </div>

        <div class="form-box">
          <label for="title" class="col-sm-3 col-form-label">作曲者</label>
          <input
            type="text"
            class="col-sm-9 form-control"
            id="composer"
            v-model="song_info.composer"
          />
        </div>

        <div class="form-box">
          <label for="title" class="col-sm-3 col-form-label">編曲者</label>
          <input
            type="text"
            class="col-sm-9 form-control"
            id="arranger"
            v-model="song_info.arranger"
          />
        </div>

        <div class="form-box">
          <label for="title" class="col-sm-3 col-form-label">出版社</label>
          <input
            type="text"
            class="col-sm-9 form-control"
            id="publisher"
            v-model="song_info.publisher"
          />
        </div>
        <div class="rack-box">
          <p>棚入力欄</p>
        </div>
      </div>
      <div class="colmun-2">
        <button type="submit" class="btn btn-primary">登録</button>
      </div>
    </div>
  </form>
</template>
<script>
import songs from "../../assets/song.json";
// import axios from "axios";
// console.log(songs);

const song_info = songs[0].all_song;
console.log(song_info);

export default {
  data: function () {
    return {
      songs: songs,
      song_info: song_info,
    };
  },
  methods: {
    submit() {
      song_info.push();
    },
  },
};
</script>

<style scoped>
.form-box {
  margin-top: 20px;
  border-bottom: solid 1px #d0d3e2;
  background: #f6f6f6;
  display: grid;
  grid-template-columns: 1fr 3fr;
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
    font-weight: 500;
    padding-bottom: 10px;
  }

  .form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>