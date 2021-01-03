<template>
  <div class="icon icon--plus">
    <span class="icon__mark"></span>
  </div>
</template>
<style scoped>
.icon {
  position: relative;
  width: 20px;
  height: 20px;
  background: #101748;
  border-radius: 50%;
}

.icon::before,
.icon--plus::after {
  position: absolute;
  top: 9px;
  left: 50%;
  content: "";
  display: inline-block;
  width: 13px;
  height: 13px;
  border-top: 2px solid #fff;
  transform: translateX(-50%);
}

.icon--plus:after {
  top: 3px;
  left: -2px;
  transform: rotate(90deg);
}
</style>