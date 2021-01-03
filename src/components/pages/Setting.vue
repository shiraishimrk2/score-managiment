<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id"><Clowd-box /></li>
    </ul>
    <Use-list />
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [{ id: 1 }, { id: 2 }],
    };
  },
};
</script>
<style scoped>
canvas {
  width: 130px;
  height: 90px;
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