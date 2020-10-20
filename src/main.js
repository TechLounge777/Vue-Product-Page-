import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// /home -> podstrona

router.beforeEach((to, from, next) => {
  const matchedRoutes = to.matched.slice().reverse();
  const nearestWithTitle = matchedRoutes.find((r) => r.meta && r.meta.title);
  const nearestWithMetatags = matchedRoutes.find((r) => r.meta && r.meta.metatags);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  }

  [...document.querySelectorAll('[data-metatag]')].map((el) => el.parentNode.removeChild(el));

  if (!nearestWithMetatags) {
    return next();
  }

  nearestWithMetatags.meta.metatags.forEach((tagDef) => {
    const tag = document.createElement('meta');

    Object.entries(tagDef).forEach(([tagName, tagContent]) => {
      tag.setAttribute(tagName, tagContent);
    });

    tag.setAttribute('data-metatag', '');

    document.head.appendChild(tag);
  });

  return next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
