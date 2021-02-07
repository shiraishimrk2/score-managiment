<template>
  <ul>
    <li>
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
    <li>{{ notice[index].date }}</li>
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