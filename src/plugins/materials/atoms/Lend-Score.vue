<template>
  <div class="lend-container">
    <div
      class="lend-box"
      v-for="(lendScores, index) in lendScore"
      :key="lendScores.aa"
    >
      <p class="lend-title">{{ lendScores.title }}</p>
      <p class="lend-rack">{{ lendScores.shelf }}-{{ lendScores.shelfNum }}</p>
      <div class="lend-button" @click="lend(index)">
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
    lend: function (index) {
      conversion.return_click(index, this.lendScore);
    },
  },
};
</script>


<style scoped>
.lend-container {
  width: 100%;
  height: 450px;
  /* max-height: 500px; */
  display: block;
  overflow-y: scroll;
}

.lend-container::-webkit-scrollbar {
  display: none;
}

.lend-box {
  margin-top: 15px;
  padding-bottom: 15px;
  display: grid;
  grid-template-columns: 1fr 0.3fr 0.5fr;
  border-bottom: 1.5px solid #eff0f4;
}

.lend-title {
  margin: 0;
  padding-left: 30px;
  font-size: 14px;
  font-weight: 600;
  color: #101748;
}

.lend-rack {
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: #646886;
}

.lend-button {
  text-align: right;
  padding-right: 30px;
}

@media screen and (min-width: 1024px) {
  .lend-box {
    margin-top: 15px;
    padding-bottom: 8px;
  }

  .lend-title {
    padding-left: 50px;
  }

  .lend-button {
    padding-right: 50px;
  }
}
</style>