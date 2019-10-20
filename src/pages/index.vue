<template>
  <section class="main-page main-container">
    <div class="container">
      <div class="container__left">

        <button class="main-page__create-post">Создать пост!</button>

        <div class="post-form">
          <h2 class="post-form__title">Заголовок</h2>
          <button class="post-form__close">Close</button>
          <input v-model="newPost.title" type="text" class="post-form__title">
          <h2 class="post-form__title">Текст поста</h2>
          <textarea v-model="newPost.text" class="post-form__text"></textarea>
          <button @click="addPost" class="post-form__btn btn">Опубликовать</button>
        </div> 

        <div class="post-container">
          <p>Постов: {{ posts.length }}</p>
          <post :remove="deletePost" :author="post.name" :title="post.title" :text="post.text" v-for="(post, index) in posts" :key="index"></post>
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
      author: {
        name: 'Sergey'
      },
      posts: []
    }
  }, 
  methods: {
    addPost() {
      if (this.newPost.title && this.newPost.text) {
        this.posts.unshift({
          title: this.newPost.title,
          text: this.newPost.text,   
          name: this.author.name
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
    position: relative
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

    input,
    textarea 
      padding: 10px
      border-radius: 3px
      margin-bottom: 10px
      border: 1px solid grey

    textarea
      resize: none
      height: 150px
      font-size: 14px

</style>