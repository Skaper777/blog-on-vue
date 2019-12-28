<template>
  <div class="post">
    <header class="post__header">
      <p class="post__header-author">Автор: <span>Admin</span></p>
      <p class="post__header-date">{{ formatDate }}</p>
    </header>
    <h2 class="post__title">{{ title }}</h2>
    <p class="post__text">{{ text }}</p>
    <footer class="post__footer">
      <button @click="remove">Удалить</button>
      <span class="post__footer-rubric">Тема: {{ rubric }}</span>
    </footer>    
  </div>     
</template>

<script>
export default {
  name: 'post',

  data() {
    return {
      time: new Date()
    }
  },

  computed: {
    formatDate() {
      let time = this.time.toString()
      return time.slice(4, 25)
    }
  },

  props: {
    author: {
      type: String
    },
    title: {
      type: String
    },
    text: {
      type: String
    },
    rubric: {
      type: String
    },
    remove: {
      type: Function
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

    &__footer 
      display: flex 
      justify-content: space-between
      align-items: center

      button 
        background: #A91D11
        padding: 6px
        color: white
        font-weight: 700      
        transition: 0.2s

        &:hover 
          color: black
          background: white

      span 
        font-size: 14px  
</style>