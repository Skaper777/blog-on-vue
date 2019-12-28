<template>
  <section class="articles">
    <h1>Статьи</h1>    
    <p>Количество статей: {{posts.length}}</p>
    <ul>
      <router-link
          v-for="(value, key) in rubrics"
          :key="value" :to="{name: 'rubric', params: {alias: key, name: value}}"
          tag="li">
        <a>{{value}}</a>
      </router-link>      
    </ul>
    
  </section>
</template>

<script>
export default {
  name: 'articles',
  data() {
    return {
      posts: [],
      rubrics: {}      
    }
  },
  mounted() {
    this.posts = this.$store.getters.getPosts
    this.rubrics = this.$store.getters.getRubrics
  },
  beforeRouteEnter (to, from, next) {
    next()
  }  
}
</script>

<style lang="sass" scoped>

</style>