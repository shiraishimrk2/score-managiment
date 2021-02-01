<template>
  <div>
    <Clowd-box />
    <!-- <p>{{ genre[genre_index] }}</p> -->
    <Score-list />
  </div>
</template>
<script>
export default {
  computed: {
    genre: function () {
      // console.log(this.genre_index);
      return this.$store.state.genre;
    },
  },
};
</script>