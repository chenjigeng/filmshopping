<template lang='jade'>
el-menu(theme='dark' class="el-menu-demo" mode="horizontal" v-bind:default-active="activeItem" @select="handleSelect" router)
  el-menu-item(index="/home") 主页
  el-menu-item(index="/123") 订单
</template>

<script>
export default {
  name: 'home',
  mounted () {
    if (this.$route.matched.length > 0) {
      this.activeItem = this.$route.matched[0].path
    }
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

