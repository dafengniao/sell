import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: {
        main: pages('index'),
        footer: component('footer')
      }
    }
  ]
});
function pages(name) {
  return function(resolve) {
    require(['../pages/' + name + '/' + name + '.vue'], resolve);
  };
};

function component(name) {
  return function(resolve) {
    require(['../components/' + name + '/' + name + '.vue'], resolve);
  };
};
