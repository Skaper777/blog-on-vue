<template>
    <form class="login">
      <input type="email" name="name" placeholder="Email" required>
      <input type="password" name="pass" placeholder="Пароль" required>
      <a href="#" @click="showModal" class="login__reg-btn">Регистрация</a>
      <button class="login__btn" type="submit">Войти</button>
    </form>    
</template>

<script>
export default {
  name: 'app-login',
  methods: {
    showModal() {
      this.$emit('showModal')
    }
  }
}
</script>

<style lang="sass">
  .login
    display: flex    
    align-items: center
    justify-content: space-between
    flex-wrap: wrap
    width: 250px

    input 
      width: 100%
      margin-bottom: 10px
      border: 1px solid #F3DA0B
      border-radius: 3px
      padding: 5px

    &__reg-btn 
      font-size: 14px  
      text-decoration: underline
      transition: 0.2s

      &:hover 
        color: #F3DA0B

    &__btn
      background: #F3DA0B
      width: 45%
      padding: 5px 0
      font-weight: 700
      transition: 0.2s

      &:hover,
      &:active,
      &:focus 
        background: white
      
</style>