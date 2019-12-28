export default {
  state: {
    posts: [],
    articlesList: {
      travels: 'Путешествия',
      dev: 'Разработка',
      other: 'Другое'
    }
  },
  mutations: {
    addPostState(state, payload) {
      state.posts.unshift(payload)
    },
    deletePostState(state, payload) {
      state.posts.splice(payload, 1)
    }
  },
  actions: {
    asyncAddPost({commit}, payload) {
      commit('addPostState', payload)
    }
  },
  getters: {
    getPosts(state) {    
      return state.posts
    },
    getRubrics(state) {
      return state.articlesList
    },
    getPostsLength(state) {
      return state.posts.length
    }
  }
}