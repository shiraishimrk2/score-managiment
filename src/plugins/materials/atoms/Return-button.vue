<template>
  <button @cilck="return_click()">返却する</button>
</template>
<script>
import conversion from "../../../assets/conversion.js";
export default {
  computed: {
    lendScore: function () {
      return this.$store.getters.lends;
    },
  },
  methods: {
    return_click() {
      conversion.return_click(this.index, this.lendScore);
    },
  },
  props: {
    index: {
      type: Number,
    },
  },
};
</script>
<style scoped>
button {
  border: 2px solid #101748;
  border-radius: 2px;
  background-color: #101748;
  color: white;
}
</style>