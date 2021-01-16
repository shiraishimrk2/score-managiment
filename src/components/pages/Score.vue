<template>
  <div>
    <ul>
      <!-- <li v-for="scorejenle in scorejenles" :key="scorejenle.id">
        <router-link to="/genre"><Clowd-box /></router-link>
        scorejenleの配列はバックからもってくる
      </li> -->
      <li v-for="(genre,index) in song[1].all_genre.length" :key="genre.length">
        <router-link to="/genre"><Clowd-box /></router-link>
        <!-- scorejenleの配列はバックからもってくる -->
        <p>{{song[1].all_genre[index]}}</p>
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
  },
};
</script>
<style scoped>
router-link {
  font-size: 1rem;
}
body {
  background-color: white;
}

h1 {
  text-align: center;
}

ul {
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  overflow: auto;
  width: 100%;
  height: 200px;
  padding: 0;
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
}

li > a {
  color: white;
  font-size: 1rem;
  display: block;
}
</style>

