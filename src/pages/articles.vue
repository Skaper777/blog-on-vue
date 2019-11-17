<template>
  <section class="articles">
    <h1>Статьи</h1>    
    <p>Количество статей: {{posts.length}}</p>
    <ul>
      <router-link v-for="(value, name) in articlesList" :key="value" :to="'/articles/' + name" tag="li"><a>{{value}}</a></router-link>      
    </ul>
    
  </section>
</template>

<script>
export default {
  name: 'articles',
  data() {
    return {
      posts: [],
      articlesList: {
        travels: 'Путешествия',
        dev: 'Разработка',
        other: 'Другое'
      }
    }
  },
  mounted() {
    this.posts = this.$store.getters.getPosts
  },
  beforeRouteEnter (to, from, next) {
    next()
  }  
}
</script>

<style lang="sass" scoped>

</style>