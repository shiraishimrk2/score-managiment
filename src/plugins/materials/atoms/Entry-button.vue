<template>
  <div v-cloak>
    <button class="icon-button" @click="toggleAccordion()">登録</button>
    <!-- <Search-form-inner class="Accordion-Item" v-if="isOpened" /> -->

    <!-- <Score-Details class="Accordion-Item" :class="{ tamesi: isClosed }" /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      isClosed: true,
    };
  },
  methods: {
    toggleAccordion() {
      this.isClosed = !this.isClosed;
      // console.log("1");
    },
  },
};
</script>
<style scoped>
.Accordion-Item {
  width: 100%;
  height: 50px;
  background: #f6f6f6;
  transition: all 300ms 0s ease;
  position: relative;
  /* top: -200px; */
  /* z-index: -10; */
}
.icon-button {
  width: 50px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  /* outline: none; */
  background-color: #f6f6f6;
}
.tamesi {
  transform: translateY(810px);
}
</style>