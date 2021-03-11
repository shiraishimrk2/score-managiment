<template>
  <form @submit.prevent.once="submit">
    <div class="form-container">
      <div class="column-1">
        <div class="form-box">
          <label for="title">曲名*</label>
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
          <label for="genre">ジャンル*</label>
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
          <div class="form-box rack__item">
            <label for="rack">棚番号*</label>
            <input type="text" id="shelf" v-model="add_data.shelf" required />
            <!-- <p>の</p> -->
          </div>

          <div class="form-box rack__item2">
            <label for="rack">－</label>
            <input
              type="text"
              id="shelfNum"
              v-model="add_data.shelfNum"
              required
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
            v-model="add_data.tag"
          />
        </div>

        <div class="form-box">
          <label for="remarks">備考欄</label>
          <textarea
            name="備考欄"
            cols="50"
            rows="5"
            placeholder="(例) スコア無し"
            class="col-sm-9 form-control remarks"
            id="remarks"
            v-model="add_data.remarks"
          />
        </div>
      </div>

      <div class="colmun-2">
        <div
          class="youtube-box"
          v-for="(youtube_link, index) in add_data.youtube"
          :key="youtube_link.index"
        >
          <label for="youtube">YoutubeID</label>
          <input
            type="text"
            placeholder="https://www.youtube.com/watch?v=***********"
            class="col-sm-9 form-control"
            id="youtube"
            v-model="add_data.youtube[index]"
          />
          <button type="button" @click="incrace_youtube()">＋</button>

          <button v-show="link_pices" type="button" @click="decrace_youtube()">
            －
          </button>
        </div>
        <div class="button-box">
          <button type="submit" class="add-button">登録</button>
        </div>
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
  remarks: "",
  youtube: [""],
};

export default {
  computed: {
    link_pices: function () {
      return this.add_data.youtube.length >= 2;
    },
  },
  data: function () {
    return {
      add_data: add_data,
    };
  },
  methods: {
    submit() {
      this.processing = true;
      conversion.form(add_data);
      console.log("成功");
      console.log(add_data);
    },
    incrace_youtube() {
      this.add_data.youtube.push("");
      console.log(this.add_data.youtube);
    },
    decrace_youtube() {
      this.add_data.youtube.pop();
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

  background: #f6f6f6;
  display: grid;
  grid-gap: 2%;
  grid-template-columns: 1.3fr 3fr;
}

.youtube-box {
  margin-top: 20px;

  background: #f6f6f6;
  display: grid;
  grid-gap: 2%;
  grid-template-columns: 1.3fr 3fr 0.5fr 0.5fr;
}

label {
  margin-top: 3px;
  display: inline-block;
  color: #101748;
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 0;
  /* border-bottom: solid 1px #d0d3e2; */
}

input[type="text"] {
  width: 100%;
  height: 20px;
  padding-bottom: 10px;
  border: none;
  outline: none;
  background: none;
  color: #101748;
  font-weight: 600;
  border-bottom: 2px solid #eff0f4;
}

input::placeholder {
  color: #d0d3e2;
}

input:focus {
  outline: 1px solid #ffa690;
  outline-offset: -1px;
}

.rack-box {
  display: grid;
  /* text-align: center; */
  grid-gap: 0;
  grid-template-columns: 2fr 1fr;
}

.rack__item {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
}

.rack__item2 {
  display: grid;
  grid-template-columns: 0.3fr 2.5fr;
}

.add-button {
  width: 40px;
  height: 40px;
  border-style: none;
  outline: none;
  background: #f6f6f6;
  color: #101748;
  font-size: 14px;
  /* font-weight: 600; */
  position: absolute;
  top: 3px;
  right: 20px;
}

.remarks {
  border: none;
  stroke: none;
  width: 100%;
  resize: vertical;
  border-bottom: 2px solid #eff0f4;
  background-color: #f6f6f6;
}

textarea {
  height: 60px;
  color: #101748;
  font-size: 13px;
  font-weight: 600;
  opacity: 1;
  font-family: "メイリオ";
}

textarea::placeholder {
  color: #d0d3e2;
}

button {
  width: 25px;
  height: 25px;
  padding: 0;
  background: #f6f6f6;
  border: solid 2px #8f92a5;
  color: #8f92a5;
  font-size: 15px;
  font-weight: 600;
  border-radius: 3px;
}

button:hover {
  opacity: 0.5;
}
/* 
button:active {
  background-color: #f05800;
} */
@media screen and (min-width: 1024px) {
  .form-box {
    margin-top: 20px;
    grid-template-columns: 1fr 4fr;
  }

  .youtube-box {
    grid-template-columns: 1fr 4fr 0.3fr 0.3fr;
  }

  label {
    font-size: 15px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  .form-container {
    margin-top: 30px;
    display: grid;
    grid-template-areas: "left right";
    grid-template-columns: 1fr 1fr;
  }

  input[type="text"] {
    height: 28px;
  }

  .rack-box {
    display: grid;
    /* text-align: center; */
    grid-gap: 0;
    grid-template-columns: 1.5fr 1fr;
  }

  .rack__item {
    display: grid;
    grid-template-columns: 1fr 1.8fr;
  }

  .rack__item2 {
    display: grid;
    grid-template-columns: 0fr 1.5fr;
  }

  .column-1 {
    grid-area: left;
    margin-left: 10px;
  }

  .colmun-2 {
    grid-area: right;
    margin-top: 0;
  }

  .add-button {
    width: 80px;
    height: 40px;
    border-radius: 3px;
    background: #101748;
    color: #fff;
    font-size: 13px;
    position: static;
    display: block;
    margin: 0 0 0 auto;
  }

  .button-box {
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
}
</style>