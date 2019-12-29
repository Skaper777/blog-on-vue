<template>
  <section class="article main-container">
    <header class="article__header">
      <h1>{{ getArticle.title }}</h1>
    </header>
    <body class="article__body">
      <p>{{ getArticle.text }}</p>
    </body>
  </section>  
</template>

<script>
export default {
  props: ['id'],
  computed: {
    getArticle() {
      const id = this.id
      return this.$store.getters.getPostById(id)
    }
  }
}
</script>

<style lang="sass" scoped>
  .article__body
    padding: 20px
</style>