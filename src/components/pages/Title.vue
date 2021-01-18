<template>
  <div class="title-container">
    <div class="title-box">
      <Title-image class="title-item" />
      <router-link to="/score" class="tap-item">Tap Start</router-link>
    </div>
  </div>
</template>

<style scoped>
body {
  /* position: relative; */
  width: 100%;
  height: 100%;
}

.title-box {
  width: 100%;
  height: 100%;
  /* margin: 40% 0; */
  /* position: absolute; */
}

.tap-item {
  font-weight: 500;
  font-size: 20px;
  color: #d0d3e2;
  /* margin: 30% 0; */
  text-decoration-line: none;

  /* position: absolute; */
}
</style>