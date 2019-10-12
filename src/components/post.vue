<template>
  <div class="post">
    <h2 class="post__ttile">{{ title }}</h2>
    <p class="post__text">{{ text }}</p>
    <button @click="remove">Удалить</button>
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
    title: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<style scoped lang="sass">
  .post    
    max-width: 700px
    margin: 0 auto
    margin-top: 20px
    border: 1px solid grey
</style>