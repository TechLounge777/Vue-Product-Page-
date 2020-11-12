<template>
  <router-link class="product-tile card" :to="`/product/${product.id}`">
    <div class="product-tile" :style="imageStyle"></div>
    <h4 class="product-tile__title">{{product.name}}</h4>
    <AppRating :rate="product.rate" :ratesNumber="product.ratesNumber" />
    <div class="product-tile__price">{{product.price}}$</div>
  </router-link>
</template>

<script>
import AppRating from '@/components/AppRating.vue';

export default {
  name: 'ProductTile',
  props: {
    product: Object,
  },
  components: {
    AppRating,
  },
  computed: {
    imageStyle() {
      let imageUrl;

      try {
        imageUrl = require(`@/assets/${this.product.image}`);
            } catch(e) { } // eslint-disable-line

      return {
        background: `url(${imageUrl}) center / cover`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
