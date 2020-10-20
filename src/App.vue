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

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
  @import 'styles/main.scss';

</style>
