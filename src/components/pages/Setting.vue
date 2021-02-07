<template>
  <div>
    <ul class="genre-box">
      <li class="genre-inner" @click="edit_click()">
        <Genre-box />
        <p class="genre-title">利用中曲リスト</p>
      </li>

      <li class="genre-inner" @click="lend_click()">
        <Genre-box />
        <p class="genre-title">楽曲の編集</p>
      </li>
    </ul>

    <div v-if="lend">
      <Use-list />
      <Score-Filter />
    </div>

    <div v-else-if="edit">
      <Score-Edit />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lend: true,
      edit: false,
    };
  },
  methods: {
    lend_click() {
      if (this.lend == true) {
        this.lend = !this.lend;
        this.edit = !this.edit;
      }
    },
    edit_click() {
      if (this.edit == true) {
        this.edit = !this.edit;
        this.lend = !this.lend;
      }
    },
  },
};
</script>
<style scoped>
canvas {
  width: 100%;
  height: 20%;
}
ul {
  white-space: nowrap;
  padding: 0;
}
ul > li {
  display: inline-block;
  margin-right: 50px;
}

.genre-box {
  padding: 0 20px;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  overflow: auto;
  width: 100%;
  height: 120px;
  position: relative;
}

.genre-inner {
  scroll-snap-align: center;
  display: inline-block;
  width: 150px;
  height: 100px;
  white-space: normal;
  background-color: #fff;
  margin-right: 23px;
  border-radius: 8px;
  position: relative;
  top: 13px;
}

.genre-title {
  font-weight: 600;
  font-size: 14px;
  color: rgb(255, 255, 255);
  position: absolute;
  top: 25%;
  left: 5%;
}

@media screen and (min-width: 1024px) {
  .genre-box {
    height: 151px;
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