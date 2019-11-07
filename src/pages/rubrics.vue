<template>
  <section class="rubrics">
    <h1>Рубрики</h1>    

    <ul>
      <router-link v-for="(value, name) in rubricsList" :key="value" :to="'/rubrics/' + name" tag="li"><a>{{value}}</a></router-link>      
    </ul>
    
  </section>
</template>

<script>
export default {
  name: 'rubrics',
  data() {
    return {
      rubricsList: {
        travels: 'Путешествия',
        dev: 'Разработка',
        other: 'Другое'
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  }  
}
</script>

<style lang="sass" scoped>

</style>