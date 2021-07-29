import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/styles/App.scss';
import '@/styles/reset.scss';
import '@/styles/layout.scss';
import '@/styles/button.scss';
import '@/styles/ui.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
