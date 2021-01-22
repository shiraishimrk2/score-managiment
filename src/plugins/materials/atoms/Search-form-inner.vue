<template>
  <form class="form-inner" v-on:submit.prevent="submit">
    <div class="form-box">
      <label for="keyword">キーワード</label>
      <input
        type="text"
        class="col-sm-9 form-control"
        id="keyword"
        v-model="keyword"
      />
    </div>

    <div class="colmun-2">
      <button type="submit">検索</button>
    </div>
    <p>{{ result }}</p>
  </form>
</template>
<script>
import songs from "../../../assets/song.json";

export default {
  computed: {
    song: function () {
      return this.$store.state.songs;
    },
    // keyword(keyword){
    //   this.$store.commit

    // }
  },
  data: function () {
    return {
      keyword: "",
      result: [],
    };
  },
  methods: {
    submit() {
      // console.log(this.keyword);
      let word = this.keyword;
      let result = this.result;
      this.$store.commit("submit");
      // console.log(this.result);
      // console.log(songs[0].all_song);
      if (result.length !== 0) {
        result.splice(0, result.length);
      }
      var all_titles = songs[0].all_song.filter(function (item) {
        // // console.log(item);
        // console.log(item.title);
        console.log(item.tag);
        if (word == item.title || word == item.tag) {
          // console.log("成功");
          return true;
        }
      });
      // console.log(all_titles);
      console.log(all_titles.length);
      for (var i = 0; i < all_titles.length; i++) {
        result.push(all_titles[i].title);
        // console.log(all_titles[i].title);
        // console.log(result);
        // return all_titles[i].title;
      }
    },
  },
};
</script>