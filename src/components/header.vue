<template>
  <header class="header">
    <div class="main-container">
      <div class="header__wrapper">
        <h1><a href="#">Мой блог</a></h1>
        <app-login></app-login>
      </div>
    </div>    
  </header>
</template>

<script>
import AppLogin from '@/components/login'

export default {
  name: 'app-header',
  components: {
    AppLogin
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