<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
export default {
  components: {
    MainTabBar
  }
}
</script>
<style>
@import "assets/css/base.css";
@import "../node_modules/animate.css/animate.min.css";
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
