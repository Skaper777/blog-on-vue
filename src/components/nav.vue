<template> 
  <nav class="nav-menu">
    <ul class="nav-menu__list">
      <router-link class="nav-menu__item" v-for="link in links" :key="link" tag="li" :to="link.url" active-class="nav-menu__item--active"><a>{{link.name}}</a></router-link>      
    </ul>
  </nav> 
</template>

<script>
export default {
  name: 'nav-menu',
  data() {
    return {
      links: [
        {
          name: 'Контакты',
          url: '/contacts'
        },
        {
          name: 'Статьи',
          url: '/articles'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .nav-menu__list
    display: flex
    justify-content: space-between
    min-width: 200px    
    font-size: 18px  
    
    .nav-menu__item 
      transition: 0.2s
      text-decoration: underline
      cursor: pointer

      &--active 
        color: #F3DA0B
        text-decoration: none

      &:hover 
        color: #F3DA0B
</style>