<template>
  <section class="rubric">  

    <h1>{{id}}</h1>

   
    <button class="rubric-back" @click="goBack">Back</button>

  </section>
</template>

<script>
export default {
  name: 'rubric',
  data() {
    return {
      id: this.$route.params['id']
    }
  },
  methods: {
    goBack() {
      this.$router.push('./')
    }
  }
}
</script>

<style lang="sass" scoped>

</style>