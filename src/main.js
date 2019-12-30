import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import router from '@/routes'
// import Axios from 'axios'
import store from '@/store'
import * as fb from 'firebase'
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
  router,
  modules: {
    fonts
  },
  
  render: h => h(App),
  
  created() {    
    fb.initializeApp({
      apiKey: "AIzaSyCa2lA26dcG7r_pl8OzdZTXzvV51UqSFdw",
      authDomain: "blog-on-vue.firebaseapp.com",
      databaseURL: "https://blog-on-vue.firebaseio.com",
      projectId: "blog-on-vue",
      storageBucket: "blog-on-vue.appspot.com",
      messagingSenderId: "297921636407",
      appId: "1:297921636407:web:5a6168a0d9dd8d86bf37b2"
    })
  }
})
