import Vue from 'vue'
import Vuex from 'vuex'
import Posts from './posts.js'
import User from './user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Posts,
    User
  }
})