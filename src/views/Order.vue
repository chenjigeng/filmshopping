<template lang='jade'>
.order.tl
  header.m-20
    img(v-if='info.gender === false' src='../assets/boy.png')
    img(v-if='info.gender === true' src='../assets/girl.png')
    span.ml-20 昵称:
    span.ml-10 {{ info.username }}
  main
    .card-list
      span(v-for='order in orders')
        order-card(:content='order')
      
</template>

<script>
import card from '@/components/ordercard'
export default {
  name: 'order',
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (!vm.$store.getters.getUserInfo.login) {
        vm.$message({
          type: 'error',
          message: '请先登录'
        })
        next({ path: '/home' })
        vm.$store.commit('toggleDiglog', 'LR')
      } else {
        next()
      }
    })
  },
  created () {
    let loading = this.$loading({ fullscreen: true })
    // 0 支付成功  1 约影成功 2 交易完成 3 订单取消
    this.$http.get('/api/order/allorder')
      .then(response => {
        this.orders = response.body
        loading.close()
      })
  },
  computed: {
    info () {
      return this.$store.getters.getUserInfo
    }
  },
  data () {
    return {
      orders: [],
      myTheme: 'light'
    }
  },
  components: {
    'order-card': card
  }
}
</script>

<style lang="sass" scoped>
header
  display: flex
  height: 150px
  line-height: 150px
  span
    font-weight: bold
    font-size: 20px
h1
  color: red
h2
  color: blue
.card-list
  display: flex
  flex-wrap: wrap
  justify-content: flex-start

</style>

