import Vue from 'vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import { csrf, auth } from './bootstrap';

Vue.prototype.$csrf = csrf;
Vue.config.productionTip = false
Vue.component('snackbar', require('@/components/Snackbar').default)

new Vue({
  store,
  router,
  vuetify,
  created() {
    this.$store.commit('SET_AUTH', auth);
  }
}).$mount('#app')
