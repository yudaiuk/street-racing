import { createRouter, createWebHistory } from 'vue-router'
import RouterTestFirst from '@/components/RouterTestFirst.vue'
import RouterTestSecond from '@/components/RouterTestSecond.vue'

const routes = [
  {
    path: '/',
    name: 'routerTestFirst',
    component: RouterTestFirst,
    meta: {
      title: '峠イキタイ | トップページ'
    }
  },
  {
    path: '/second',
    name: 'routerTestSecond',
    component: RouterTestSecond,
    meta: {
      title: '峠イキタイ | 管理者からのメッセージ'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.afterEach((to) => {
document.title = to.meta.title
 })

export default router