import { createRouter, createWebHistory } from "vue-router";
import RouterTestFirst from "@/page/top/RouterTestFirst.vue";
import RouterTestSecond from "@/page/message/RouterTestSecond.vue";
import PrefecturePage from "@/page/PrefecturePage.vue";
import SearchMount from "@/page/search/SearchMount.vue";
import MountPage from "@/page/mount/MountPage.vue";

const routes = [
  {
    path: "/",
    name: "routerTestFirst",
    component: RouterTestFirst,
    meta: {
      title: "峠イキタイ | トップページ",
      desc: "日本最大の峠検索サイト「峠イキタイ」は全国の峠・ドライブスポット情報を掲載中。エリアの絞込や、取り締まり情報・混雑状況など走り屋がこだわる様々な検索条件で、あなたにぴったりの峠・ドライビングスポットが見つかります!!!走り屋の皆さんからの峠情報も募集しています。",
      keywords: "峠,走り屋,ドライブ,ドリフト,取り締まり",
      type: "website",
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
    path: "/mount/:mountId",
    name: "mount",
    component: MountPage,
    meta: {
      title: "峠イキタイ | 峠",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title;
  document
    .querySelector("meta[property='og:title']")
    .setAttribute("content", to.meta.title);
  document
    .querySelector("meta[name='twitter:title']")
    .setAttribute("content", to.meta.title);
  document
    .querySelector("meta[name='description']")
    .setAttribute("content", to.meta.desc);
  document
    .querySelector("meta[property='og:description']")
    .setAttribute("content", to.meta.desc);
  document
    .querySelector("meta[name='twitter:description']")
    .setAttribute("content", to.meta.desc);
  document
    .querySelector("meta[name='keywords']")
    .setAttribute("content", to.meta.keywords);
  document
    .querySelector("meta[property='og:type']")
    .setAttribute("content", to.meta.type);
});

export default router;
