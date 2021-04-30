<template>
  <div id="app">
    <web-header></web-header>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import WebHeader from './components/webheader.vue'
import Bottom from './components/bottom.vue'

export default {
  name: 'App',
  components: {
    WebHeader,
    Bottom
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
