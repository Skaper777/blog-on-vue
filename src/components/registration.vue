<template>
  <div class="reg">
    <div class="reg__modal">
      <button class="reg__modal-close"></button>
      <form>
        <p>Введите email</p>
        <input type="email" name="name" required>
        <p>Введите имя</p>
        <input type="text" name="name" required>
        <p>Введите фамилию</p>
        <input type="text" name="surname" required>
        <p>И телефон</p>
        <input type="tel" name="tel" required>
        <button class="reg__btn btn" type="submit">Создать аккаунт</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
  .reg 
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.5)
    //display: none

    &__modal-close 
      position: absolute
      right: 20px
      top: 20px
      background: none
      font-size: 0
      width: 30px
      height: 30px
      transition: 0.2s

      &:hover,
      &:active,
      &:focus 
        background: #F3DA0B 

      &:after,
      &:before 
        content: ""
        position: absolute        
        width: 100%
        height: 2px
        background: black 

      &:after
        transform: rotate(45deg)  
        left: 0
        top: 14px

      &:before
        transform: rotate(-45deg)  
        left: 0
        top: 14px    

    &__modal
      background: white
      text-align: left
      width: 400px
      position: absolute
      top: 150px
      left: calc(50% - 216px)
      border: 1px solid lightgrey
      border-radius: 6px
      padding: 15px
      padding-top: 30px

      form 
        display: flex
        flex-direction: column

        input 
          width: 100%
          margin-bottom: 10px
          box-sizing: border-box
          padding: 10px
          border-radius: 3px
          border: none
          border-bottom: 1px solid lightgrey

        .reg__btn 
          margin: 20px 0  
</style>