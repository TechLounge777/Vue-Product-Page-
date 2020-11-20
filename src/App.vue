<template>
  <div id="app">
      <TheHeader />
      <transition mode="out-in" name="fade" appear>
      <router-view />
      </transition>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import * as actionTypes from '@/store/action-types';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
  beforeCreate() {
    this.$store.dispatch(actionTypes.FETCH_CURRENT_USER);
  },
};
</script>

<style lang="scss">
  @import 'styles/main.scss';

</style>
