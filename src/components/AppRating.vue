<template>
  <div class="app-rating">
    <Star :class="classNames[0]" />
    <Star :class="classNames[1]" />
    <Star :class="classNames[2]" />
    <Star :class="classNames[3]" />
    <Star :class="classNames[4]" />
    <div class="app-rating__rates-number" v-if="ratesNumber">
        ({{ratesNumber}})
    </div>
  </div>
</template>

<script>
import Star from '@/assets/star.svg';

export default {
  name: 'AppRating',
  components: {
    Star,
  },
  props: {
    rate: Number,
    ratesNumber: Number,
  },
  computed: {
    clsssNames() {
      return [
        this.rate >= 0.5 ? 'shiny' : '',
        this.rate >= 1.5 ? 'shiny' : '',
        this.rate >= 2.5 ? 'shiny' : '',
        this.rate >= 3.5 ? 'shiny' : '',
        this.rate >= 4.5 ? 'shiny' : '',
      ];
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
