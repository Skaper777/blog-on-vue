<template>
  <div id="app" class="page">   
    <Header></Header> 
    <post-container></post-container>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/header'
import PostContainer from '@/components/post-container'
import Footer from '@/components/footer'

export default {
  name: 'app',
  components: {  
    Header,
    PostContainer,
    Footer
  }
}
</script>

<style lang="sass">
  .page 
    display: flex
    flex-direction: column  
    height: 100vh
    justify-content: space-between  
    max-width: 1170px
    margin: 0 auto
    text-align: center     
</style>
