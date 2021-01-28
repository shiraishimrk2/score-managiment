import Vue from 'vue'
import VueRouter from 'vue-router'
import Title from '../components/pages/Title.vue'
import Score from '../components/pages/Score.vue'
import Setting from '../components/pages/Setting.vue'
import Notice from '../components/pages/Notice.vue'
import Add_Form from '../components/pages/Add-Form.vue'
import NotFound from '../components/pages/NotFound.vue'
import Score_Details from '../plugins/materials/molecules/Score-Details.vue'
import Genre from '../components/pages/Genre.vue'
import Score_Edit from '../components/pages/Score-Edit.vue'
Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'タイトル',
      component:Title
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
      component:Notice
    },
    {
      path: '/add-form',
      name: '楽曲追加',
      component: Add_Form
    },
    {
      path: '*',
      component: NotFound
  },
    {
      path: '/score-details',
      name: '楽曲詳細',
      component: Score_Details
  },
  {
    path: '/genre',
    name: '楽曲リスト',
    component: Genre
  },
  {
    path: '/score-edit',
    name: 'リスト編集',
    component: Score_Edit
  },
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes
})

export default router