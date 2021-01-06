<template>
  <div class="details">
    <Use-list-button />
    <Return-button />
    <div>
      <h3>{{ song[0].title }}</h3>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
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
<script>
export default {
  props: {
    song: {
      type: Array,
    },
  },
};
</script>