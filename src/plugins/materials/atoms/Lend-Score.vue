<template>
<div>
    <div v-for="lendScores in lendScore" v-bind:key="lendScores.id">
      <h3>{{ lendScores.title }}</h3>
    </div>
</div>
</template>
<script>
    export default {
        computed: {
            lendScore() {
              console.log(this.$store.state.lends)

                return this.$store.state.lends;
            },
        },
        props: {
          song_info: {
            type: Array,
          },
          song_index: {
            type: Object,
          },
        }
    }
</script>
