import { createRouter, createWebHistory } from "vue-router";
import RouterTestFirst from "@/page/top/RouterTestFirst.vue";
import RouterTestSecond from "@/page/message/RouterTestSecond.vue";
import PrefecturePage from "@/page/PrefecturePage.vue";
import SearchMount from "@/page/search/SearchMount.vue";
import MountPage from '@/page/mount/MountPage.vue';

const routes = [
  {
    path: "/",
    name: "routerTestFirst",
    component: RouterTestFirst,
    meta: {
      title: "峠イキタイ | トップページ",
    },
  },
  {
    path: "/second",
    name: "routerTestSecond",
    component: RouterTestSecond,
    meta: {
      title: "峠イキタイ | 管理者からのメッセージ",
    },
  },
  {
    path: "/:prefecture",
    name: "prefecuture",
    component: PrefecturePage,
    meta: {
      title: "都道府県",
    },
  },
  {
    path: "/search",
    name: "searchMount",
    component: SearchMount,
    meta: {
      title: "峠イキタイ | 峠検索",
    },
  },
  {
    path: '/mount/:mountId',
    name: 'mount',
    component: MountPage,
    meta: {
      title: '峠イキタイ | 峠'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
