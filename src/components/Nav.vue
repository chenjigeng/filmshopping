<template lang='jade'>
.nav
  el-menu(theme='dark' class="el-menu-demo" mode="horizontal" v-bind:default-active="activeItem" @select="handleSelect" router)
    el-menu-item(index="/home") 主页
    el-menu-item(index="/123") 电影
    el-menu-item(index='/threat') 影院
    el-menu-item(index='/login').fr 登录
    el-menu-item(index='/order').fr 订单
    el-menu-item(index='/order' ref='logo').logo
      img(src='../assets/yue1.png')
  
</template>

<script>
export default {
  name: 'home',
  mounted () {
    // if (this.$route.matched.length > 0) {
    //   if (this.$route.matched[0].path === '/home') {
    //     this.$refs.logo.$el.style.display = 'none'
    //   } else {
    //     this.$refs.logo.$el.style.display = 'block'
    //   }
    //   this.activeItem = this.$route.matched[0].path
    // }
  },
  data () {
    return {
      myTheme: 'light',
      activeItem: '/home'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if (key === '/home') {
        console.log('123123')
        this.$refs.logo.$el.style.display = 'none'
      } else {
        this.$refs.logo.$el.style.display = 'block'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
h1
  color: red
h2
  color: blue
.logo
  position: absolute;
  left: 50%;
  float: none;
  margin-left: -30px;
  img
    height: 60px

</style>

