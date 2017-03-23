import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: pages('home')
    },
    {
      path: '/home',
      component: pages('home')
    },
    {
      path: '/search',
      component: pages('search')
    },
    {
      path: '/shop',
      component: pages('shop')
    },
    {
      path: '/cart',
      component: pages('cart'),
      beforeEnter: (to, from, next) => {
        var isLogin = Boolean(store.state.token);
        // true用户已登录， false用户未登录
        if (!isLogin) {
          return next({ path: '/login' });
        }
        next();
      }
    },
    {
      path: '/user',
      component: pages('user')
    },
    {
      path: '/login',
      component: pages('login')
    },
    {
      path: '*',
      component: pages('nofound')
    }
  ]
});

function pages(name) {
  return function(resolve) {
    require(['../pages/' + name + '/' + name + '.vue'], resolve);
  };
};
