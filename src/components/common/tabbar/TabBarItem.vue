<template>
  <div class="tab-bar-item" :class="{active: isActive}"
    :style="activeStyle" @click="itemClick">
    <div v-if="isActive" class="img"><slot name="img-active"></slot></div>
    <div v-else class="img"><slot name="img"></slot></div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'blue'
    },
    beforeRoute: {
      type: Function,
      default: () => {return true}
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.$route.path.indexOf(this.path) != -1 ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      if(this.beforeRoute()) {
        this.$router.push(this.path)
      }
    }
  }
}
</script>
<style>
.tab-bar-item {
  text-align: center;
  font-size: 12px;
  transform: scale(0.83333333);
}
.tab-bar-item .img img {
  height: 24px;
  vertical-align: middle;
}
.tab-bar-item .content {
  padding-top: 5px;
}
</style>