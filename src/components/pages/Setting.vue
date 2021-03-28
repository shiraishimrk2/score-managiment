<template>
  <div>
    <ul class="genre-box">
      <li class="genre-inner use-box" @click="edit_click()">
        <GenreButton />
        <p class="genre-title">利用中曲リスト</p>
      </li>

      <li class="genre-inner edit-box" @click="lend_click()">
        <GenreButton />
        <p class="genre-title">楽曲の編集</p>
      </li>
    </ul>

    <div v-if="lend">
      <div class="title-box">
        <h3 class="use-title">利用中曲リスト</h3>
      </div>
      <LendScore />
    </div>

    <div v-else-if="edit">
      <!-- <Score-Edit /> -->
    <ScoreList/>
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
ul {
  white-space: nowrap;
  padding: 0;
}
ul > li {
  display: inline-block;
  margin-right: 50px;
}

.genre-box {
  padding-left: 20px;
  padding-right: 20px;
  width: 150px;
  height: 120px;
  position: relative;
}

.genre-inner {
  display: inline-block;
  width: 150px;
  height: 100px;
  position: relative;
  top: 13px;
  background-color: #fff;
  border-radius: 8px;
  margin-right: 20px;
}

.genre-title {
  font-weight: 600;
  font-size: 14px;
  color: rgb(255, 255, 255);
  position: absolute;
  top: 25%;
  left: 5%;
}

.title-box {
  margin-top: 25px;
  padding: 0px 30px;
  border-bottom: solid 2px #eff0f4;
}

.use-title {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  letter-spacing: 0.15em;
  color: #d0d3e2;
}

@media screen and (min-width: 1024px) {
  .genre-box {
    height: 151px;
    margin-left: 50px;
    margin-top: 30px;
    padding: 0;
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
    cursor: default;
  }

  .title-box {
    margin-top: 0;
    padding: 0px 50px;
  }
}
</style>