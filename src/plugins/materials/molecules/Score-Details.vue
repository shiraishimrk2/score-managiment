<template>
  <div class="details" @click="tamesi()">
    <Use-list-button />
    <Return-button />
    <div>
      <h3>{{ song_info[song_index.number].title }}</h3>
      <ul>
        <li>{{ song_info[song_index.number].artist }}</li>
        <li>{{ song_info[song_index.number].publisher }}</li>
        <li>{{ song_info[song_index.number].composer }}</li>
        <li>{{ song_info[song_index.number].arranger }}</li>
        <li>{{ song_info[song_index.number].genre }}</li>
        <!-- <li
          v-for="(tag, index) in song_info[song_index.number].tag.length"
          :key="tag.id"
        >
          {{ song_info[song_index.number].tag[index] }}
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      // isOpened: true,
      // isClosed: false,
    };
  },
  methods: {
    tamesi() {
      this.$emit("close");
      // this.isOpened = !this.isOpened;
      // this.isClosed = !this.isClosed;
      // console.log("ok");
    },
  },
  props: {
    song_info: {
      type: Array,
    },
    song_index: {
      type: Object,
    },
    // class: {
    //   type: String,
    // },
    // toggle: {
    //   type: Function,
    // },
  },
};
</script>
<style scoped>
.details {
  width: 100%;
  height: 800px;
  border-radius: 8px;
  position: relative;
  z-index: 100;
  background-color: #f6f6f6;
}
</style>
