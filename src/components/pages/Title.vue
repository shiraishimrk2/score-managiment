<template>
  <div class="title-container">
    <div class="title-box">
      <router-link to="/score" class="tap-item">
        <Title-image class="title-item" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.main {
  position: relative;
}

.tap-item {
  position: absolute;
  top: 30%;
  left: 10%;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  color: #d0d3e2;
  text-decoration-line: none;
}
</style>