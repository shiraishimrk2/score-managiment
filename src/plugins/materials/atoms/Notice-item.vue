<template>
  <ul class="notice-box">
    <li class="notice-item">
      {{ notice[index].title
      }}{{
        istamesi3
          ? istamesi
            ? istamesi2
              ? "が貸し出しされました"
              : "が返却されました"
            : "が追加されました"
          : "に編集されました"
      }}
    </li>
    <li class="notice-date">{{ notice[index].date }}</li>
  </ul>
</template>
<script>
export default {
  computed: {
    notice: function () {
      return this.$store.state.notice;
    },
    istamesi: function () {
      return "click" in this.notice[this.index];
    },
    istamesi2: function () {
      return this.notice[this.index].click == "true";
    },
    istamesi3: function () {
      return "edit" in this.notice[this.index] == false;
    },
  },
  props: {
    index: {
      type: Number,
    },
  },
};
</script>


<style scoped>
.notice-box {
  padding: 10px 0;
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  border-bottom: 2px solid #eff0f4;
}

.notice-item {
  height: 25px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 13px;

  color: #101748;
}

.notice-date {
  padding-left: 30px;
  font-size: 13px;
  color: #8f92a5;
}

@media screen and (min-width: 1024px) {
  .notice-box {
    padding: 15px 0;
    grid-template-rows: 1fr;
    grid-auto-columns: 0.1fr 1fr;
    grid-template-areas: "date item";
  }

  .notice-item {
    padding-left: 50px;
    grid-area: item;
  }

  .notice-date {
    padding-left: 50px;
    grid-area: date;
  }
}
</style>