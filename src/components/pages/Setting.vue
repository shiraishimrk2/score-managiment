<template>
  <div>
    <ul>
      <router-link to="/score-edit">
        <li><Clowd-box /></li
      ></router-link>
    </ul>
    <Use-list />
    <Score-Filter />
  </div>
</template>
<script>
export default {
  data(){
    return {
      song_infos: '',
    }
  },
}
</script>
<style scoped>
canvas {
  width: 100%;
  height: 20%;
}
ul {
  white-space: nowrap;
  padding: 0;
}
ul > li {
  display: inline-block;
  margin-right: 50px;
}
</style>