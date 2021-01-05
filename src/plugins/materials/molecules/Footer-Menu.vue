<template>
  <div class="add-button">
    <router-link to="/add-form">
      <Add-icon />
    </router-link>
    <nav id="F_Menu">
      <ul class="nav-list">
        <li class="nav-list_child">
          <router-link to="/setting">
            <Setting-icon />
          </router-link>
        </li>
        <li class="nav-list_child">
          <router-link to="/score">
            <List-icon />
          </router-link>
        </li>
        <li class="nav-list_child">
          <router-link to="/notice">
            <Notice-icon />
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
#F_Menu {
  width: 100%;
  /* height: 8%; */
  border-top: solid 2px #dcdcdc;
  position: absolute;
  z-index: 0;
  bottom: 0;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.nav-list_child {
  display: inline-block;
  /* margin-right: 15%; */
  width: 30%;
  height: 100%;
}

.nav-list_child:nth-of-type(2) {
  width: 37%;
  border-right: solid 1.5px #dcdcdc;
  border-left: solid 1.5px #dcdcdc;
}

a {
  /* display: block; */
  width: 100%;
  height: 100%;
  /* padding: 10px 35%; */
  font-size: 10px;
}
</style>
<script>
// import AddIcon from "../atoms/Add-icon.vue";
// import Setting from "./icons/I_setting.vue";
// import List from "./icons/I_list.vue";
// import Notice from "./icons/I_notice.vue";

// import SVGElement from "./Icon.vue";
export default {
  // components: { AddIcon },
  // name: "F_Menu",
  // components: {
  //   Setting,
  //   List,
  //   Notice,
  // },
};
</script>
