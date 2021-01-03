<template>
  <div>
    <div class="z-index">
      <Back-button />
      <h2>{{ $route.name }}</h2>
      <Entry-button
        v-if="$route.name == '棚の設定' || $route.name == '楽曲追加'"
      />
    </div>
    <Search-form class="up" v-if="$route.name == '楽譜リスト'" />
    <!-- 登録ボタンどうしよう -->
  </div>
</template>
<script>
export default {
  // data() {
  //   var tamesi = $route.name;
  //   return {
  //     titleName: tamesi,
  //   };
  // },
  // props: {
  //   titleName: {
  //     type: String,
  //     setting: {
  //       title: "管理",
  //     },
  //   },
  // },
};
</script>
<style scoped>
div {
  width: 100%;
  height: 50px;
  background-color: #f6f6f6;
}
.z-index {
  position: relative;
  z-index: 1;
}
</style>