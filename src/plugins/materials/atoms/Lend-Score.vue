<template>
  <div>
    <div v-for="(lendScores, index) in lendScore" v-bind:key="lendScores.id">
      <h3>{{ lendScores.title }}</h3>
      <Return-button :index="index" />
    </div>
  </div>
</template>
<script>
import conversion from "../../../assets/conversion.js";
export default {
  computed: {
    lendScore() {
      return this.$store.state.lends;
    },
  },
  methods: {
    return_click(index) {
      conversion.return_click(index, this.lendScore);
    },
  },
};
</script>
