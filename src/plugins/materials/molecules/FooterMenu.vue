<template>
    <nav id="footer">
      <ul class="nav-list">
        <li class="nav-list__child child-setting" @click="search_reset()">
          <router-link to="/setting" class="button__link">
            <MenuSettingIcon />
          </router-link>
        </li>

        <li class="nav-list__child child-list">
          <router-link to="/score" class="button__link">
            <MenuListIcon />
          </router-link>
        </li>

        <li class="nav-list__child child-notice" @click="search_reset()">
          <router-link to="/notice" class="button__link">
            <MenuNoticeIcon />
          </router-link>
        </li>

        <li class="nav-add-button" @click="search_reset()">
          <router-link to="/add-form">
            <MenuAddIcon />
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<style scoped>
#footer {
  width: 100%;
  height: 7%;
  background-color: #f6f6f6;
  position: fixed;
  z-index: 0;
  bottom: 0;
}

.nav-list {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.nav-list__child {
  border-top: solid 2px #e8e8e8;
  width: 30%;
  height: 100%;
  text-align: center;
}

.nav-list__child:nth-of-type(2) {
  width: 35%;
  border-right: solid 1.5px #e8e8e8;
  border-left: solid 1.5px #e8e8e8;
  border-right: solid 1.5px #e8e8e8;
}

.button__link {
  display: block;
  width: 100%;
  height: 100%;
  /* align-self: center; */
}

.nav-add-button {
  align-self: center;
  margin: 3%;
  margin-left: auto;
}

svg {
  max-width: 35px;
  padding: 7px;
}

@media screen and (min-width: 1024px) {
  #footer {
    top: 60px;
    height: calc(100% - 60px);
    width: 58px;
    border-top: solid 2px #e8e8e8;
    border-right: solid 2px #e8e8e8;
    padding: 0px;
    justify-content: center;
  }

  .nav-list {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
  }

  .nav-list__child {
    border-top: none;
    width: 100%;
    height: 60px;
    flex-grow: 0;
    margin-top: 10px;
  }

  .nav-list__child:nth-of-type(2) {
    width: 100%;
    border: none;
  }

  .child-setting {
    order: 1;
  }

  .child-list {
    order: 0;
  }

  .child-notice {
    order: 2;
  }

  .button__link {
    display: block;
  }

  .nav-add-button {
    order: 3;
    margin: 0;
    margin-top: auto;
    flex-basis: 5%;
  }
  
  svg {
    max-width: 30px;
  }
}
</style>

<script>
// import Setting from "./icons/I_setting.vue";
// import List from "./icons/I_list.vue";
// import Notice from "./icons/I_notice.vue";

// import SVGElement from "./Icon.vue";
export default {
  methods: {
    search_reset() {
      this.$store.commit("search_reset");
    },
  },
  // name: "F_Menu",
  // components: {
  //   Setting,
  //   List,
  //   Notice,
  // },
};
</script>
