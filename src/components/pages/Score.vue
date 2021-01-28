<template>
  <div>
    <ul class="genre-box">
      <li
        class="genre-inner"
        v-for="(genres, index) in genre.length"
        :key="genres.length"
      >
        <router-link to="/genre"><Clowd-box /></router-link>
        <p class="genre-title">{{ genre[index] }}</p>
      </li>
    </ul>
    <Score-list />
  </div>
</template>
<script>
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
.genre-box {
  padding: 0 30px;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  overflow: auto;
  width: 100%;
  height: 180px;
  -webkit-overflow-scrolling: touch; /* スクロールを滑らかにする */
  /* padding: 0; */
}

.genre-box::-webkit-scrollbar {
  display: none;
}

router-link {
  font-size: 1rem;
}

.genre-inner {
  scroll-snap-align: center;
  display: inline-block;
  width: 130px;
  height: 150px;
  white-space: normal;
  background-color: gray;
  margin-right: 35px;
  border-radius: 8px;
  position: relative;
  top: 20px;
}

.genre-title {
  font-weight: 600;
  font-size: 16px;
  color: rgb(255, 255, 255);
  position: absolute;
  top: 35%;
  right: 10%;
}

li > a {
  color: white;
  font-size: 1rem;
  display: block;
}

@media screen and (min-width: 1024px) {
  .genre-box {
    padding: 0 30px;
  }

  .genre-inner {
    width: 230px;
    height: 150px;
    margin-right: 70px;
    position: relative;
    top: 10px;
  }
}
</style>

