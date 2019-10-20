<template>
  <div id="app" class="page">   
    <Header></Header> 
    <index></index>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/header'
import Footer from '@/components/footer'

import Index from '@/pages/index'

export default {
  name: 'app',
  components: {  
    Header,
    Index,
    Footer
  }
}
</script>

<style lang="sass"> 
  body 
    margin: 0
    font-family: 'Open Sans', Arial, sans-serif   
    color: #2b2626

  .page 
    overflow-x: hidden
    display: grid
    grid-auto-flow: row
    width: 100%     
    height: 100vh    
    min-width: 320px    
    text-align: center     
</style>
