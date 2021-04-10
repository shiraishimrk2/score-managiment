<template>
  <div class="header-block">

    <div class="header-block-section">
      <div @click="search_reset()">
        <HeaderBackIcon class="section__backicon" v-if="$route.name !== '楽譜リスト'" />
      </div>
      <h2 class="section__title">{{ $route.name }}</h2>
    </div>
    
    <div v-if="$route.name == '楽譜リスト' || $route.name == '管理'">
      <div class="header-block-accbox">
        <label for="check"><HeaderSearchIcon /></label>
      </div>
      <input type="checkbox" id="check" class="accbox__input" />
      <HeaderSearchInner />
    </div>
    
  </div>
</template>
<style scoped>

.header-block {
  width: 100%;
  height: 45px;
  background-color: #f6f6f6;
  border-bottom: solid 2px #e8e8e8;
}

.section__title {
  margin-top: auto;
  padding: 10px;
}

.header-block-section {
  height: 45px;
  position: relative;
  /* z-index: 1; */
}

.section__backicon {
  position: absolute;
  left: 13px;
  top: 13px;
}

.header-block-accbox {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 7px;
  right: 22px;
  border: 0;
  background-color: #f6f6f6;
  /* z-index: 2; */
}

label {
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
  padding: 3px 6px;
  transition: all 0.5s ease-in;
  /* z-index: 2; */
  background-color: #f6f6f6;
}

.accbox__input {
  display: none;
}

.accbox__input:checked + .form-container {
  opacity: 1;
  pointer-events: all;
  /* transition: all 1000ms 0s ease; */
}

@media screen and (min-width: 1024px) {
  .header-block {
    position: relative;
    height: 60px;
    display: grid;
    grid-gap: 6%;
    grid-template-columns: 1fr 1fr;
  }

  .section__backicon {
    left: 20px;
    top: 18px;
  }

  .section__title {
    text-align: left;
    padding: 0;
    padding-left: 110px;
    margin: 20px 0;
    /* font-size: 20px; */
  }

  .header-block-section {
    height: 60px;
  }

  .header-block-accbox {
    top: 16px;
    left: 63%;
  }

  @media screen and (min-width: 1900px) {
    .header-block-accbox {
      left: 65%;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      isOpened: true,
      isAnime: false,
    };
  },
  methods: {
    search_reset() {
      this.$store.commit("search_reset");
    },
  },
};
</script>
