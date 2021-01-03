<template>
  <div>
    <h3>利用中曲リスト</h3>
    <ul v-for="scorelist in scorelists" v-bind:key="scorelist.id">
      <li>{{ scorelist.title }}</li>
    </ul>
  </div>
</template>
<style scoped>
h3 {
  border-bottom: 2px solid #eff0f4;
  color: #d0d3e2;
}
</style>
<script>
export default {
  data: function () {
    return {
      name: "#app",
      scorelists: [],
    };
  },
  // methods: {
  //   getScorelists() {
  //     axios.get("/api/scores").then((res) => {
  //       this.scorelists = res.data;
  //     });
  //   },
  //   deleteScorelist(id) {
  //     axios.delete("/api/scores" + id).then((res) => {
  //       this.getScorelists();
  //     });
  //   },
  // },
  // mounted() {
  //   this.getScorelists();
  // },
};
</script>
