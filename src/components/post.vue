<template>
  <div class="post">
    <header class="post__header">
      <p class="post__header-author">Author: <span>Admin</span></p>
      <p class="post__header-date">{{ time }}</p>
    </header>
    <h2 class="post__title"><router-link :to="{name: 'article', params: {id: postId}}">{{ title }}</router-link></h2>
    <div class="post__body">
      <p class="post__text">{{ text }}</p>
      <router-link class="post__read-all" :to="{name: 'article', params: {id: postId}}">Read more</router-link>
    </div>
    <footer class="post__footer">
      <div class="post__footer-actions">
        <button v-if="login" class="post__footer-actions-delete" @click="remove()">Delete</button>        
      </div>      
      <span class="post__footer-rubric">Theme: {{ rubric }}</span>
    </footer>    
  </div>     
</template>

<script>
export default {
  name: 'post',  

  methods: {
    remove() {
      this.$emit('remove')
    }
  },

  props: {
    author: {
      type: String
    },
    title: {
      type: String
    },
    time: {
      type: String
    },
    text: {
      type: String
    },
    rubric: {
      type: String
    },    
    edit: {
      type: Function
    },
    postId: {
      type: String || Number
    },
    login: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang="sass">
  .post    
    box-sizing: border-box
    text-align: left
    width: 100%
    margin: 0 auto   
    margin-top: 20px
    border: 1px solid lightgrey
    border-radius: 3px
    padding: 10px

    &__header
      display: flex
      justify-content: space-between
      align-items: center
      font-size: 14px

      span 
        font-weight: 700

    &__title
      margin-top: 0  
      text-decoration: underline

    &__text 
      height: 66px
      overflow: hidden    

    &__read-all   
      display: block
      text-align: center
      font-weight: 700
      transition: 0.2s

      &:hover 
        text-decoration: underline

    &__footer 
      display: flex 
      justify-content: space-between
      align-items: center

      &-actions-delete
        background: #A91D11  
        color: white

      &-actions-edit
        background: #F3DA0B  
        color: black

      button         
        margin-right: 10px
        padding: 6px        
        font-weight: 700      
        transition: 0.2s

        &:hover 
          color: black
          background: white        

      span 
        font-size: 14px  
</style>