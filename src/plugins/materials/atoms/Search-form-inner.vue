<template>
  <form class="form-inner" v-on:submit.prevent="submit">
    <div class="form-box">
      <label for="select"></label>
      <select v-model="selected">
        <option v-for="option in options" :key="option.id" :value="option">
          {{ option.text }}{{ option.value }}
        </option>
      </select>

      <label for="keyword"></label>
      <input
        type="text"
        placeholder="検索キーワードを入力"
        class="col-sm-9 form-control form-input"
        id="keyword"
        v-model="keyword"
      />
    </div>

    <div class="colmun-2">
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
  props: {
    value: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.form-inner {
  z-index: 1;
}

.form-input {
  border: none;
  outline: none;
  text-align: left;
  background: #e9e9e9;
  color: #8f92a5;
  width: 80%;
  height: 39px;
  border-radius: 8px;
  margin: 15px 30px;
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

.colmun-2 {
  display: none;
}

@media screen and (min-width: 1024px) {
  .form-inner {
    width: 100%;
    z-index: 0;
  }

  .form-input {
    width: 480px;
    height: 42px;
    margin: 9px 0;
  }
}
</style>
