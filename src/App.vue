<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <HeadMessage />

  <!-- 新着走活 -->
  <NewRacing />
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import HeadMessage from './components/HeadMessage.vue'
import NewRacing from './components/NewRacing.vue'

export default {
  name: 'App',
  components: {
    /* HelloWorld, */
    HeadMessage,
    NewRacing
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
