<template>
  <canvas width="130px" height="150px" class="canvas"></canvas>
</template>


<script>
export default {
  // props: {
  //   radius: {
  //     type: Number,
  //     default: 30,
  //   },
  // }
  watch: {
    radius() {
      this.draw(this.radius);
    },
  },

  methods: {
    //https://note.com/yusaku/n/n748e9322b2fe
    //https://oku.edu.mie-u.ac.jp/~okumura/javascript/circles.html

    draw() {
      for (let i = 0; i < 3; i++) {
        let min1y = 0;
        let max1y = 30;
        let y1 = Math.floor(Math.random() * (max1y + 1 - min1y)) + min1y;

        let min2y = 120;
        let max2y = 160;
        let y2 = Math.floor(Math.random() * (max2y + 1 - min2y)) + min2y;

        // let min1x = 0;
        // let max1x = 60;
        // let x1 = Math.floor(Math.random() * (max1x + 1 - min1x)) + min1x;

        // let min2x = 60;
        // let max2x = 130;
        // let x2 = Math.floor(Math.random() * (max2x + 1 - min2x)) + min2x;

        let x = 130 * Math.random();
        // let y = 20 * Math.random();
        // let x2 = 150 * Math.random();
        // let y2 = 130 * Math.random();
        let r = 1 * Math.random() + 35;
        this.ctx.beginPath();
        // this.ctx.clearRect(0, 0, 200, 200);
        this.ctx.arc(x, y1, r, 0, Math.PI * 2, false);
        this.ctx.arc(x, y2, r, 0, Math.PI * 2, false);
        this.ctx.fillStyle = "#393F66";
        this.ctx.fill();
      }
    },
  },
  mounted() {
    // mounted 以降で canvas の DOM にアクセスできる
    // CreateJS などを使うときにも、ここで canvas と紐付ける
    // console.log(this.$el)
    this.ctx = this.$el.getContext("2d");
    this.draw(this.radius);
  },
};
</script>

<style scoped>
</style>
