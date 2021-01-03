<template>
  <div class="score-list">
    <ul
      class="song-box"
      @click="
        toggle();
        sendindex(index);
      "
    >
      <li class="song"></li>
      <li class="song"></li>
      <li class="song"></li>
    </ul>
    <Score-Details
      class="Accordion-Item"
      :class="{ transform: isOpened, tamesi: isClosed }"
      :song="scorelists"
    >
    </Score-Details>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      scorelists: [],
      isOpened: true,
      isClosed: false,
      indexlist: [],
      // tamesi: tamesi,
    };
  },
  // computed: {
  //   song_list: function () {
  //     for (var i = 0; i < this.scorelists.length; i++) {
  //       if ((this.scorelists[i].id = this.id)) {
  //         return this.scorelists[i];
  //       }
  //     }
  //   },
  // },
  methods: {
    // getScorelists() {
    //   axios.get("/api/scores").then((res) => {
    //     this.scorelists = res.data;
    //   });
    // },
    toggle() {
      // var tamesi = document.querySelectorAll(".song-box");
      // var tamesi = document.getElementsByClassName("title");
      this.isOpened = !this.isOpened;
      this.isClosed = !this.isClosed;
      // console.log(index);
      // console.log(tamesi);
    },
    // sendindex(index) {
    //   this.index.push(index);
    // },
  },
  // mounted() {
  //   this.getScorelists();
  // },
};
</script>
<style scoped>
.Accordion-Item {
  width: 100%;
  /* height: 50px; */
  background: #f6f6f6;
  transition: all 300ms 0s ease;
  position: relative;
  /* top: -200px; */
  /* z-index: -10; */
}
.transform {
  transform: translateY(280px);
  display: none;
}
.tamesi {
  transform: translateY(-300px);
}
</style>