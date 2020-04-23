<template>
  <div class="category">
    <div class="top"></div>
    <div class="wrapper" @scroll="onScroll">
      <div class="column">
        <a class="column-top" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/01.png"/>
          <p class="column-text">天猫新品</p>
        </a>
        <a class="column-bottom" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/02.png"/>
          <p class="column-text">充值中心</p>
        </a>
      </div>
      <div class="column">
        <a class="column-top" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/03.png"/>
          <p class="column-text">今日爆款</p>
        </a>
        <a class="column-bottom" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/04.png"/>
          <p class="column-text">机票酒店</p>
        </a>
      </div>
      <div class="column">
        <a class="column-top" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/05.png" />
          <p class="column-text">天猫国际</p>
        </a>
        <a class="column-bottom" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/06.png" />
          <p class="column-text">金币庄园</p>
        </a>
      </div>
      <div class="column">
        <a class="column-top" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/07.png" />
          <p class="column-text">饿了么</p>
        </a>
        <a class="column-bottom" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/08.png" />
          <p class="column-text">阿里拍卖</p>
        </a>
      </div>
      <div class="column">
        <a class="column-top" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/09.png" />
          <p class="column-text">天猫超市</p>
        </a>
        <a class="column-bottom" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/10.png" />
          <p class="column-text">淘宝吃货</p>
        </a>
      </div>
      <div class="column">
        <a class="column-top" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/11.png" />
          <p class="column-text">分类</p>
        </a>
        <a class="column-bottom" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/12.png" />
          <p class="column-text">闲鱼</p>
        </a>
      </div>
      <div class="column">
        <a class="column-top" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/13.png" />
          <p class="column-text">天猫美食</p>
        </a>
        <a class="column-bottom" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/14.png" />
          <p class="column-text">会员中心</p>
        </a>
      </div>
      <div class="column">
        <a class="column-top" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/15.png" />
          <p class="column-text">阿里健康</p>
        </a>
        <a class="column-bottom" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/16.png" />
          <p class="column-text">造点新货</p>
        </a>
      </div>
      <div class="column">
        <a class="column-top" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/17.png" />
          <p class="column-text">口碑生活</p>
        </a>
        <a class="column-bottom" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/18.png" />
          <p class="column-text">会员店</p>
        </a>
      </div>
      <div class="column">
        <a class="column-top" href="javascript:;">
          <img class="column-img" src="~assets/img/home/category/19.png" />
          <p class="column-text">土货鲜食</p>
        </a>
      </div>
    </div>
    <div class="proxy-scroller">
      <div class="proxy-scroller-wrapper">
        <div class="proxy-scroller-handler" :style="'transform: translate('+scrollX+'px);'"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollX: 0
    }
  },
  methods: {
    onScroll(event) {
      this.scrollX = event.target.scrollLeft/(event.target.scrollWidth/2)*30
    }
  }
};
</script>

<style>
.category {
  height: 186px;
  width: 100%;
  position: relative;
  margin-top: -10px;
  z-index: 100;
  top: 35px;
}
.top {
  background-image: url(https://gw.alicdn.com/tfs/TB1vMMwChTpK1RjSZFMXXbG_VXa-1125-30.png);
  height: 10px;
  width: 100%;
  background-size: 100%;
  margin-bottom: -2px;
  background-repeat: no-repeat;
  background-position: center center;
}
.wrapper {
  display: flex;
  flex-direction: row;
  height: 156px;
  width: 100%;
  overflow-x: auto;
  background: rgb(255, 255, 255);
}
.wrapper::-webkit-scrollbar {display:none}
.column {
  margin-left: 11.5px;
}
.column-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 67px;
  width: 61px;
  margin-top: 3px;
}
.column-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 67px;
  width: 61px;
  margin-top: 13px;
}
.column-img {
  height: 48px;
  width: 61px;
}
.column-text {
  font-size: 11px;
  line-height: 15px;
  color: rgb(102, 102, 102);
  margin-top: 4px;
}
.proxy-scroller {
  display: flex;
  width: 100%;
  height: 20px;
  background-color: rgb(255, 255, 255);
  justify-content: center;
  align-items: center;
}
.proxy-scroller-wrapper {
  width: 50px;
  height: 3px;
  background-color: rgb(212, 216, 222);
  border-radius: 4px;
}
.proxy-scroller-handler {
  width: 20px;
  height: 3px;
  background-color: rgb(255, 109, 42);
  will-change: transform;
  border-radius: 4px;
}
</style>