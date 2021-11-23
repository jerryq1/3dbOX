import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// eslint-disable-next-line import/no-unresolved
import Home from '@/views/home.vue'
// eslint-disable-next-line import/no-unresolved
import Vuex from '@/views/vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  }
  // {
  //   path: '/axios',
  //   name: 'Axios',
  //   // eslint-disable-next-line import/no-unresolved
  //   component: () => import('@/views/axios.vue') // 懒加载组件
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
