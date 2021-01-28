<template>
  <div class="title-container">
    <router-link to="/score" class="tap-item">
      <div class="title-box">
        <Title-image class="title-img" />
        <p class="title-text blinking">Tap Start</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
html {
  position: relative;
  width: 100%;
  height: 100%;
}

.title-box {
  width: 100%;
  height: 100%;
  /* text-align: center; */
}

.title-img {
  position: absolute;
  top: 35%;
}

.title-text {
  font-weight: 500;
  font-size: 20px;
  color: #393f66;
  text-decoration-line: none;
  position: absolute;
  top: 80%;
  left: 38%;
}

.blinking {
  animation: blinkAnime 0.5s infinite alternate;
}

@keyframes blinkAnime {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (min-width: 1024px) {
  .title-text {
    top: 55%;
    left: 10%;
  }
}
</style>