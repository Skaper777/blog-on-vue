<template>
  <div ref="reg" class="reg">
    <div @click="hideModal" class="reg__background"></div>
    <div class="reg__modal">
      <button @click="hideModal" class="reg__modal-close"></button>
      <form>
        <label for="email">Введите email</label>
        <input class="reg__field" :class="{'reg__field--invalid' : $v.email.$error}" v-model="email" type="email" id="email" @blur="$v.email.$touch()" name="email">        
        <p class="reg__error" v-if="!$v.email.email">Введите корректное значение</p>
        <p class="reg__error" v-if="!$v.email.uniqueEmail">Такой email уже зарегестрирован</p>

        <label for="name">Введите имя</label>
        <input class="reg__field" :class="{'reg__field--invalid' : $v.name.$error}" v-model="name" type="text" id="name" @blur="$v.name.$touch()" name="name">                   
               
        <label for="tel">Введите телефон</label>
        <input class="reg__field" :class="{'reg__field--invalid' : $v.tel.$error}" v-model="tel" type="tel" id="tel" @blur="$v.tel.$touch()" name="tel">
        <p class="reg__error" v-if="!$v.tel.numeric">Нужно вводить только числа</p> 
        
        <label for="pass">Введите пароль</label>
        <input class="reg__field" :class="{'reg__field--invalid' : $v.pass.$error}" v-model="pass" type="password" id="pass" @blur="$v.pass.$touch()" name="pass">
        <p class="reg__error" v-if="!$v.pass.minLength">Должно быть не менее 6 символов</p>

        <label for="confirm">Подтвердите пароль</label>
        <input class="reg__field" :class="{'reg__field--invalid' : $v.confirm.$error}" v-model="confirm" type="password" id="confirm" @blur="$v.confirm.$touch()" name="confirm">
        <p class="reg__error" v-if="!$v.confirm.sameAs">Пароли не совпадают</p>

        <button class="reg__btn btn" :disabled="$v.$invalid" type="submit">Зарегестрироваться</button>        
       
      </form>
    </div>     

  </div>
</template>

<script>
import { required, email, numeric, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'registration',
  data() {
    return {
      email: '',
      name: '',     
      tel: '',
      pass: '',
      confirm: ''
    }    
  },
  methods: {
    hideModal() {
      this.$refs.reg.style.display = 'none'
    }
  }, 
  validations: {
    email: {
      required,
      email,
      uniqueEmail(newEmail) {       
        return newEmail !== 'test@mail.ru'
      }        
    },
    name: {
      required     
    },
    tel: {
      required,
      numeric
    },   
    pass: {
      required,
      minLength: minLength(6)
    },
    confirm: {
      required,
      sameAs: sameAs('pass')
    }
  }
}
</script>

<style lang="sass" scoped>  

  .reg 
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%  
    display: none

    &__background       
      width: 100%
      height: 100%
      background: rgba(0, 0, 0, 0.5)

    &__modal-close 
      position: absolute
      right: 15px
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
      top: 10%
      left: calc(50% - 216px)
      border: 1px solid lightgrey
      border-radius: 6px
      padding: 15px
      padding-top: 30px

      form 
        display: flex
        flex-direction: column

        label 
          margin-top: 20px
          display: block

        .reg__field 
          width: 100%         
          font-size: 16px
          box-sizing: border-box
          padding: 10px
          border-radius: 3px
          border: none
          border-bottom: 1px solid lightgrey

          &--invalid 
            border-bottom: 1px solid red

        .reg__btn 
          margin: 40px 0  

          &:disabled 
            background: white

    &__error 
      font-size: 12px
      color: red
      margin-top: 5px           
</style>