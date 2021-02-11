<template>
  <div>
    <img src="../assets/genre.png" class="genre g-box" />
    <img src="../assets/l-genre.png" class="l-genre g-box" />
  </div>
</template>

<style scoped>
.genre {
  width: 150px;
  height: 100px;
  border-radius: 8px;
  z-index: 1;
}

.l-genre {
  display: none;
}

.g-box:hover {
  opacity: 0.8;
}

@media screen and (min-width: 1024px) {
  .genre {
    width: 195px;
    height: 130px;
  }
}
</style>
