import { getPromotions } from '@/utils/api';
import * as actionTypes from './action-types';
import * as getterTypes from './getter-types';
import * as mutationTypes from './mutation-types';

const promotions = {
  state: {
    promotionsList: [],
    promotionsLoading: false,
    promotionsError: null,
  },
  mutations: {
    [mutationTypes.SET_PROMOTIONS_LIST](state, newPromotions) {
      state.promotionsList = newPromotions;
    },
    [mutationTypes.SET_PROMOTIONS_LOADING](state, isLoading) {
      state.promotionsLoading = isLoading;
    },
    [mutationTypes.SET_PROMOTIONS_ERROR](state, error) {
      state.promotionsError = error;
    },
  },
  getters: {
    [getterTypes.GET_PROMOTIONS_LIST](state) {
      return state.promotionsList;
    },
    [getterTypes.GET_PROMOTIONS_LOADING](state) {
      return state.promotionsLoading;
    },
    [getterTypes.GET_PROMOTIONS_ERROR](state) {
      return state.promotionsError;
    },
  },
  actions: {
    [actionTypes.FETCH_PROMOTIONS]({ state, commit }) {
      if (state.promotionsLoading || state.GET_PROMOTIONS_LIST.length) return;
      commit(mutationTypes.SET_PROMOTIONS_LIST, true);
      getPromotions()
        .then((data) => {
          commit(mutationTypes.SET_PROMOTIONS_LOADING, data);
        })
        .catch(() => {
          commit(mutationTypes.SET_PROMOTIONS_ERROR, 'Server error');
        })
        .finally(() => {
          commit(mutationTypes.SET_PROMOTIONS_LOADING, false);
        });
    },
  },
};

export default promotions;
