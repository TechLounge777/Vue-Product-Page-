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
          <input placeholder="Email" v-model="email" />
          <input placeholder="Password" type="password" v-model="password"/>
          <input placeholder="Repeat password" type="password" v-model="repeatPassword" />
          <button type="submit" :disabled="disabled">Send</button>
      </form>
  </div>
</div>
</template>

<script>
import AppLoader from '@/components/AppLoader.vue';
import { postUser } from '@/utils/api';

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
  computed: {
    disabled() {
      return this.loading || !this.email.length;
    },
  },
  methods: {
    onSubmit() {
      if (this.password !== this.repeatPassword) {
        this.error = 'Passwords are not the same';
      } else if (this.email.length < 6) {
        this.error = 'Email must have at least 6 chracters';
      } else {
        this.loading = true;
        this.error = '';
        postUser({ email: this.email, password: this.password })
          .then(() => {
            this.registered = true;
          }).catch(() => {
            this.error = 'Could not register user';
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
