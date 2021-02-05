<template>
  <div>
    <ul>
      <li @click="lend_click()"><Genre-box />編集</li>
      <li @click="edit_click()"><Genre-box />貸し出し</li>
    </ul>

    <div v-if="lend">
      <Use-list />
      <Score-Filter />
    </div>

    <div v-else-if="edit">
      <Score-Edit />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lend: true,
      edit: false,
    };
  },
  methods: {
    lend_click() {
      if (this.lend == true) {
        this.lend = !this.lend;
        this.edit = !this.edit;
      }
    },
    edit_click() {
      if (this.edit == true) {
        this.edit = !this.edit;
        this.lend = !this.lend;
      }
    },
  },
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