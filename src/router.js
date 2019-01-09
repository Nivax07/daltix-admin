import Vue from 'vue';
import Router from 'vue-router';

import Overview from './views/Overview.vue';
import UserProfile from './views/UserProfile.vue';
import Errors from './views/Errors.vue';
import ComponentsOverview from './views/ComponentsOverview.vue';
import RegisteredUsers from './views/RegisteredUsers.vue';
import DatabaseUpdates from './views/DatabaseUpdates.vue';
import AccessCount from './views/AccessCount.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
      path: '/',
      redirect: {
        name: 'overview',
      },
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview,
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: UserProfile,
    },
    {
      path: '/500',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/components-overview',
      name: 'components-overview',
      component: ComponentsOverview,
    },
    {
      path: '/access-count',
      name: 'access-count',
      component: AccessCount,
    },
    {
      path: '/registered-users',
      name: 'registered-users',
      component: RegisteredUsers,
    },
    {
      path: '/database-updates',
      name: 'database-updates',
      component: DatabaseUpdates,
    },
    {
      path: '*',
      redirect: '/errors',
    },
  ],
});
