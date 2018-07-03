<template>
  <div id="app">
    <ul class="oul">
      <li><router-link to="/">state共享状态</router-link></li>
      <li><router-link to="/mutations">mutations修改状态</router-link></li>
      <li><router-link to="/getters">getters计算过滤</router-link></li>
      <li><router-link to="/actions">actions异步、同步加载</router-link></li>
      <li><router-link to="/parent">parent父组件</router-link></li>
    </ul>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.oul,li{
  list-style: none;
}
li{
  padding: 10px;border: 1px solid #333;
  border-radius:10px 
}
</style>
