<template>
  <div class="details">
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
        <li
          v-for="(tag, index) in song_info[song_index.number].tag.length"
          :key="tag.id"
        >
          {{ song_info[song_index.number].tag[index] }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
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
.details {
  width: 100%;
  height: 800px;
  border-radius: 8px;
  position: relative;
  z-index: 100;
  background-color: #f6f6f6;
}
</style>
