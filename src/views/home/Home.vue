<template>
  <div ref="home" class="home" @scroll="onScroll">
    <search-bar></search-bar>
    <carousel :per-page="1" :autoplay="true" :loop="true" pagination-position="bottom-overlay" 
      :paginationSize="8" :pagination-padding="2" pagination-active-color="#ff5000" 
      pagination-color="#fff">
      <slide>
        <img src="~assets/img/home/carousel/01.jpg">
      </slide>
      <slide>
        <img src="~assets/img/home/carousel/02.jpg">
      </slide>
      <slide>
        <img src="~assets/img/home/carousel/03.jpg">
      </slide>
      <slide>
        <img src="~assets/img/home/carousel/04.jpg">
      </slide>
      <slide>
        <img src="~assets/img/home/carousel/05.jpg">
      </slide>
    </carousel>
    <category></category>
    <viewer></viewer>
    <photo-list></photo-list>
    <button @click="scrollToTop" :class="{'back-top': true, animated: true, fadeIn: scrollTop>0, fadeOut: scrollTop==0}">顶部</button>
  </div>
</template>

<script>
import SearchBar from './searchbar/SearchBar'
import Category from './category/Category'
import Viewer from './viewer/Viewer'
import PhotoList from './photolist/PhotoList'
import { Carousel, Slide } from 'vue-carousel'
export default {
  data() {
    return {
      scrollTop: 0
    }
  },
  components: {
    SearchBar,
    Carousel,
    Slide,
    Category,
    Viewer,
    PhotoList
  },
  methods: {
    onScroll(event) {
      this.scrollTop = event.target.scrollTop
    },
    scrollToTop() {
      this.$refs.home.scroll(0, 0);
    }
  }
}
</script>

<style>
.home {
  background: #f4f4f4;
  height: calc(100% - 46px);
  overflow: auto;
}
.VueCarousel {
  top: 37px;
}
.VueCarousel img {
  width: 100%;
}
.VueCarousel-pagination {
  bottom: 10px!important;
}
.VueCarousel-dot {
  opacity: .3;
}
.VueCarousel-dot.VueCarousel-dot--active {
  opacity: 1;
}
.back-top {
  position: fixed;
  z-index: 1111;
  bottom: 50px;
  right: 10px;
  background: #fff;
  outline: none;
  border: 1px solid #eee;
  padding: 10px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  font-size: 14px;
  color: #aaa;
}
</style>