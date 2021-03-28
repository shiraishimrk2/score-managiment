import Vue from 'vue'
import VueRouter from 'vue-router'

import Title from '../components/pages/Title.vue'
import Score from '../components/pages/Score.vue'
import Setting from '../components/pages/Setting.vue'
import Notice from '../components/pages/Notice.vue'
import AddForm from '../components/pages/AddForm.vue'
import NotFound from '../components/pages/NotFound.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'タイトル',
    component: Title
  },
  {
    path: '/score',
    name: '楽譜リスト',
    component: Score
  },
  {
    path: '/setting',
    name: '管理',
    component: Setting
  },
  {
    path: '/notice',
    name: 'お知らせ',
    component: Notice
  },
  {
    path: '/addform',
    name: '楽曲追加',
    component: AddForm
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes
})

export default router