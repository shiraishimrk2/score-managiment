<template>
  <div>
    <ScoreList />
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