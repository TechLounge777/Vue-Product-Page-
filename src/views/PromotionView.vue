<template>
  <div class="view-promotion-view">
      <AppLoader v-show="promotionLoading" />
      <div v-show="promotionVisible">
        <PromotionTile class="promotion" :promotion="promotiondata" />
        <div class="container">
          <p class="description">{{promotionData.longDescription}}</p>
          <div class="finish">Promotion ends: {{finish}}</div>
          <div class="products">
            <ProductTile
            v-for="product in promotionData.items"
            :key="product.id"
            :product="product"
          />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import PromotionTile from '@/components/PromotionTile.vue';
import ProductTile from '@/components/ProductTile.vue';
import AppLoader from '@/components/AppLoader.vue';
import moment from 'moment';
import { mapGetters } from 'vuex';
import * as getterTypes from '@/store/getter-types';
import * as actionTypes from '@/store/action-types';

export default {
  name: 'Promotion',
  components: {
    PromotionTile,
    ProductTile,
    AppLoader,
  },
  computed: {
    ...mapGetters({
      promotionData: getterTypes.GET_PROMOTION_DATA,
      promotionLoading: getterTypes.GET_PROMOTION_LOADING,
      promotionError: getterTypes.GET_PROMOTION_ERROR,
    }),
    promotionVisible() {
      return !this.promotionLoading && !this.promotionError;
    },
    finish() {
      return this.promotionData.id && (this.promotionData.finishCondition || moment(
        this.promotionData.finishDate,
      ).format('Do MMMM YYYY'));
    },
  },
  created() {
    this.$store.dispatch(actionTypes.FETCH_PROMOTION, this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>

</style>
