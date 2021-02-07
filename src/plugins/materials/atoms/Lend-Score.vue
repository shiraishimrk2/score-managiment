<template>
  <div>
    <div v-for="(lendScores, index) in lendScore" :key="lendScores.aa">
      <h3>{{ lendScores.title }}</h3>
      <p>{{ lendScores.shelf }}-{{ lendScores.shelfNum }}</p>
      <div @click="tamesi(index)">
        <Return-button />
      </div>
    </div>
  </div>
</template>
<script>
import conversion from "../../../assets/conversion.js";
export default {
  computed: {
    lendScore() {
      return this.$store.getters.lends;
    },
  },
  methods: {
    tamesi: function (index) {
      conversion.return_click(index, this.lendScore);
    },
  },
};
</script>