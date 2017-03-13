<template>
	<div>
		<div class="footer">
			<ul class="navfelx">
				<li class="childcell">
					<div class="menuicon" @click="goPuch({path: '/home'})" v-bind:class="$route.path.indexOf('home') !== -1? 'active' : '' ">
						<div class="choice img" ></div>
						精选
					</div>
				</li>
				<li class="childcell">
					<div class="menuicon" @click="goPuch({path: '/shop'})" v-bind:class="$route.path.indexOf('shop') !== -1? 'active' : '' ">
						<div class="find img"></div>
						找货
					</div>
				</li>
				<li class="childcell">
					<div class="menuicon" @click="goPuch({path: '/cart'})" v-bind:class="$route.path.indexOf('cart') !== -1? 'active' : '' ">
						<div class="cart img"></div>
						购物车
					</div>
				</li>
				<li class="childcell">
					<div class="menuicon" @click="goPuch({path: '/user'})" v-bind:class="$route.path.indexOf('user') !== -1? 'active' : '' ">
						<div class="owner img"></div>
						我的
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
	  methods: {
	    goPuch(path) {
	      this.$router.push(path);
	    }
	  }
	};
</script>
<style>
	.footer{
		position: fixed;
		z-index: 9;
		color: #222;
		height: 1.333333rem;
		width: 100%;
		bottom: 0;
		left: 0;
		background: rgba(255,255,255,.95);
	}
	.navfelx{
		display:flex;
    width:100%;
	}
	.childcell{
		flex: 1;
		position: relative;
	}
	.menuicon {
    color: #222;
    padding: 0.053333rem 0.16rem 0.133333rem;
    font-size: 0.32rem;
    margin: 0.106667rem;
    text-align: center;
	}
	.menuicon.active{
    color: #be8914;
	}
	.menuicon .img {
    display: block;
    margin: 0 auto 0.106667rem;
    vertical-align: middle;
    background-image: url(https://s3.taihuoniao.com/images/fiushop/sfooter1.png);
    background-repeat: no-repeat;
    background-size: 2.346667rem 0.48rem;
	}
	.menuicon .img.choice {
    height: 0.48rem;
    width: 0.533333rem;
    background-position: 0 0;
	}
	.menuicon.active .img {
    background-image: url(https://s3.taihuoniao.com/images/fiushop/sfooter2.png);
	}
	.menuicon .img.find {
    height: 0.48rem;
    width: 0.693333rem;
    background-position: -1.68rem 0.08rem;
	}
	.menuicon .img.cart {
    height: 0.48rem;
    width: 0.586667rem;
    background-position: -0.533333rem 0;
	}
	.menuicon .img.owner {
    height: 0.48rem;
    width: 0.56rem;
    background-position: -1.12rem 0;
	}
</style>
