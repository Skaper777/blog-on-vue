<template>
  <section class="main-page main-container">
    <div class="container">
      <div class="container__left">

        <div class="post-form">
          <input v-model.lazy="newPost.title" type="text" class="post-form__title">
          <textarea v-model.lazy="newPost.text" class="post-form__text"></textarea>
          <button @click="addPost" class="post-form__btn">Опубликовать</button>
        </div> 

        <div class="post-container">
          <post @remove="deletePost(index)" :title="post.title" :text="post.text" v-for="(post, index) in posts" :key="index"></post>
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

  .post-form
    display: flex
    flex-direction: column    
    margin: 0 auto
    padding: 15px

    &__btn 
      font-family: 'Open Sans', Arial, sans-serif

</style>