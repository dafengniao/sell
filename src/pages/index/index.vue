<template>
  <div class="home-header">
    <img src="https://s3.taihuoniao.com/images/icon/ffflogo.png">
    <div class="home-input">
    </div>
  </div>

</template>
<script>
	export default {
	  name: 'main'
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
</style>
