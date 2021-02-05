<template>
  <div class="genre-container">
    <ul class="genre-box">
      <li
        class="genre-inner"
        v-for="(genres, index) in genre.length"
        :key="genres.id"
        @click="genre_click(index)"
      >
        <Genre-box />
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
  top: 12px;
}

.genre-title {
  font-weight: 600;
  font-size: 13px;
  color: rgb(255, 255, 255);
  position: absolute;
  top: 30%;
  right: 5%;
}

li > a {
  color: white;
  font-size: 1rem;
  display: block;
}

@media screen and (min-width: 1024px) {
  .genre-box {
    height: 150px;
    padding: 0 50px;
    margin: 50px 0 0 0;
  }

  .genre-box::-webkit-scrollbar {
    display: initial;
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
}
</style>
