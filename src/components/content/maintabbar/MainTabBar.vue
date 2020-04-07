<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="">
      <img slot="img" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="img-active" src="~assets/img/tabbar/home_fill.svg" alt="">
      <div slot="content">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="">
      <img slot="img" src="~assets/img/tabbar/cart_light.svg" alt="">
      <img slot="img-active" src="~assets/img/tabbar/cart_fill_light.svg" alt="">
      <div slot="content">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/orderlist" active-color="">
      <img slot="img" src="~assets/img/tabbar/form_light.svg" alt="">
      <img slot="img-active" src="~assets/img/tabbar/form_fill_light.svg" alt="">
      <div slot="content">订单列表</div>
    </tab-bar-item>
    <tab-bar-item path="/people" active-color="">
      <img slot="img" src="~assets/img/tabbar/people.svg" alt="">
      <img slot="img-active" src="~assets/img/tabbar/people_fill.svg" alt="">
      <div slot="content">我的淘宝</div>
    </tab-bar-item>
    <tab-bar-item path="/more" active-color="">
      <img slot="img" src="~assets/img/tabbar/more_light.svg" alt="">
      <img slot="img-active" src="~assets/img/tabbar/more.svg" alt="">
      <div slot="content">更多</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
