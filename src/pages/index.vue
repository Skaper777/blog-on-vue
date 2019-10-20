<template>
  <section class="main-page main-container">
    <div class="container">
      <div class="container__left">

        <button class="main-page__create-post">Создать пост!</button>

        <div class="post-form">
          <h2 class="post-form__title">Заголовок</h2>
          <input v-model.lazy="newPost.title" type="text" class="post-form__title">
          <h2 class="post-form__title">Текст поста</h2>
          <textarea v-model.lazy="newPost.text" class="post-form__text"></textarea>
          <button @click="addPost" class="post-form__btn">Опубликовать</button>
        </div> 

        <div class="post-container">
          <p>Постов: {{ posts.length }}</p>
          <post :remove="deletePost" :title="post.title" :text="post.text" v-for="(post, index) in posts" :key="index"></post>
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
      newPost: {
        title: '',
        text: ''
      },
      posts: []
    }
  },

  methods: {
    addPost() {
      if (this.newPost.title && this.newPost.text) {
        this.posts.push({
          title: this.newPost.title,
          text: this.newPost.text
        })
      }      
    },
    deletePost(index) {
      this.posts.splice(index, 1)     
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
    display: flex
    flex-direction: column    
    margin: 20px auto
    border: 1px solid lightgrey
    border-radius: 3px
    padding: 10px
    padding-bottom: 20px

    &__title 
      text-align: left
      font-size: 20px

    input,
    textarea 
      padding: 10px
      border-radius: 3px
      margin-bottom: 10px
      border: 1px solid grey

    textarea
      resize: none
      height: 150px
         

    &__btn 
      font-family: 'Open Sans', Arial, sans-serif

</style>