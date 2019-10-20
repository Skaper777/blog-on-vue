<template>
  <div class="post">
    <h2 class="post__ttile">{{ title }}</h2>
    <p class="post__text">{{ text }}</p>
    <button @click="remove()">Удалить</button>
  </div>     
</template>

<script>
export default {
  name: 'post', 

  props: {
    title: {
      type: String
    },
    text: {
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
    width: 100%
    margin: 0 auto   
    margin-top: 20px
    border: 1px solid grey
</style>