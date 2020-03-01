<template>
  <div class="edit-post"></div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
  .edit-post
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
</style>