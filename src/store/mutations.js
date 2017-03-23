import { USER_SIGNIN, USER_SIGNOUT } from './mutation-types.js';

// 判断是否登录
var isLoggedIn = function() {
    // TODO 此处可以写异步请求，到后台一直比较Token
  var token = localStorage.getItem('user');
  if (token) {
      return JSON.parse(token);
  } else {
      return false;
  }
};

const state = {
  token: isLoggedIn() || null
};

const mutations = {
  [USER_SIGNIN](state, user) {
    localStorage.setItem('user', JSON.stringify(user));
    state.token = user;
  },
  [USER_SIGNOUT](state) {
    localStorage.removeItem('user');
    state.token = null;
  }
};

export default {
  state,
  mutations
};
