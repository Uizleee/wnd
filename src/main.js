import Vue from 'vue';
import { BootstrapVue, IconsPlugin, CardPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueSmoothScroll from 'vue2-smooth-scroll';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(CardPlugin);
Vue.use(VueSmoothScroll, {
  duration: 1000,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
