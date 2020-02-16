<template>
  <section class="main-page main-container">
    <div class="container">
      <div class="container__left">

        <button @click="showForm" v-if="!visibleForm && isLogin" class="main-page__create-post">Создать пост!</button>

        <form v-if="visibleForm" class="post-form">
          <h2 class="post-form__title">Заголовок</h2>
          <button @click="hideForm" class="post-form__close">Close</button>
          <input v-model="newPost.title" type="text" class="post-form__title" required>
          <h2 class="post-form__title">Тема поста</h2>
          <select v-model="newPost.rubric" type="select" class="post-form__rubric" required>
            <option v-for="(rubric, index) in rubrics" :key="index">{{rubric}}</option>
          </select>  
          <h2 class="post-form__title">Текст поста</h2>
          <textarea v-model="newPost.text" class="post-form__text" required></textarea>
          <button @click.prevent="addPost" :disabled="loading" class="post-form__btn btn">Опубликовать</button>
        </form> 

        <div class="post-container">
          <p>Постов: {{ postsCount }}</p>
          <div v-if="posts !== null">
            <post
              :remove="deletePost"
              :author="post.name" 
              :title="post.title" 
              :time="post.time"
              :postId="post.id"
              :rubric="post.rubric" 
              :text="post.text" 
              v-for="(post, index) in posts" 
              :key="index">
            </post>
          </div>
        </div> 

      </div>

      <div class="container__right">
        <sidebar></sidebar>
      </div>
          
    </div>
  </section>        
</template>

<script>

import Post from '@/components/post'
import Sidebar from '@/components/sidebar'

export default {
  name: 'post-container', 

  data() {
    return {
      visibleForm: false,
      newPost: {
        title: '',
        text: '',
        time: '',
        rubric: ''
      }
    }
  }, 

  computed: {
    postsCount() {
      return this.$store.getters.getPostsLength // геттеры vuex
    },

    posts() {
      return this.$store.getters.getPosts
    },

    rubrics() {
      return this.$store.getters.getRubrics
    },

    isLogin() {
      return this.$store.getters.isUserLoggedIn;
    },

    loading() {
      return this.$store.getters.loading
    }
  },  

  methods: {   
    formatDate(timeData) {
      let time = timeData.toString()
      return time.slice(4, 25)
    },
  
    addPost() {
      if (this.newPost.title && this.newPost.text && this.newPost.rubric) {
        const formatTime = this.formatDate(new Date())

        const post = {
          title: this.newPost.title,
          text: this.newPost.text,
          time: formatTime,
          rubric: this.newPost.rubric  
        }       

        this.$store.dispatch('addPost', post)
          .then(() => this.hideForm())
          .catch(er => console.log(er))        
      }      
    },

    deletePost(index) {
      this.$store.commit('deletePostState', index) // mutations vuex    
    },

    hideForm() {
      this.visibleForm = false
    },

    showForm() {     
      this.visibleForm = true     
    }
  },

  components: {
    Post,
    Sidebar
  } 
}
</script>

<style lang="sass">
  .main-page
    height: 100%

    &__create-post
      background: #F3DA0B      
      padding: 10px
      font-weight: 700
      font-size: 18px
      transition: 0.2s

      &:hover,
      &:active,
      &:focus 
        background: white

  .post-form
    position: relative    
    flex-direction: column    
    margin: 20px auto
    border: 1px solid lightgrey
    border-radius: 3px
    padding: 10px
    padding-bottom: 20px    

    &__title 
      text-align: left
      font-size: 20px

    &__close  
      position: absolute
      right: 20px
      top: 20px
      background: none
      font-size: 0
      width: 30px
      height: 30px
      transition: 0.2s

      &:hover,
      &:active,
      &:focus 
        background: #F3DA0B 

      &:after,
      &:before 
        content: ""
        position: absolute        
        width: 100%
        height: 2px
        background: black       

      &:after
        transform: rotate(45deg)  
        left: 0
        top: 14px

      &:before
        transform: rotate(-45deg)  
        left: 0
        top: 14px  

    &__btn 
      width: 250px   

    select,
    input,
    textarea 
      width: 100%
      padding: 10px
      border-radius: 3px
      margin-bottom: 10px
      border: 1px solid grey
      box-sizing: border-box

    select 
      font-size: 18px  

    textarea
      resize: none
      height: 150px
      font-size: 14px

</style>