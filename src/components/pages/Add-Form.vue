<template>
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
            v-model="add_data.title"
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
            v-model="add_data.composer"
          />
        </div>

        <div class="form-box">
          <label for="arranger">編曲者</label>
          <input
            type="text"
            placeholder="編曲者"
            class="col-sm-9 form-control"
            id="arranger"
            v-model="add_data.arranger"
          />
        </div>

        <div class="form-box">
          <label for="publisher">出版社</label>
          <input
            type="text"
            placeholder="出版社"
            class="col-sm-9 form-control"
            id="publisher"
            v-model="add_data.publisher"
          />
        </div>

        <div class="form-box">
          <label for="genre">ジャンル</label>
          <input
            type="text"
            placeholder="ジャンル"
            class="col-sm-9 form-control"
            id="genre"
            v-model="add_data.genre"
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
            v-model="add_data.artist"
          />
        </div>

        <div class="rack-box">
          <div class="form-box">
            <label for="rack">棚番号</label>
            <input type="text" id="shelf" v-model="add_data.shelf" />
            <!-- <p>の</p> -->
          </div>

          <div class="form-box">
            <label for="rack">－</label>
            <input type="text" id="shelfNum" v-model="add_data.shelfNum" />
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
            v-model="add_data.tag"
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
</template>
<script>
import conversion from "../../assets/conversion.js";

const add_data = {
  title: "",
  artist: "",
  composer: "",
  arranger: "",
  publisher: "",
  genre: "",
  shelf: "",
  shelfNum: "",
  tag: "",
};

export default {
  data: function () {
    return {
      add_data: add_data,
    };
  },
  methods: {
    submit() {
      conversion.form(add_data);
      console.log("成功");
      console.log(add_data);
    },
  },
};
</script>

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
</style>