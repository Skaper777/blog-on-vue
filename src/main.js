import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import router from '@/routes'
// import Axios from 'axios'
import store from '@/store'

import fonts from './assets/main.scss'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Registration from '@/components/registration'

Vue.use(Vuelidate)
Vue.use(VueRouter)
// Vue.use(Axios)

Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Registration', Registration)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  modules: {
    fonts
  },
  render: h => h(App),
  router
})
