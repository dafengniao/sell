import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
Vue.config.debug = debug;
Vue.config.warnExpressionErrors = false;

export default new Vuex.Store({
  modules: {
    actions,
    mutations
  },
  strict: debug
});
