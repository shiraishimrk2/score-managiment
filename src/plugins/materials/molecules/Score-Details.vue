<template>
  <div class="details" @click="tamesi()">
    <div class="button" @click="search()"></div>
    <Use-list-button />
    <Return-button />
    <div>
      <h3>{{ song_info[song_index.number].title }}</h3>
      <ul class="details-box">
        <li class="details-item">
          <span class="details-titel">作曲者</span>
          {{ song_info[song_index.number].composer }}
        </li>
        <li class="details-item">
          <span class="details-titel">編曲者</span>
          {{ song_info[song_index.number].arranger }}
        </li>
        <li class="details-item">
          <span class="details-titel">出版社</span>
          {{ song_info[song_index.number].publisher }}
        </li>
        <li class="details-item">
          <span class="details-titel">ジャンル</span>
          {{ song_info[song_index.number].genre }}
        </li>
        <li class="details-item">
          <span class="details-titel">アーティスト</span>
          {{ song_info[song_index.number].artist }}
        </li>
        <li class="details-item">
          <span class="details-titel">棚番号</span>
          {{ song_info[song_index.number].shelf }}ー
          {{ song_info[song_index.number].shelfNum }}
        </li>

        <!-- <li
          v-for="(tag, index) in song_info[song_index.number].tag.length"
          :key="tag.id"
        >
          {{ song_info[song_index.number].tag[index] }}
        </li> -->
      </ul>
    </div>
  </div>
</template>

<style scoped>
h3 {
  color: #101748;
  font-weight: 600;
  margin: 0 30px;
}

ul {
  padding: 0;
}

.details-box {
  padding: 0 30px;
}

.details-item {
  color: #101748;
  font-size: 15px;
  font-weight: 600;
  text-align: right;
  margin-top: 25px;
  /* background-color: #fff; */
  border-bottom: solid 1px #d0d3e2;
}

.details-titel {
  font-size: 12px;
  float: left;
  color: #8f92a5;
}
.button {
  width: 100px;
  height: 100px;
  background-color: black;
}
</style>

<script>
export default {
  computed: {
    song: function () {
      return this.$store.state.songs;
    },
  },
  data: function () {
    return {
      // isOpened: true,
      // isClosed: false,
    };
  },
  methods: {
    tamesi() {
      this.$emit("close");
      // this.isOpened = !this.isOpened;
      // this.isClosed = !this.isClosed;
      // console.log("ok");
    },

    search() {
      this.$store.commit("search");
      console.log(this.$store.state.result);
    },
  },
  props: {
    song_info: {
      type: Array,
    },
    song_index: {
      type: Object,
    },
    // class: {
    //   type: String,
    // },
    // toggle: {
    //   type: Function,
    // },
  },
};
</script>