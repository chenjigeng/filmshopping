<template lang='jade'>
Menu(mode='horizontal' theme='light' active-name='1')
  router-link(to='/')
    Menu-item(name='1')
      Icon(type='ios-paper')
      默认
  router-link(to='/home')    
    Menu-item(name='2')    
      Icon(type='ios-people')
      主页
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      myTheme: 'light'
    }
  }
}
</script>

<style lang="sass" scoped>
h1
  color: red
h2
  color: blue
</style>

