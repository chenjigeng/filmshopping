<template lang='jade'>
.nav
  el-menu(theme='dark' class="el-menu-demo" mode="horizontal" v-bind:default-active="activeItem" @select="handleSelect" router)
    el-menu-item(index="/home") 主页
    el-menu-item(index="/123") 电影
    el-menu-item(index='/theater-detail/1') 影院
    el-menu-item(index='' @click='logout' v-if='userinfo.login').fr 退出
    el-menu-item(index='' v-if='userinfo.login').fr {{ userinfo.phone }}
    el-menu-item(@click='login' index='' v-if='!userinfo.login').fr 登录
    el-menu-item(index='/order' v-if='userinfo.login').fr 订单
    el-menu-item(index='' ref='logo').logo
      img(src='../assets/yue1.png')
  
</template>

<script>
export default {
  name: 'home',
  computed: {
    userinfo () {
      return this.$store.getters.getUserInfo
    }
  },
  mounted () {
    if (this.$route.matched.length > 0) {
      if (this.$route.matched[0].path === '/home') {
        this.$refs.logo.$el.style.display = 'none'
      } else {
        this.$refs.logo.$el.style.display = 'block'
      }
      this.activeItem = this.$route.matched[0].path
    }
  },
  data () {
    return {
      myTheme: 'light',
      activeItem: '/home'
    }
  },
  beforeRouteEnter (to, from, next) {
    setTimeout(function () {
      console.log('hhhh')
      next()
    }, 3000)
  },
  methods: {
    logout () {
      this.$http.get('/api/user/logout')
        .then(response => {
          if (response.ok) {
            this.$store.commit('changeUserInfo', {login: false})
          } else {
            this.$message({
              type: 'error',
              message: '退出失败'
            })
          }
        }, response => {
          this.$message({
            type: 'error',
            message: '退出失败'
          })
        })
    },
    login () {
      this.$store.commit('toggleDiglog', 'LR')
    },
    handleSelect (key, keyPath) {
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

