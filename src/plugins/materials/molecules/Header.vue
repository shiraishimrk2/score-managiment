<template>
  <div class="header-box">
    <div class="box-inner">
      <div @click="search_reset()">
        <Back-button class="back__icon" v-if="$route.name !== '楽譜リスト'" />
      </div>
      <h2 class="inner__title">{{ $route.name }}</h2>
      <!-- <Entry-button v-if="$route.name == '楽曲追加'" /> -->
    </div>
    <!-- <Search-form class="serch-icon" v-if="$route.name == '楽譜リスト'" /> -->
    <div class="accbox-container" v-if="$route.name == '楽譜リスト'">
      <div class="accbox">
        <label for="check"><Search-icon /></label>
      </div>
      <input type="checkbox" id="check" class="accbox-input" />

      <Search-form-inner />
    </div>
  </div>
</template>
<style scoped>
.header-box {
  width: 100%;
  height: 45px;
  background-color: #f6f6f6;
  border-bottom: solid 2px #e8e8e8;
  /* position: fixed; */
}

.inner__title {
  margin-top: auto;
  padding: 10px;
}
.box-inner {
  height: 45px;
  position: relative;
  /* z-index: 1; */
}

.back__icon {
  position: absolute;
  left: 13px;
  top: 13px;
}

.accbox {
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

.accbox-icon {
  width: 100%;
  height: 100%;
  position: relative;
  /* z-index: 2; */
}

.accbox-input {
  display: none;
}

.form-inner {
  width: 100%;
  height: 70px;
  position: absolute;
  background: #f6f6f6;
  border-bottom: solid 2px #e8e8e8;
  border-top: solid 2px #e8e8e8;
  overflow: hidden;
  opacity: 0;
  transition: 0.3s;
  z-index: 1;
  text-align: center;
  pointer-events: none;
}

.accbox-input:checked + .form-inner {
  opacity: 1;
  pointer-events: all;
  /* transition: all 1000ms 0s ease; */
}

@media screen and (min-width: 1024px) {
  .header-box {
    position: relative;
    height: 60px;
    display: grid;
    grid-template-columns: 1.5fr 0.8fr;
  }

  .back__icon {
    left: 20px;
    top: 18px;
  }

  .inner__title {
    text-align: left;
    padding: 0;
    padding-left: 110px;
    margin: 20px 0;
    /* font-size: 20px; */
  }

  .form-inner {
    border-top: none;
    pointer-events: all;
  }

  .box-inner {
    height: 60px;
  }

  .accbox {
    top: 16px;
    left: 63%;
  }

  .form-inner {
    height: 60px;
    opacity: 1;
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
    toggleAccordion() {
      this.isOpened = !this.isOpened;
      this.isAnime = !this.isAnime;
      // console.log("1");
    },
    search_reset() {
      this.$store.commit("search_reset");
    },
  },
};
</script>