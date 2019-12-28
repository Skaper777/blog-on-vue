<template>
  <section class="article">
    <header class="article__header">
      <h1>{{ title }}</h1>
    </header>
    <body class="article__body">
      <p>{{ text }}</p>
    </body>
  </section>  
</template>

<script>
export default {
  name: 'article',

  data() {
    return {
      title: 'Заголовок',
      text: 'Текст поста'
    }
  } 
}
</script>

<style lang="sass" scoped>

</style>