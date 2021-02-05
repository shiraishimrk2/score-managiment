<template>
  <div>
    <ul>
      <li v-for="(item, index) in notice" :key="item.number">
        <Notice-item :index="index" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    notice: function () {
      return this.$store.state.notice;
    },
    tames: function () {
      return this.tamesi();
    },
  },
  data: function () {
    return {
      lend_score: true,
      return_score: true,
      add_score: true,
    };
  },
};
</script>