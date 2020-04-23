<template>
  <div class="viewer-wrapper">
    <div class="viewer">
      <div class="viewer-left">
        <div class="viewer-item1">
          <div class="header">聚划算</div>
          <div class="content">
            <div class="image-title">品牌折扣</div>
            <img src="~assets/img/home/viewer/01.jpg" />
          </div>
        </div>
        <div class="viewer-item1">
          <div class="header"></div>
          <div class="content">
            <div class="image-title">抢大额券</div>
            <img src="~assets/img/home/viewer/02.jpg" />
          </div>
        </div>
        <div class="viewer-item1">
          <div class="header">淘抢购</div>
          <div class="content">
            <div class="image-title">限时半价</div>
            <img src="~assets/img/home/viewer/03.jpg" />
          </div>
        </div>
        <div class="viewer-item1">
          <div class="header">天天特卖</div>
          <div class="content">
            <div class="image-title">9.9包邮</div>
            <img src="~assets/img/home/viewer/04.jpg" />
          </div>
        </div>
        <div class="viewer-item2">
          <div class="header">每日好店<span>精选</span></div>
          <div class="items">
            <div>
              <div class="title">挖深藏的店</div>
              <img src="~assets/img/home/viewer/04.jpg" />
            </div>
            <div>
              <img src="~assets/img/home/viewer/05.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="viewer-right">
        <div class="viewer-item2">
          <div class="header">每日好店<span>精选</span></div>
          <div class="items">
            <div>
              <div class="title">挖深藏的店</div>
              <img src="~assets/img/home/viewer/07.jpg" />
            </div>
            <div>
              <img src="~assets/img/home/viewer/06.jpg" />
            </div>
          </div>
        </div>
        <div class="viewer-item2">
          <div class="header">每日好店<span>精选</span></div>
          <div class="items">
            <div>
              <div class="title">挖深藏的店</div>
              <img src="~assets/img/home/viewer/04.jpg" />
            </div>
            <div>
              <img src="~assets/img/home/viewer/08.jpg" />
            </div>
          </div>
        </div>
        <div class="viewer-item2">
          <div class="header">每日好店<span>精选</span></div>
          <div class="items">
            <div>
              <div class="title">挖深藏的店</div>
              <img src="~assets/img/home/viewer/04.jpg" />
            </div>
            <div>
              <img src="~assets/img/home/viewer/09.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="viewer-footer">
      <span class="header">淘宝头条</span>
      <a :class="{animated: true, slideInUp: footIndex==0, slideOutUp: footIndex!=0}" :style="{display:footIndex==0?'':'none'}">
        <span class="bradge">评测</span>
        <span class="content">网红瓶盖饮料，三秒钟把水变成饮料</span>
      </a>
      <a :class="{animated: true, slideInUp: footIndex==1, slideOutUp: footIndex!=1}" :style="{display:footIndex==1?'':'none'}">
        <span class="bradge">萌宠</span>
        <span class="content">为什么唤猫的名字，它总不搭理？</span>
      </a>
      <a :class="{animated: true, slideInUp: footIndex==2, slideOutUp: footIndex!=2}" :style="{display:footIndex==2?'':'none'}">
        <span class="bradge">摄影</span>
        <span class="content">专治镜头尴尬症，7个女生通用pose</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footIndex: 0
    }
  },
  created() {
    setInterval(() => {
      this.footIndex<2 ? this.footIndex++ : (this.footIndex = 0);
    }, 3000);
  }
}
</script>

<style>
.viewer-wrapper {
  position: relative;
  top: 35px;
  background: #fff;
  border-radius: 11px;
  margin: 10px 9px;
}
.viewer {
  display: flex;
}
.viewer-left,
.viewer-right {
  width: 50%;
  padding-bottom: 10px;
  padding-left: 12px;
  border-right: 1px solid #eee;
}
.viewer-item1 {
  display: inline-block;
  width: 50%;
  padding-right: 10px;
}
.viewer-item1 .header {
  color: #000;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 14px;
  padding-bottom: 5px;
  padding-top: 10px;
}
.viewer-item1 .content {
  background: #f4f4f4;
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
}
.viewer-item1 .image-title {
  font-weight: bold;
  padding: 5px;
  text-align: left;
}
.viewer-item1 img {
  width: 59px;
}
.viewer-item2 {
  width: 100%;
}
.viewer-item2 .header {
  color: #000;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 14px;
  padding-bottom: 5px;
  padding-top: 10px;
}
.viewer-item2 .header span {
  font-size: 10px;
  background: linear-gradient(to right, #fbd000, #fba901);
  border-radius: 3px;
  color: #fff;
  font-weight: normal;
  padding: 1px 2px;
  margin-left: 5px;
}
.viewer-item2 .title {
  color: #fba901;
  font-size: 12px;
}
.viewer-item2 .items {
  display: flex;
}
.viewer-item2 .items > div {
  flex-grow: 1;
}
.viewer-item2 .items > div:last-child img{
  width: 65px;
}
.viewer-item2 img {
  width: 59px;
  padding-top: 5px;
}
.viewer-footer {
  border-top: 1px solid #eee;
  padding: 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.viewer-footer a {
  display: flex;
  align-items: center;
  justify-content: center;
}
.viewer-footer .header {
  font-size: 14px;
  font-weight: bold;
  color: #000;
  margin-right: 10px;
}
.viewer-footer .bradge {
  background: #fef0ed;
  border-radius: 3px;
  color: #d2682e;
  font-weight: normal;
  padding: 3px 5px;
  margin-right: 10px;
}
.viewer-footer .content {
  color: #000;
  overflow: hidden;
  max-width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>