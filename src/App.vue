<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <router-view class="child-view" name="main"></router-view>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商家
      </div>
      <div class="tab-item">商家
      </div>
      <div class="tab-item">商家
      </div>
    </div>
    <div class="header">
      header
    </div>
    <div class="page-toast">
      <h1 class="page-title">Toast</h1>
      <div class="page-toast-wrapper">
        <mt-button @click.native="openToast" size="large">点击弹出 Toast</mt-button>
        <mt-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</mt-button>
        <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>
      </div>
    </div> -->
  </div>
  
</template>

<script>
  export default{
    components: {}
  };
</script>

<style>
 .page-toast-wrapper {
    padding: 0 0.533333rem;
  }
  .page-toast-wrapper  button:not(:last-child) {
    margin-bottom: 0.533333rem;
  }
  .tab{
    display:flex;
    width:100%;
    line-height:1.066667rem;
  }
  .tab-item{
    flex:1;
    text-align:center;
    font-size:0.48rem;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
