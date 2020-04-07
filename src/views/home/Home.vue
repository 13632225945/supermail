<template>
  <div>
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
  </div>
</template>

<script>
import SearchBar from './searchbar/SearchBar'
import Category from './category/Category'
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    SearchBar,
    Carousel,
    Slide,
    Category
  }
}
</script>

<style>
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
</style>