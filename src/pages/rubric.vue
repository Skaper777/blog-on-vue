<template>
  <section class="rubric">  

    <h1>{{name}}</h1>

   
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
  }
}
</script>

<style lang="sass" scoped>

</style>