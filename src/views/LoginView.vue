<template>
<div class="view login-view">
    <AppLoader background v-show="loading" />
  <div class="modal">
      <form @submit.prevent="onSubmit">
          <h1 class="modal__title">Log in</h1>
          <div class="modal__error" v-show="!!error">
              {{error}}
          </div>
          <input placeholder="Email" v-model="email" />
          <input placeholder="Password" type="password" v-model="password"/>
          <button type="submit" :disabled="disabled">Send</button>
      </form>
  </div>
</div>
</template>

<script>
import AppLoader from '@/components/AppLoader.vue';

export default {
  name: 'registerView',
  components: {
    AppLoader,
  },
  data() {
    return {
      error: '',
      loading: false,
      email: '',
      password: '',
    };
  },
  computed: {
    disabled() {
      return this.loading || !this.email.length;
    },
  },
  methods: {
    onSubmit() {
      if (this.email.length < 6) {
        this.error = 'Email must have at least 6 chracters';
      } else {
        this.loading = true;
        this.error = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
