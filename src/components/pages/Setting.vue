<template>
  <div>
    <ul>
      <li><Clowd-box /></li>
    </ul>
    <Use-list />
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     items: [{ id: 1 }, { id: 2 }],
  //   };
  // },
};
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