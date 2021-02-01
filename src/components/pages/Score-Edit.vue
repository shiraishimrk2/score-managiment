<template>
  <div>
    <Clowd-box />
    <Score-list />
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