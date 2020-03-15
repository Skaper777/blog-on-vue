import * as fb from 'firebase'

class Post {
  constructor(title, text, time, rubric, userId, id = null) {
    this.title = title,
    this.text = text,    
    this.time = time,
    this.rubric = rubric,    
    this.userId = userId
    this.id = id
  }
}

export default {
  state: {
    posts: [],

    rubrics: {
      travels: 'Travels',
      dev: 'Development',
      other: 'Other'
    }
  },

  mutations: {
    addPostState(state, payload) {
      state.posts.unshift(payload)
    },

    loadPosts(state, payload) {
      state.posts = payload
    },

    deletePostState(state, payload) {       
      state.posts.splice(payload, 1)
    }
  },

  actions: {
    async fetchPosts({commit}) {
      commit('clearError')
      commit('setLoading', true)

      const resultPosts = []

      try {
        const fbVals = await fb.database().ref('posts').once('value')
        const posts = fbVals.val()
        
        Object.keys(posts).forEach(key => {
          const post = posts[key]

          resultPosts.unshift(
            new Post(post.title, post.text, post.time, post.rubric, post.userId, key)
          )
        })
        
        commit('loadPosts', resultPosts)
        commit('setLoading', false)
      } catch(err) {
        commit('setError', err.message)
        commit('setLoading', false)
        throw err
      }
    },

    async addPost({commit, getters}, payload) {      
      commit('clearError')
      commit('setLoading', true)

      try {
        const newPost = new Post(payload.title, payload.text, payload.time, payload.rubric, getters.getUser.id)
        const post = await fb.database().ref('posts').push(newPost)
        
        commit('setLoading', false)
        commit('addPostState', {...newPost, id: post.key})
      } catch(err) {
        commit('setError', err.message)
        commit('setLoading', false)
        throw err
      }
    },

    async deletePost({commit}, payload) {     
      await fb.database().ref('posts').child(payload.id).remove()
      commit('deletePostState', payload.i)
    }
  },

  getters: {
    getPosts(state) {         
      return state.posts
    },

    getRubrics(state) {
      return state.rubrics
    },

    getPostsLength(state) {
      if (state.posts !== null) {
        return state.posts.length
      } 

      return 0      
    },

    getPostById(state) {
      return postId => {
        return state.posts.find(post => post.id === postId)
      }
    }
  }
}