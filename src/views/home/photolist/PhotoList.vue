<template>
  <div class="recommend-container">
    <div class="recommend-hd">
      <img src="~assets/img/home/photolist/header.png" class="recommend-hd-bg" />
    </div>
    <div class="recommend-item">
      <a class="recommend-img-wrapper triggerClick">
        <img class="recommend-img lazyload" src="~assets/img/home/photolist/01.jpg"/>
      </a>
      <a class="recommend-info triggerClick">
        <div class="recommend-title">
          <span class="recommend-title-p">MUMO木墨 多层架 实木置物架卧室书架落地客厅木头架子红橡木书架</span>
        </div>
        <div class="recommend-price-box">
          <span class="recommend-sign recommend-h">￥</span>
          <span class="recommend-price">2,498</span>
          <span class="recommend-payed">56人已购买</span>
        </div>
      </a>
    </div>
    <div class="recommend-item">
      <a class="recommend-img-wrapper triggerClick">
        <img class="recommend-img lazyload" src="~assets/img/home/photolist/02.jpg"/>
      </a>
      <a class="recommend-info triggerClick">
        <div class="recommend-title">
          <span class="recommend-title-p">日式窑变酒店家用陶瓷餐具拉面碗沙拉碗家用实用出口汤碗</span>
        </div>
        <div class="recommend-price-box">
          <span class="recommend-sign recommend-h">￥</span>
          <span class="recommend-price">29</span>
          <span class="recommend-payed">288人已购买</span>
        </div>
      </a>
    </div>
    <div class="recommend-item">
      <a class="recommend-img-wrapper triggerClick">
        <img class="recommend-img lazyload" src="~assets/img/home/photolist/03.jpg"/>
      </a>
      <a class="recommend-info triggerClick">
        <div class="recommend-title">
          <span class="recommend-title-p">可折叠便携式微花园实木庭院阳台户外休闲桌露野营靠背折叠茶餐桌</span>
        </div>
        <div class="recommend-price-box">
          <span class="recommend-sign recommend-h">￥</span>
          <span class="recommend-price">65</span>
          <span class="recommend-payed">49人已购买</span>
        </div>
      </a>
    </div>
    <div class="recommend-item">
      <a class="recommend-img-wrapper triggerClick">
        <img class="recommend-img lazyload" src="~assets/img/home/photolist/04.jpg"/>
      </a>
      <a class="recommend-info triggerClick">
        <div class="recommend-title">
          <span class="recommend-title-p">欧式复古做旧实木茶几小圆桌方桌美式木餐桌酒店咖啡厅桌椅组合</span>
        </div>
        <div class="recommend-price-box">
          <span class="recommend-sign recommend-h">￥</span>
          <span class="recommend-price">396</span>
          <span class="recommend-payed">19人已购买</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.recommend-container {
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-direction: row;
  place-content: flex-start space-between;
  flex-shrink: 0;
  overflow: hidden;
  flex-wrap: wrap;
  padding: 0 7px;
  background: #f2f2f2;
  padding-bottom: 11px;
  top: 25px;
}
.recommend-hd {
  padding: 11px 0;
  width: 100%;
  text-align: center;
}
.recommend-hd-bg {
  width: 154px;
  height: 18px;
}
.recommend-item {
  height: 249px;
  position: relative;
  width: 164px;
  box-sizing: border-box;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  background: #fff;
  margin-top: 8.639999999999999px;
  border-radius: 5.76px;
  overflow: hidden;
  margin-left: 4.319999999999999px;
  margin-right: 4.319999999999999px;
}
.recommend-img {
  width: 164.16px;
  height: 164.16px;
}
.recommend-img-wrapper {
  height: 164.16px;
  align-items: center;
  justify-content: center;
}
.recommend-info {
  padding-left: 9.6px;
  padding-right: 8.639999999999999px;
  height: 90.24000000000001px;
  text-decoration: none;
}
.recommend-title {
  margin-top: 11.04px;
  height: 35.519999999999996px;
  position: relative;
  overflow: hidden;
  line-height: 17.759999999999998px;
  text-overflow: ellipsis;
  min-height: 0;
}
.recommend-price-box {
  flex-direction: row;
  margin-top: 10.559999999999999px;
  height: 19.2px;
  line-height: 19.2px;
}
.recommend-title-p {
  font-size: 12.48px;
  color: #333333;
}
.recommend-sign {
  font-size: 10.559999999999999px;
  margin-left: getUnit(-6);
  margin-bottom: getUnit(-1);
}
.recommend-price {
  font-size: 13.440000000000001px;
  line-height: 15.36px;
  color: #ff5500;
}
.recommend-payed {
  font-size: 10.559999999999999px;
  color: #999999;
  margin-top: 1.92px;
}
</style>