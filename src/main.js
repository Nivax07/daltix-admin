/* eslint-disable */
import Vue from 'vue';
import DaltixVue from 'shards-vue';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/daltix-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';

DaltixVue.install(Vue);

Vue.component('default-layout', Default);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
