import Vue from 'vue'
import App from './App.vue'
import fonts from './assets/main.scss'

import Header from '@/components/header'
import Footer from '@/components/footer'

Vue.component('Header', Header)
Vue.component('Footer', Footer)

Vue.config.productionTip = false

new Vue({
  modules: {
    fonts
  },
  render: h => h(App),
}).$mount('#app')
