<template>
  <div class="genre-container">
    <ul class="genre-box">
      <li
        class="genre-inner"
        v-for="(genres, index) in genre.length"
        :key="genres.id"
        @click="genre_click(index)"
      >
        <Clowd-box />
        <p class="genre-title">{{ genre[index] }}</p>
      </li>
    </ul>
    <Score-list :genre_index="genre_index" />
  </div>
</template>
<script>
const genre_index = { number: 0 };
export default {
  data: function () {
    return {
      genre_index: genre_index,
    };
  },
  computed: {
    song: function () {
      return this.$store.state.songs;
    },
    genre: function () {
      return this.$store.state.genre;
    },
  },
  methods: {
    genre_click: function (index) {
      this.$store.commit("genre_click", index);
      genre_index.number = index;
      console.log(this.genre_index);
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
  position: relative;
  z-index: 0;
}

.genre-box::-webkit-scrollbar {
  display: none;
}

.genre-inner {
  scroll-snap-align: center;
  display: inline-block;
  width: 130px;
  height: 150px;
  white-space: normal;
  background-color: #fff;
  margin-right: 35px;
  border-radius: 8px;
  position: relative;
  top: 20px;
  z-index: 0;
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
    padding: 0 50px;
    margin: 35px 0 0 0;
  }

  .genre-box::-webkit-scrollbar {
    display: initial;
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
