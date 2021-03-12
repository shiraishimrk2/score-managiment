<template>
  <div class="scroll-container">
    <form class="lend-container" @submit.prevent="submit(check_index)">
      <div v-for="(lendScores, index) in lendScore" :key="lendScores.id">
        <div class="lend-box">
          <label class="lend-item">
            <div class="item__title">
              {{ lendScores.title }}
            </div>

            <div class="item__rack">
              {{ lendScores.shelf }} - {{ lendScores.shelfNum }}
            </div>

            <input
              class="item__button"
              v-model="check_index"
              type="checkbox"
              :value="index"
            />
          </label>
        </div>
      </div>

      <div class="button-box" v-if="return_button">
        <button type="submit" class="button__item">返却する</button>
      </div>

      <div v-else>
        <h3 class="inner__no-lend">貸し出されているものはありません。</h3>
      </div>
    </form>
  </div>
</template>
<script>
import conversion from "../../../assets/conversion.js";
export default {
  data: function () {
    return {
      check_index: [],
    };
  },
  computed: {
    lendScore() {
      return this.$store.getters.lends;
    },
    return_button() {
      return this.lendScore.length > 0;
    },
  },
  methods: {
    submit: function (check_index) {
      conversion.return_click(check_index, this.lendScore);
    },
  },
};
</script>
<style scoped>
.scroll-container {
  /* width: 100%; */
  height: 450px;
  overflow-y: hidden;
  /* overflow-x: hidden; */
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.lend-box {
  width: 100%;
}

.lend-box:hover {
  background-color: #e6e6e6;
  opacity: 0.8;
}

.lend-item {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  /* grid-template-columns: 10% 80% 1001%; */
  width: 100%;
  height: 50px;
  border-bottom: solid 1.5px#eff0f4;
}

.item__title {
  margin-top: 15px;
  padding-right: 5px;
  padding-left: 30px;
  font-size: 14px;
  color: #101748;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item__rack {
  margin-top: 15px;
  font-size: 13px;
  color: #8f92a5;
  font-weight: 600;
}

.item__button {
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 30px;
  margin-top: 15px;
  appearance: none;
  background: #f6f6f6;
  border: solid 2px #646a85;
  border-radius: 3px;
}

.item__button:checked {
  background: #646a85;
}

input[type="checkbox"]::before {
  content: "";
  display: inline-block;
  width: 15px;
  height: 18px;
  background-image: url(../assets/check.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  visibility: hidden;
}

input[type="checkbox"]:checked::before {
  visibility: visible;
}

input:focus {
  outline: none;
}

.button-box {
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.button__item {
  color: #f6f6f6;
  background: #101748;
  border: none;
  height: 25px;
  border-radius: 2px;
  display: block;
  margin: 0 0 0 auto;
}

.button__item:hover {
  opacity: 0.5;
}

.inner__no-lend {
  font-size: 14px;
  color: #101748;
  padding-left: 50px;
  padding-right: 30px;
}

@media screen and (min-width: 1024px) {
  .scroll-container {
    width: 100%;
    margin-right: 20px;
  }

  .scroll-container:hover {
    overflow-y: auto;
  }

  .scroll-container::-webkit-scrollbar {
    display: block;
    background-color: #f7f3f3;
  }

  .scroll-container::-webkit-scrollbar-thumb {
    background-color: #e2e2e5;
  }

  .lend-item {
    grid-template-columns: 8fr 1fr 1fr;
  }

  .item__title {
    padding-left: 50px;
  }

  .item__button {
    margin-left: 60%;
  }

  .button__item {
    width: 100px;
    height: 40px;
    border-radius: 4px;
  }
}
</style>
