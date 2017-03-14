<template>
  <div class="loginbg">
    <footer-view></footer-view>
  </div>

</template>
<script>
  import footer from '../../components/footer/footer';

  export default {
    components: {
      'footer-view': footer
    }
  };
</script>
<style>
	.loginbg {
		width:10.0rem;
		height:667px;
		background:url(https://p4.taihuoniao.com/images/wechat/login.jpg) center center /cover;
		text-align:center;
	}

</style>
