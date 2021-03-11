<template>
  <section class="list-title">
    <div class="title-box">
      <h3 class="title-inner" v-if="$route.name == '楽譜リスト'">
        {{ word ? "ALL LIST" : Search_Word }}
      </h3>
      <h3 class="title-inner" v-else>ALL LIST</h3>
      <!-- <div @click="movie_click()" class="icon-box">
        <Moviesort-icon class="icon-inner" />
      </div> -->
    </div>
    <div class="listitem-container">
      <List-item />
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    movie_click: function () {
      this.$store.commit("movie_click");
    },
  },
  computed: {
    genre: function () {
      return this.$store.state.genre;
    },
    Search_Word: function () {
      return this.$store.state.Search_Word;
    },
    word: function () {
      const word = this.$store.state.Search_Word;
      return word == "";
    },
  },
  props: {
    genre_index: {
      type: Object,
    },
  },
};
</script>


<style scoped>
.list-title {
  height: 100%;
  padding: 10px 0;
}

.title-box {
  padding: 0px 30px;
  height: 40px;
  border-bottom: solid 2px #eff0f4;
}

.title-inner {
  width: 200px;
  display: inline;
  margin-top: 5px;
  font-size: 20px;
  letter-spacing: 0.15em;
  font-weight: 600;
  color: #d0d3e2;
}

.listitem-container {
  width: 100%;
  height: 100%;
}

.icon-box {
  display: inline-block;
  margin-right: auto;
  width: 100%;
  height: 100%;
  text-align: right;
  opacity: 0.3;
}

.icon-inner {
  /* float: right; */
  /* background-color: aquamarine; */
  width: 40px;
  height: 24px;
  display: inline;
  padding-left: 10px;
}

@media screen and (min-width: 1024px) {
  .title-box {
    padding: 0 50px;
    margin: 0;
  }
}
</style>