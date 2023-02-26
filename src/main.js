import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueHead from 'vue-head'

createApp(App).use(router, VueHead).mount('#app')