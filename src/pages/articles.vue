<template>
  <section class="articles">
    <h1>Articles</h1>    
    <p>Count: {{posts.length}}</p>
    <ul>
      <router-link
          v-for="(value, key) in rubrics"
          :key="value" :to="{name: 'rubric', params: {alias: key, name: value}}"
          tag="li">
        <a>{{value}} {{postsForRubric(value)}}</a>
      </router-link>      
    </ul>    
  </section>
</template>

<script>
export default {
  name: 'articles',

  methods: {
    postsForRubric(rubric) {
      return '(' + this.$store.getters.getPosts.filter(item => item.rubric === rubric).length + ')'   
    }
  },
  
  computed: {
    posts() {
      return this.$store.getters.getPosts
    },
    rubrics() {
      return this.$store.getters.getRubrics
    }
  },
 
  beforeRouteEnter (to, from, next) {
    next()
  }  
}
</script>

<style lang="sass" scoped>

</style>