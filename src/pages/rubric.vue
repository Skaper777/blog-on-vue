<template>
  <section class="rubric">  

    <h1>{{name}}</h1>

    <ul v-if="posts.length" class="rubric__posts">
      <li v-for="post in posts" :key="post.title">
        <router-link :to="{name: 'article', params: {id: post.id}}">{{post.title}}</router-link>
      </li>  
    </ul>  

    <h4 v-else>No articles for this rubric.</h4>

    <button class="rubric-back" @click="goBack">Back</button>
  </section>
</template>

<script>
export default {
  name: 'rubric',
  data() {
    return {
      name: this.$route.params['name']
    }
  },
  methods: {
    goBack() {
      this.$router.push('./')
    }
  },

  computed: {
    posts() {
      return this.$store.getters.getPosts.filter(item => item.rubric === this.name)
    },
  }
}
</script>

<style lang="sass" scoped>
  .rubric__posts
    margin-bottom: 30px

    li 
      text-decoration: underline

</style>