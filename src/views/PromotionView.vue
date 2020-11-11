<template>
  <div class="view-promotion-view">
      <h1>Promotion</h1>
      <AppRating :rate="4.6" :ratesNumber="100" />
  </div>
</template>

<script>
import AppRating from '@/components/AppRating.vue';

export default {
  name: 'Promotion',
  components: {
    AppRating,
  },
};
</script>

<style lang="scss" scoped>

</style>
