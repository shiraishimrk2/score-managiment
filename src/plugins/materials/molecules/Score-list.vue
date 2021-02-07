<template>
  <section class="list-title">
    <div class="title-box">
      <h3 class="title-inner" v-if="$route.name == '楽譜リスト'">
        {{ word ? "ALL LIST" : Search_Word }}
      </h3>
      <h3 class="title-inner" v-else>ALL LIST</h3>
      <div class="icon-box">
        <Moviesort-icon class="icon-inner" />
      </div>
    </div>
    <List-item />
  </section>
</template>
<script>
export default {
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
  padding: 10px 0;
}

.title-box {
  margin: 0px 30px;
  height: 40px;
  border-bottom: solid 2px #eff0f4;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
.icon-box {
  display: inline-block;
  margin-right: auto;
  width: 100%;
  text-align: right;
}

.icon-inner {
  /* float: right; */
  display: inline;
  padding-left: 10px;
}

@media screen and (min-width: 1024px) {
  .title-box {
    margin: 0 50px;
  }
}
</style>