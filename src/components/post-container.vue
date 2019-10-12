<template>
  <section>

    <div class="post-form">
      <input v-model.lazy="newPost.title" type="text" class="post-form__title">
      <textarea v-model.lazy="newPost.text" class="post-form__text"></textarea>
      <button @click="addPost" class="post-form__btn">Опубликовать</button>
    </div> 

    <div class="post-container">
      <post @remove="deletePost(index)" :title="post.title" :text="post.text" v-for="(post, index) in posts" :key="index"></post>
    </div>     

  </section>        
</template>

<script>

import Post from '@/components/post'

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
      this.posts.push({
        title: this.newPost.title,
        text: this.newPost.text
      })
    },
    deletePost(index) {
      this.posts.splice(index, 1)     
    }
  },

  components: {
    Post
  } 
}
</script>

<style lang="sass">
  .post-form
    display: flex
    flex-direction: column
    max-width: 700px
    margin: 0 auto
</style>