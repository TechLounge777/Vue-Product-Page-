import Vue from 'vue';
import Vuex from 'vuex';
import promotions from './promotions';
import promotion from './promotion';
import user from './user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    promotions,
    promotion,
    user,
  },
  strict: process.env.NODE_ENV !== 'production',
});
