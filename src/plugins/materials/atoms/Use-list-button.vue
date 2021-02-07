<template>
  <button :disabled="click" @click="lendScore()" :class="click ? gray : blue">
    {{ click ? "利用中" : "利用する" }}
  </button>
</template>
<script>
import conversion from "../../../assets/conversion.js";
export default {
  data: function () {
    return {
      blue: "blue",
      gray: "gray",
    };
  },
  computed: {
    song: function () {
      return this.$store.getters.songs;
    },
    click: function () {
      return this.song[this.song_index.number].click == "true";
    },
  },
  methods: {
    lendScore() {
      conversion.lend_click(this.song_index, this.song);
      // console.log(this.song_info)
    },
  },
  props: {
    song_info: {
      type: Array,
    },
    song_index: {
      type: Object,
    },
  },
};
</script>
<style scoped>
button {
  height: 25px;

  border: none;
  border-radius: 2px;
  color: #f6f6f6;
}
.blue {
  background-color: #101748;
}

.gray {
  background-color: gray;
}
</style>