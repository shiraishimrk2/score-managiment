import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
import Materials from './plugins'


Vue.config.productionTip = false
Vue.use(VueAxios, axios) //追記
Vue.use(Materials)
new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App)
}).$mount('#app')
