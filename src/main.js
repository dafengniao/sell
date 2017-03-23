// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Mint from 'mint-ui';
import '../config/rem';
import './assets/css/main.css';
import 'mint-ui/lib/style.css';
import router from './router';
import store from './store/';
import App from './App';
import FastClick from 'fastclick';

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
};

Vue.use(Mint);

router.beforeEach(({meta, path}, from, next) => {
  var { auth = true } = meta;
  var isLogin = Boolean(store.state.token);
  // true用户已登录， false用户未登录
  if (auth && !isLogin) {
    console.log(123);
    // return next({ path: '/login' });
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
