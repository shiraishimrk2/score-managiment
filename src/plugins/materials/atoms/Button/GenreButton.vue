<template>
  <div>
    <img src="../../assets/genre-box.png" class="genre g-box" />
  </div>
</template>

<style scoped>
.genre {
  width: 150px;
  height: 100px;
  border-radius: 8px;
  z-index: 1;
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
