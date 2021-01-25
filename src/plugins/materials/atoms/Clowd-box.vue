<template>
  <div>
    <img src="../assets/genre.png" class="genre" />
    <img src="../assets/l-genre.png" class="l-genre" />
  </div>
</template>


<script>
</script>

<style scoped>
.genre {
  width: 130px;
  height: 150px;
}

.l-genre {
  display: none;
}

@media screen and (min-width: 1024px) {
  .genre {
    display: none;
  }
  .l-genre {
    width: 230px;
    height: 150px;
    margin-right: 70px;
    display: block;
  }
}
</style>
