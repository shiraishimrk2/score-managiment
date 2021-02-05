<template>
  <button @click="lendScore()">利用する</button>
</template>
<script>
import conversion from "../../../assets/conversion.js"
export default{
  computed:{
    song:function(){
      return this.$store.getters.songs;
    }
  },
    methods: {
      lendScore(){
        conversion.lend_click(this.song_index,this.song)
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