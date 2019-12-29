export default {
  state: {
    posts: [
      {
        title: 'Первый пост',
        text: 'Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...',
        rubric: 'Другое',
        id: '1'
      },
      {
        title: 'Второй пост',
        text: 'Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...',
        rubric: 'Разработка',
        id: '2'
        
      },
      {
        title: 'Третий пост',
        text: 'Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...Рыба-текст, не важно...',
        rubric: 'Путешествия',
        id: '3'
      }
    ],

    rubrics: {
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
      payload.id = Math.random() * 100

      commit('addPostState', payload)
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
      return state.posts.length
    },
    getPostById(state) {
      return postId => {
        return state.posts.find(post => post.id === postId)
      }
    }
  }
}