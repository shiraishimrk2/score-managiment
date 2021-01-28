<template>
  <form class="form-inner" v-on:submit.prevent="submit">
    <div class="form-box">
      <label for="keyword">キーワード</label>
      <input
        type="text"
        class="col-sm-9 form-control"
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