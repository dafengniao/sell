<template>
  <div id="app">
    <router-view class="v-header" name="footer"></router-view>
    <router-view class="child-view" name="main"></router-view>
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
    </div>
  </div>
  
</template>

<script>
  import header from './components/header/header.vue';
  import { Toast } from 'mint-ui';
  export default{
    components: {
      'v-header': header
    },
    methods: {
      openToast() {
        Toast('提示信息');
      },
      openToastWithIcon() {
        Toast({
          message: '操作成功',
          iconClass: 'mintui mintui-success'
        });
      },
      openBottomToast() {
        Toast({
          message: '提示信息',
          position: 'bottom'
        });
      }
    }
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
</style>
