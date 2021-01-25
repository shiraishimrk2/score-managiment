<template>
  <div id="add-icon">
    <img src="../assets/add.png" width="27px" height="27px" id="icon" />
  </div>
</template>
<style scoped>
#add-icon {
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
  background-color: #ff6e4b;
  position: relative;
  padding: 0;
}
#icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (min-width: 1024px) {
  #add-icon {
    margin: 20px 0;
  }
}
</style>