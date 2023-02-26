<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeadMessage />

    <!-- 新着走活 -->
    <NewRacing />

    <!-- 都道府県から峠を探す -->
    <Prefecture />
    <router-link to="/second">次のページ</router-link>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import HeadMessage from './HeadMessage.vue'
import NewRacing from './NewRacing.vue'
import Prefecture from './Prefecture.vue'

export default {
  name: 'App',
  components: {
    /* HelloWorld, */
    HeadMessage,
    NewRacing,
    Prefecture
  }
}
</script>