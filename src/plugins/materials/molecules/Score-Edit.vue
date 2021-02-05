<template>
  <div>
    <Score-list />
  </div>
</template>
<script>
export default {
  computed: {
    song: function () {
      return this.$store.state.song;
    },
  },
};
</script>