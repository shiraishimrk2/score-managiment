<template>
  <div id="movie-icon">
    <img src="../assets/genre.png" class="genre g-box" />
    <img src="../assets/l-genre.png" class="l-genre g-box" />
  </div>
</template>


<script>
</script>

<style scoped>
.genre {
  width: 130px;
  height: 150px;
  border-radius: 8px;
}

.l-genre {
  display: none;
}

.g-box:hover {
  opacity: 0.5;
}

@media screen and (min-width: 1024px) {
  .genre {
    display: none;
  }

  .l-genre {
    width: 230px;
    height: 150px;
    display: block;
  }
}
</style>
