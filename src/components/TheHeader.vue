<template>
  <nav class="the-header">
    <div class="the-header__items container">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/ddd">Not found</router-link>
      <div class="the-header__actions">
        <div v-show="userLoading">Loading</div>
        <router-link
          v-show="!user && !userLoading"
          to="/login"
          tag="button"
        >
        Login
        </router-link>
        <router-link
          v-show="!user && !userLoading"
          to="/register"
          tag="button"
        >
        Register
        </router-link>
        <div v-show="user">{{user && user.name}}</div>
        <button v-show="user && !userLoading" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import * as actionTypes from '@/store/action-types';
import * as getterTypes from '@/store/getter-types';
import { mapGetters } from 'vuex';

export default {
  name: 'TheHeader',
  computed: {
    ...mapGetters({
      user: getterTypes.GET_CURRENT.USER,
      userLoading: getterTypes.GET_CURRENT.USER_LOADING,
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch(actionTypes.LOGOUT)
        .then(() => {
          this.$router.push('/login');
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
