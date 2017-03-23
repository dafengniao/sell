<template>
	<div class="loginbg">
    <mt-header title="登陆">
      <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <img class="logo" src="https://p4.taihuoniao.com/images/wechat/fiu.png">
    <div class="login">
      <mt-field placeholder="手机号" type="number" disableClear></mt-field>
      <mt-field placeholder="动态密码" type="password" disableClear></mt-field>
    </div>
    <spinner :show="loading"></spinner>
  </div>
</template>

<script>
  import spinner from '../../components/spinner/spinner.vue';
  import { Header, Field } from 'mint-ui';

  export default {
     components: {
      'spinner': spinner,
      'mt-header': Header,
      'mt-field': Field
    },
    data() {
      return {
        loading: false
      };
    }
  };
</script>
<style>
  .loginbg {
    width:10.0rem;
    min-height:100%;
    background:url(https://p4.taihuoniao.com/images/wechat/login.jpg) center center /cover;
    text-align:center;
    position: absolute;
    top: 0;
    left: 0;
  }
  .logo{
    width:3.466667rem;
    height:1.466667rem;
    margin:1.6rem auto 0.8rem;
  }
  .login{
    padding:0.8rem 0.666667rem;
  }
  .mint-cell{
    margin-bottom: 0.4rem;
    background-color: #000;
  }
  .mint-cell-wrapper{
    background-color: #000;
    background-image:none;
    padding: 0.266667rem 0.4rem;
  }
  .mint-field-core{
    background-color: #000;
    color: #999;
    font-size: 0.373333rem;
  }
</style>
