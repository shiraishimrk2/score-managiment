<template>
  <form class="form-container" v-on:submit.prevent="submit">
    <div class="form-container-section">
      <div class="section__inner">
        <label for="select"></label>
          <select class="select__inner__item" v-model="selected">
            <option
              type="radio"
              class="inner__item"
              v-for="option in options"
              :key="option.id"
              :value="option"
            >
              {{ option.text }}
            </option>
          </select>
      </div>

      <div class="section__inner">
        <label for="keyword"></label>
        <input
          type="text"
          placeholder="検索キーワードを入力"
          class="inner__input"
          id="keyword"
          v-model="keyword"
        />
      </div>
    </div>
    <div class="form-container-section--2">
      <button type="submit">検索</button>
    </div>
  </form>
</template>
<script>
export default {
  computed: {
    song: function() {
      return this.$store.state.songs;
    },
    selected: {
      get() {
        return this.$store.state.Search_tags;
      },
      set(value) {
        this.$store.commit("updateSearch_tags", value);
      },
    },
  },
  data: function() {
    return {
      keyword: "",
      // selected: { text: "検索項目", value: "" },
      options: [
        { text: "検索項目", value: "" },
        { text: "曲名", value: "title" },
        { text: "作曲者", value: "artist" },
        { text: "編曲者", value: "arranger" },
      ],
    };
  },
  methods: {
    submit() {
      console.log(this.selected.value);
      // console.log(this.selected.text);
      this.$store.commit("song_search", this.keyword);
    },
  },
  // props: {
  //   value: {
  //     type: Object,
  //   },
  // },
};
</script>
<style scoped>

.form-container-section {
  display: grid;
  grid-template-columns: 0.5fr 3fr;
}

.form-container {
  z-index: 1;
  width: 100%;
  height: 70px;
  position: absolute;
  background: #f6f6f6;
  border-bottom: solid 2px #e8e8e8;
  border-top: solid 2px #e8e8e8;
  overflow: hidden;
  opacity: 0;
  transition: 0.3s;
  z-index: 1;
  text-align: center;
  pointer-events: none;
}

.select__inner__item {
  width: 100px;
  height: 40px;
  border: solid 2px #e9e9e9;
  color: #101748;
  background: #f6f6f6;
  border-radius: 6px;
  margin-top: 15px;
  margin-left: 10px;
  font-size: 10px;
  font-weight: 600;
}

.inner__item {
  font-size: 12px;
  padding: 10px;
  font-weight: 600;
  background: #ececec;
  border: solid 2px #e9e9e9;
  border-radius: 6px;
}

.inner__input {
  border: none;
  outline: none;
  text-align: left;
  background: #e9e9e9;
  color: #8f92a5;
  width: 85%;
  height: 39px;
  border-radius: 6px;
  margin-top: 15px;
  margin-left: 10px;
  float: left;
}

input[type="text"] {
  font-size: 12px;
  color: #242a56;
  font-weight: 600;
  padding-left: 15px;
}

input::placeholder {
  color: #babbc5;
}

.form-container-section--2 {
  display: none;
}

@media screen and (min-width: 1024px) {
  .form-container {
    width: 100%;
    z-index: 0;
    border-top: none;
    height: 60px;
    opacity: 1;
    pointer-events: all;
  }

  .select__inner__item {
    height: 42px;
    margin-top: 9px;
    font-size: 12px;
  }

  .inner__item {
    font-size: 14px;
  }
  .inner__input {
    width: 35%;
    height: 42px;
    margin: 9px 0;
  }
}
</style>
