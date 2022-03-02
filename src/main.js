import Vue from 'vue'
import App from './App.vue'
import vueCompositionApi from '@vue/composition-api'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import {createPinia, PiniaVuePlugin} from 'pinia'
import firebase from './firebase'


Vue.use(vueCompositionApi)
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  pinia,
  firebase,
  render: h => h(App)
}).$mount('#app')
