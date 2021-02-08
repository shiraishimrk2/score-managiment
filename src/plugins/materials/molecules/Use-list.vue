<template>
  <div>
    <h3 class="use-title">利用中曲リスト</h3>
    <!-- <ul v-for="scorelist in scorelists" v-bind:key="scorelist.id">
      <li>{{ scorelist.title }}</li>
    </ul> -->
  </div>
</template>
<style scoped>
.use-title {
  border-bottom: 2px solid #eff0f4;
  color: #d0d3e2;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 35px;
  margin-bottom: 0;
}

@media screen and (min-width: 1024px) {
  .use-title {
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 20px;
  }
}
</style>
<script>
export default {
  data: function () {
    return {
      name: "#app",
      // scorelists: [],
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
