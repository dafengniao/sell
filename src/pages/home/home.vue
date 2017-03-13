<template>
	<div>
		<div class="home-header">
	    <img src="https://s3.taihuoniao.com/images/icon/ffflogo.png">
	    <div class="home-input" v-on:click="Select">
	    </div>
	  </div>
    <div class="page-swipe">
      <mt-swipe :auto="5000" :speed="600">
        <mt-swipe-item v-for="item in imgsss" :key="item.id">
          <img :src=" item.cover_url ">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="tab">
      <div class="tab-item">商家
      </div>
      <div class="tab-item">商家
      </div>
      <div class="tab-item">商家
      </div>
    </div>
    <footer-view></footer-view>
  </div>

</template>
<script>
  import footer from '../../components/footer/footer';

  export default {
    components: {
      'footer-view': footer
    },
    data() {
      return {
        imgsss: [
          {
            cover_url: 'https://p4.taihuoniao.com/asset/170213/58a1879a20de8d277e8b475a-1'
          },
          {
            cover_url: 'https://p4.taihuoniao.com/asset/170213/58a186dd20de8d397e8b4778-1'
          }
        ]
      };
    },
    methods: {
      Select() {
        this.$router.push({
          path: '/search'
        });
      }
    }
  };
</script>
<style>
	.home-header{
    height:1.333333rem;
    line-height:1.333333rem;
    padding:0 0.4rem;
    background:#fff;
    box-shadow: 0 0.053333rem 0.08rem 0 rgba(204,204,204,.5);
    position:relative;
  }
  .home-header img{
    width:1.493333rem;
    height:0.48rem; 
    position: absolute;
    top: 0.426667rem;
    left: 0.4rem; 
  }
  .home-input{
    height: 0.8rem;
    width: 100%;
    background: url(https://s3.taihuoniao.com/images/fiushop/inputm.png) no-repeat 50% #f7f7f7;
    background-size: 3.573333rem 0.48rem;
    background-position: 0.32rem 0.16rem;
    border-radius: 0.16rem;
    position: relative;
    position: absolute;
    right:0.4rem;
    top:0.266667rem;
    width:7.333333rem;
  }
  .page-swipe{
    text-align: center;
    color: #666;
    margin-bottom: 0.133333rem;
  }
  .mint-swipe {
    height: 5.626667rem;
    color: #fff;
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 0.533333rem;
  }
  .mint-swipe-item {
    line-height: 5.626667rem;
  }
  .mint-swipe-item img{
    width: 100%;
  }
  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }
  .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
  .mint-swipe-indicator{
    opacity: 0.8;
    margin: 0 0.18rem;
    background: #f1f1f1;
  }
  .mint-swipe-indicator.is-active{
    background: #000;
  }

</style>
