<template> 
  <nav class="nav-menu">
    <ul class="nav-menu__list">
      <router-link class="nav-menu__item" tag="li" to="/contacts" active-class="nav-menu__item--active"><a>Контакты</a></router-link>
      <router-link class="nav-menu__item" tag="li" to="/about-me" active-class="nav-menu__item--active"><a>Обо мне</a></router-link>
    </ul>
  </nav> 
</template>

<script>
export default {
  name: 'nav-menu'
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