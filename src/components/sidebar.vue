<template>
  <section class="sidebar">
    <router-link class="sidebar__title" to="/articles">Rubrics:</router-link>
    <ul class="sidebar__list">
      <li v-for="(value, key) in rubrics" :key="key"><router-link :to="{name: 'rubric', params: {alias: key, name: value}}">{{value}} {{postsForRubric(value)}}</router-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'sidebar',

  data() {
    return {
      rubrics: {}
    }
  },

  methods: {
    postsForRubric(rubric) {
      return '(' + this.$store.getters.getPosts.filter(item => item.rubric === rubric).length + ')'   
    }
  },

  mounted() {
    this.rubrics = this.$store.getters.getRubrics
  }
}
</script>

<style lang="sass">
  .sidebar__title 
    font-size: 18px
    font-weight: bold

  .sidebar__list 
    margin-top: 20px
</style>