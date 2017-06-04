<template lang='jade'>
.order.tl
  header.m-20
    img(src='../assets/boy.png')
    span.ml-20 昵称:
    span.ml-10 小六六
  main
    .card-list
      span(v-for='n in 10')
        order-card
      
</template>

<script>
import card from '@/components/ordercard'
export default {
  name: 'order',
  data () {
    return {
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

