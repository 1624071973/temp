// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iView';
import VueI18n from 'vue-i18n';
import 'iview/dist/styles/iview.css'; 
import './validator/validator';
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';
import enLocal from './18n/en-US.JSON';
import zhLocal from './18n/zh-CN.JSON';
Vue.use(iview);
Vue.use(VueI18n);
Vue.config.productionTip = false;
Vue.locale = () => {};

const messages = {
  en_ZH: Object.assign(enLocal, en),
  zh_US: Object.assign(zhLocal, zh)
};
const i18n = new VueI18n({
  locale: 'en_ZH',  // set locale
  messages  // set locale messages
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
}).$mount('#app');
