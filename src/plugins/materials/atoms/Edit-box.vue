<template>
  <div>
    <img src="../assets/editbox.png" class="g-box editbox" />
    <img src="../assets/l-editbox.png" class="g-box l-editbox" />
  </div>
</template>

<style scoped>
.editbox {
  width: 315px;
  height: 90px;
}

.l-editbox {
  display: none;
}

@media screen and (min-width: 1024px) {
  .editbox {
    display: none;
  }

  .l-editbox {
    display: block;
    width: 1166px;
    height: 100px;
  }
}
</style>