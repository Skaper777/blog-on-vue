<template>
  <div id="app" class="page">   
    <Header></Header>
    <router-view></router-view> 
    <Footer></Footer>
    <Registration></Registration>      
  </div>
</template>

<script>

export default {
  name: 'app'  
}
</script>

<style lang="sass"> 
  body 
    margin: 0
    height: 100%
    font-family: 'Open Sans', Arial, sans-serif   
    color: #2b2626

  .page 
    overflow-x: hidden
    display: flex
    flex-direction: column
    justify-content: space-between   
    width: 100%    
    height: 100% 
    min-height: 100vh
    min-width: 320px    
    text-align: center     
</style>
