<template>
  <div id="rack">
    <div id="rack-icon"></div>
  </div>
</template>
<style scoped>
#rack {
  width: 100%;
  height: 380px;
}
#rack-icon {
  background: url("../assets/rack.png") no-repeat;
  background-position: center;
  display: inline-block;
  width: 50%;
  height: 50%;
  margin: 0;
}
@media screen and (min-width: 481px) {
  /* 481px以上に適用されるCSS（タブレット用） */
  #icon6 {
    max-width: 450px;
  }
}
</style>