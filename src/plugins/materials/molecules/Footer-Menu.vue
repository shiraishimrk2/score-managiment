<template>
  <div>
    <nav id="footer">
      <ul class="nav-list">
        <li class="nav-list__child">
          <router-link to="/setting" class="button__link">
            <Setting-icon />
          </router-link>
        </li>

        <li class="nav-list__child">
          <router-link to="/score" class="button__link">
            <List-icon />
          </router-link>
        </li>

        <li class="nav-list__child">
          <router-link to="/notice" class="button__link">
            <Notice-icon />
          </router-link>
        </li>
        <li class="nav-add-button">
          <router-link to="/add-form">
            <Add-icon />
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
#footer {
  width: 100%;
  height: 7.5%;
  background-color: #f6f6f6;
  position: absolute;
  z-index: 0;
  bottom: 0;
}

.nav-list {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  /* align-items: flex-end; */
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.nav-list__child {
  border-top: solid 2px #e8e8e8;
  width: 30%;
  height: 100%;
  /* padding: 10px; */
  text-align: center;
}

.nav-list__child:nth-of-type(2) {
  width: 35%;
  border-right: solid 1.5px #e8e8e8;
  border-left: solid 1.5px #e8e8e8;
}

.button__link {
  display: block;
  width: 100%;
  height: 100%;
  align-self: center;
}

.nav-add-button {
  align-self: center;
  margin: 3%;
  margin-left: auto;
}

svg {
  max-width: 40px;
  padding: 10px;
}
@media screen and (min-width: 1024px) {
  #footer {
    top: 50px;
    height: 92%;
    width: 80px;
    position: fixed;
    border-top: none;
    border-right: solid 2px #e8e8e8;
    padding: 0px;
  }

  .nav-list {
    flex-direction: column;

    width: 100%;
  }

  .nav-list__child {
    border-top: none;
    width: 100%;
    height: 10%;
    flex-grow: 0;
  }

  .nav-list__child:nth-of-type(2) {
    width: 100%;
  }

  .button__link {
    display: block;
  }

  .nav-add-button {
    margin: 0;
    margin-top: auto;
    /* flex-basis: 20%; */
    /* margin-top: 50px; */
  }
}
</style>


<script>
import AddIcon from "../atoms/Add-icon.vue";
// import Setting from "./icons/I_setting.vue";
// import List from "./icons/I_list.vue";
// import Notice from "./icons/I_notice.vue";

// import SVGElement from "./Icon.vue";
export default {
  components: { AddIcon },
  // name: "F_Menu",
  // components: {
  //   Setting,
  //   List,
  //   Notice,
  // },
};
</script>
