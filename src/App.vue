<template>
  <div id="app">
    <!-- 菜单栏-->
    <Menu></Menu>
    <!--每条事务下的任务面板-->
    <router-view></router-view>
  </div>
</template>
<script>
  import Menu from './components/Menu'
export default {
  name: 'App',
  components: {Menu},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
