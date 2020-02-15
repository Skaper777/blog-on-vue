<template>
  <div class="login-wrapper">
    <div v-if="!isLogin" class="login">
      <input type="email" name="name" v-model="email" id="email-login" placeholder="Email" required />
      <input
        type="password"
        name="pass"
        v-model="pass"
        id="pass-login"
        placeholder="Пароль"
        required
      />
      <a href="#" @click="showModal" class="login__reg-btn">Регистрация</a>
      <button
        class="login__btn"
        :loading="loading"
        :disabled="$v.$invalid || loading"
        @click="onSubmit"
      >Войти</button>
    </div>
    <div v-else class="login-success">
      <h1>Hello!</h1>
      <button class="login-success__btn" @click="onLogout">Выйти</button>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "app-login",
  data() {
    return {
      email: "",
      pass: ""
    };
  },
  methods: {
    showModal() {
      this.$emit("showModal");      
    },

    onSubmit() {
      const user = {
        email: this.email,
        password: this.pass
      };

      this.$store
        .dispatch("loginUser", user)
        .then(() => console.log(1))
        .catch(err => console.log(err));
    },

    onLogout() {
      if (this.$route.name !== 'home') {
        this.$router.push('/')
        this.$store.dispatch('logoutUser')
      }
      
      this.$store.dispatch('logoutUser')
    }
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },

    isLogin() {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  validations: {
    email: {
      required,
      email,
      uniqueEmail(newEmail) {
        return newEmail !== "test@mail.ru";
      }
    },
    pass: {
      required,
      minLength: minLength(6)
    }
  }
};
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

  .login-success__btn 
    background: #F3DA0B
    width: 65%
    padding: 5px 0
    font-weight: 700
    transition: 0.2s

    &:hover,
    &:active,
    &:focus 
      background: white
        
      
</style>