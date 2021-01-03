<template>
  <div v-cloak>
    <button class="icon-button" @click="toggleAccordion()">
      <Search-icon />
    </button>
    <!-- <Search-form-inner class="Accordion-Item" v-if="isOpened" /> -->

    <Search-form-inner
      class="Accordion-Item"
      :class="{ transform: isOpened }"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpened: true,
      isAnime: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpened = !this.isOpened;
      this.isAnime = !this.isAnime;
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
  border: 1px solid;
}
.transform {
  transform: translateY(-50px);
  /* opacity: 0; */
}
.icon-button {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  /* outline: none; */
  background-color: #f6f6f6;
  z-index: 2;
}

@keyframes accordion {
  from {
    transform: translateY(-50px);
    z-index: -20;
  }

  to {
    transform: translateY(5px);
    z-index: 1;
  }
}
</style>