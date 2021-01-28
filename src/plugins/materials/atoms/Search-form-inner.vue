<template>
  <form class="form-inner" v-on:submit.prevent="submit">
    <div class="form-box">
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
    song: function () {
      return this.$store.state.songs;
    },
  },
  data: function () {
    return {
      keyword: "",
    };
  },
  methods: {
    submit() {
      this.$store.commit("song_search", this.keyword);
    },
  },
};
</script>
<style scoped>
.form-inner {
 
}

.form-input {
  border: none;
  outline: none;
  text-align: left;
  background: #e9e9e9;
  color: #8f92a5;
  width: 70%;
  height: 39px;
  border-radius: 8px;
  margin: 15px;
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
  }

  .form-input {
    width: 480px;
    height: 42px;
    margin: 9px 0;
  }
}
</style>