<template>
<div class="view register-view">
    <AppLoader background v-show="loading" />
  <div class="modal">
      <div v-show="registered">
          <h1>Thank you</h1>
          <p>Confirmation email has been sent.</p>
      </div>
      <form @submit.prevent="onSubmit" v-show="!registered">
          <h1 class="modal__title">Register</h1>
          <div class="modal__error" v-show="!!error">
              {{error}}
          </div>
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <input placeholder="Repeat password" type="password" />
          <button type="submit">Send</button>
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
      repeatPassword: '',
      registered: false,
    };
  },
  methods: {
    onSubmit() {
      this.error = 'Could not register user';
      this.loading = true;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
