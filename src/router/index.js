import { createRouter, createWebHistory } from 'vue-router'
import RouterTestFirst from '@/components/RouterTestFirst.vue'
import RouterTestSecond from '@/components/RouterTestSecond.vue'
import PrefecturePage from '@/components/PrefecturePage.vue'

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
  },
  {
    path: '/:prefecture',
    name: 'prefecuture',
    component: PrefecturePage,
    meta: {
      title: '都道府県'
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