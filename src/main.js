import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import VueHead from "vue-head";
import VueGtag from "vue-gtag";

createApp(App)
  .use(router, VueHead, VueGtag, {
    config: {
      id: "G-QXYK457BGN",
    },
  })
  .mount("#app");
