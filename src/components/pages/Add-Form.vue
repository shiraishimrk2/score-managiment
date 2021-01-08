<template>
  <form v-on:submit.prevent="submit">
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">曲名</label>
      <input
        type="text"
        class="col-sm-9 form-control"
        id="title"
        v-model="song_info.title"
      />
    </div>
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">アーティスト</label>
      <input
        type="text"
        class="col-sm-9 form-control"
        id="artist"
        v-model="song_info.artist"
      />
    </div>
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">作曲者</label>
      <input
        type="text"
        class="col-sm-9 form-control"
        id="composer"
        v-model="song_info.composer"
      />
    </div>
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">編曲者</label>
      <input
        type="text"
        class="col-sm-9 form-control"
        id="arranger"
        v-model="song_info.arranger"
      />
    </div>
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">出版社</label>
      <input
        type="text"
        class="col-sm-9 form-control"
        id="publisher"
        v-model="song_info.publisher"
      />
    </div>
    <button type="submit" class="btn btn-primary">登録</button>
  </form>
</template>
<script>
import songs from "../../assets/song.json";
import axios from "axios";
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