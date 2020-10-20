import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

const NotFoundView = () => import('../views/NotFoundView.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: {
      title: 'Shop - Home',
      metatags: [
        { name: 'description', content: 'The home page of our example app.' },
      ],
    },
  },
  {
    path: '*',
    name: 'NotFoundView',
    component: NotFoundView,
    meta: {
      title: 'Shop - Not found',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
