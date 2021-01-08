<template>
  <div class="header-box">
    <div class="box-inner">
      <Back-button class="back__icon" />
      <h2 class="inner__title">{{ $route.name }}</h2>
      <Entry-button
        v-if="$route.name == '棚の設定' || $route.name == '楽曲追加'"
      />
    </div>
    <!-- <Search-form class="serch-icon" v-if="$route.name == '楽譜リスト'" /> -->
    <div v-if="$route.name == '楽譜リスト'">
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
  height: 55px;
}

.inner__title {
  margin-top: auto;
}
.box-inner {
  height: 55px;
  position: relative;
  z-index: 1;
  background-color: #f6f6f6;
  border-bottom: solid 2px #e8e8e8;
}

.back__icon {
  position: absolute;
  left: 20px;
  top: 16px;
}

.accbox {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 7px;
  right: 13px;
  border: 0;
  background-color: #f6f6f6;
  z-index: 2;
}

label {
  /* width: 100%;
  height: 100%; */
  display: block;
  cursor: pointer;
  padding: 3px 6px;
  transition: all 0.5s ease-in;
  z-index: 2;
}

.accbox-icon {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
}

.accbox-input {
  display: none;
}

.form-inner {
  width: 100%;
  height: 70px;
  position: absolute;
  background: #efefef;
  overflow: hidden;
  opacity: 0;
  transition: 0.3s;
  z-index: 2;
}

.accbox-input:checked + .form-inner {
  opacity: 1;
}

/* .transform {
  transform: translateY(-70px);

  opacity: 0;
} */

/* @keyframes accordion {
  from {
    transform: translateY(-70px);
    z-index: -20;
  }

  to {
    transform: translateY(5px);
    z-index: 1;
  }
} */
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
  },
};
</script>