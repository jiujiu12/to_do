import Vue from 'vue'
import Vuetify from 'Vuetify'
import App from './App'
import router from './router'

// Vue.use(ElementUI);
Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  Vuetify,
  components: { App },
  template: '<App/>'
})
