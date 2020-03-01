<template>
  <header class="header">
    <div class="main-container">
      <div class="header__wrapper">
        <h1><router-link to="/">My blog</router-link></h1>
        <app-nav></app-nav>
        <app-login @showModal="openModal"></app-login>
      </div>
    </div>    
  </header>
</template>

<script>
import AppLogin from '@/components/login'
import AppNav from '@/components/nav'

export default {
  name: 'app-header',
  components: {
    AppLogin,
    AppNav
  },
  methods: {
    openModal() {
      document.querySelector('.reg').style.display = 'block'
    }
  }
}
</script>

<style lang="sass">
  .header
    width: 100%   
    color: white
    padding: 30px 0
    background: #A91D11

    &__wrapper
      display: flex
      justify-content: space-between
      align-items: center
</style>