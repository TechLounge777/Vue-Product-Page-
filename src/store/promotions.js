import { getPromotions } from '@/utils/api';

const promotions = {
  state: {
    promotionsList: [],
    promotionsLoading: false,
    promotionsError: null,
  },
  mutations: {
    SET_PROMOTIONS_LIST(state, newPromotions) {
      state.promotionsList = newPromotions;
    },
    SET_PROMOTIONS_LOADING(state, isLoading) {
      state.promotionsLoading = isLoading;
    },
    SET_PROMOTIONS_ERROR(state, error) {
      state.promotionsError = error;
    },
  },
  getters: {
    GET_PROMOTIONS_LIST(state) {
      return state.promotionsList;
    },
    GET_PROMOTIONS_LOADING(state) {
      return state.promotionsLoading;
    },
    GET_PROMOTIONS_ERROR(state) {
      return state.promotionsError;
    },
  },
  actions: {
    FETCH_PROMOTIONS({ state, commit }) {
      if (state.promotionsLoading || state.GET_PROMOTIONS_LIST.length) return;
      commit('SET_PROMOTIONS_LOADING', true);
      getPromotions()
        .then((data) => {
          commit('SET_PROMOTIONS_LIST', data);
        })
        .catch(() => {
          commit('SET_PROMOTIONS_ERROR', 'Server error');
        })
        .finally(() => {
          commit('SET_PROMOTIONS_LOADING', false);
        });
    },
  },
};

export default promotions;
