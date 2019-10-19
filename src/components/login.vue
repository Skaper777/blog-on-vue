<template>
    <form class="login">
      <input type="email" name="name" placeholder="Email" required>
      <input type="password" name="pass" placeholder="Пароль" required>
      <button class="login__btn" type="submit">Войти</button>
    </form>    
</template>

<script>
export default {
  name: 'app-login'
}
</script>

<style lang="sass">
  .login
    display: flex
    flex-direction: column
    align-items: flex-end

    input 
      width: 250px
      margin-bottom: 10px
      border: 1px solid #F3DA0B
      border-radius: 3px
      padding: 5px

    &__btn
      background: #F3DA0B
      width: 50%
      padding: 5px 0
      font-weight: 700
      transition: 0.2s

      &:hover,
      &:active,
      &:focus 
        background: white
      
</style>