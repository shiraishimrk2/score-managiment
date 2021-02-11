<template>
  <div>
    <Clowd-box />
    <Score-list />
  </div>
</template>
<script>
export default {
  computed: {
    genre: function () {
      return this.$store.state.genre;
    },
  },
};
</script>