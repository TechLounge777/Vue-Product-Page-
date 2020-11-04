<template>
<div class="view home-view">
      <div v-show="promotionsVisible">
        <router-link
        v-for="promotion in promotionsList"
        :to="`/promotion/${promotion.id}`"
        :key="promotion.id"
        class="promotion"
        >
          <PromotionTile :promotion="promotion" />
        </router-link>
      </div>
</div>
</template>

<script>
import * as actionTypes from '@/store/action-types';
import * as getterTypes from '@/store/getter-types';
import { mapGetters } from 'vuex';
import PromotionTile from '@/components/PromotionTile.vue';

export default {
  name: 'Home',
  components: {
    PromotionTile,
  },
  computed: {
    ...mapGetters({
      promotionsList: getterTypes.GET_PROMOTIONS_LIST,
      promotionsLoading: getterTypes.GET_PROMOTIONS_LOADING,
      promotionsError: getterTypes.GET_PROMOTIONS_ERROR,
    }),
    promotionsVisible() {
      return !this.promotionsLoading && this.promotionsError;
    },
  },
  created() {
    this.$store.dispatch(actionTypes.FETCH);
  },
};
</script>
