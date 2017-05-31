<template lang='jade'>
el-menu(theme='dark' class="el-menu-demo" mode="horizontal" default-active="2")
  el-menu-item(index="1") 
    router-link(to='/home') 主页
  el-menu-item(index="2")
    router-link(to='/123') 订单
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
.el-menu-item
  padding: 0
  a
    padding: 20px
</style>

