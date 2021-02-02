<template>
  <button @click="lendScore()">利用する</button>
</template>
<script>
export default{
    methods: {
      lendScore(){
      this.$store.commit("lendScore", this.song_index);
      // console.log(this.song_info)
    },
    },
    props: {
      song_info: {
        type: Array
      },
      song_index:{
        type: Object
      }
    }
  }
</script>
<style scoped>
button {
  border: 2px solid #646886;
  border-radius: 2px;
}
</style>