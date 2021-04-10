<template>
  <div>
    <ul class="notice-container">
      <li v-for="(item, index) in notice" :key="item.number">
        <NoticeListItem :index="index" />
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

<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}

.notice-container {
  margin-top: 15px;
}

@media screen and (min-width: 1024px) {
  .notice-container {
    margin-top: 0px;
    overflow: auto;
  }
}
</style>