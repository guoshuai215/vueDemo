// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import creatStore from './store/store'
import QS from 'qs'
import Vuex from 'vuex';
Vue.use(Vuex)
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;
const store=creatStore();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
