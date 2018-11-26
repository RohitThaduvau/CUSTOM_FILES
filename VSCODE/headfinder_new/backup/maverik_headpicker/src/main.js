// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import { sync } from 'vuex-router-sync';
import Promise from 'promise-polyfill';
import App from './App';
import router from './router';
import store from './store';

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

sync(store, router);

Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  if (!store.state.answers.length && to.path !== '/') {
    next({ path: '/' });
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});

Vue.use(VueAnalytics, {
  // UA-83199489-2
  id: 'UA-83199489-2',
  checkDuplicatedScript: true,
  router,
  autoTracking: {
    pageviewTemplate(route) {
      const pathName = window.location.pathname.slice(0, window.location.pathname.length - 1);
      return {
        page: pathName + route.path,
        title: document.title,
        location: window.location.href,
      };
    },
  },
});
