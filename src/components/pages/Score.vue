<template>
  <div class="genre-container">
    <ul class="genre-box">
      <li
        class="genre-inner"
        v-for="(genres, index) in genre.length"
        :key="genres.id"
        @click="genre_click(index)"
      >
        <GenreButton />
        <p class="genre-title">{{ genre[index] }}</p>
      </li>
    </ul>
    <ScoreList :genre_index="genre_index" />
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
  padding: 0 20px;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  overflow: auto;
  width: 100%;
  height: 120px;
  position: relative;
}

.genre-box::-webkit-scrollbar {
  display: none;
}

.genre-inner {
  scroll-snap-align: center;
  display: inline-block;
  width: 150px;
  height: 100px;
  white-space: normal;
  background-color: #fff;
  margin-right: 20px;
  border-radius: 8px;
  position: relative;
  top: 13px;
}

.genre-title {
  font-weight: 600;
  font-size: 14px;
  color: rgb(255, 255, 255);
  position: absolute;
  cursor: default;
  top: 25%;
  left: 5%;
}

li > a {
  color: white;
  font-size: 1rem;
  display: block;
}

@media screen and (min-width: 1024px) {
  .genre-box {
    height: 160px;
    padding: 0;
    margin-left: 50px;
    margin-top: 30px;
    overflow-x: hidden;
  }

  .genre-box:hover {
    overflow-x: auto;
  }

  .genre-box::-webkit-scrollbar {
    display: block;
    background-color: #f7f3f3;
  }

  .genre-box::-webkit-scrollbar-thumb {
    background-color: #e2e2e5;
  }

  .genre-inner {
    width: 195px;
    height: 120px;
    margin-right: 55px;
    position: relative;
    top: 0px;
  }

  .genre-title {
    font-size: 15px;
    top: 35%;
  }

  @media screen and (min-width: 1370px) {
    .genre-box {
      height: 155px;
    }
  }
}
</style>
