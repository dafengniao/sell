import Vue from 'vue';
import Router from 'vue-router';

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
      component: pages('cart')
    },
    {
      path: '/user',
      component: pages('user')
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
