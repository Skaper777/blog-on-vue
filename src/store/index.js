import Vue from 'vue'
import Vuex from 'vuex'
import Posts from './posts.js'
import User from './user.js'
import Common from './common.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Posts,
    User,
    Common
  }
})