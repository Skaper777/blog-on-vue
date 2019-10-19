import Vue from 'vue'
import App from './App.vue'
import fonts from './assets/main.scss'

Vue.config.productionTip = false

new Vue({
  modules: {
    fonts
  },
  render: h => h(App),
}).$mount('#app')
