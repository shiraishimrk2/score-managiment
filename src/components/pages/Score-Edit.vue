<template>
  <div>
    <Clowd-box />
    <List-item />
  </div>
</template>
<script>
export default {
  computed: {
    song: function () {
      return this.$store.state.songs;
    },
  },
};
</script>