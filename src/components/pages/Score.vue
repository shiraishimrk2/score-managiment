<template>
  <div>
    <ul class="genre-box">
      <li v-for="(genres, index) in genre.length" :key="genres.length">
        <router-link to="/genre"><Clowd-box /></router-link>
        <p class="genre-title">{{ song[1].all_genre[index] }}</p>
      </li>
    </ul>
    <Score-list />
  </div>
</template>
<script>
// const number = { index: 0 };
export default {
  computed: {
    song: function () {
      return this.$store.state.songs;
    },
    genre: function () {
      return this.$store.state.genre;
    },
  },
};
</script>
<style scoped>
.genre-title {
}

router-link {
  font-size: 1rem;
}
body {
  background-color: white;
}

.genre-box {
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  overflow: auto;
  width: 100%;
  height: 200px;
  padding: 0;
  padding: 55px 30px 0 30px;
}

.genre-box::-webkit-scrollbar {
  display: none;
}

li {
  scroll-snap-align: center;
  display: inline-block;
  width: 130px;
  height: 150px;
  white-space: normal;
  background-color: gray;
  margin-right: 6%;
  border-radius: 15px;
  position: relative;
}

li > a {
  color: white;
  font-size: 1rem;
  display: block;
}

@media screen and (min-width: 1024px) {
  li {
    width: 230px;
    height: 150px;
    margin-right: 70px;
  }

  .genre-box {
    padding: 20px 30px 0 30px;
  }
}
</style>

