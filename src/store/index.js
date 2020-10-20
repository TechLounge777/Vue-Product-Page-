import Vue from 'vue';
import Vuex from 'vuex';
// eslint-disable-next-line import/no-named-as-default-member
import promotions from './promotions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    promotions,
  },
  strict: process.env.NODE_ENV !== 'production',
});
