// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Mint from 'mint-ui';
import '../config/rem';
import './assets/css/main.css';
import 'mint-ui/lib/style.css';
import router from './router';
import App from './App';

Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
