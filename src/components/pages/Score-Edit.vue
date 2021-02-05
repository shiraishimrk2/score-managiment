<template>
  <div>
    <ul class="edit-box">
      <li class="edit-inner">
        <Edit-box />
        <p class="genre-title">楽曲リストを編集</p>
      </li>
    </ul>

    <div class="scorelist-box">
      <Score-list />
    </div>
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
.genre-title {
  font-weight: 600;
  font-size: 16px;
  color: rgb(255, 255, 255);
  position: absolute;
  top: 35%;
  right: 5%;
}

.edit-box {
  margin-top: 60px;
  padding-left: 30px;
}

.genre-title {
  font-weight: 600;
  font-size: 16px;
  color: rgb(255, 255, 255);
  position: absolute;
  top: 15%;
  right: 10%;
}

.scorelist-box {
  margin-top: 55px;
}
</style>