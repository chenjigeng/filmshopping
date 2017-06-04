<template lang='jade'>
  .SelectSeat
    el-row
      el-col.tips(v-bind:span='6')
        .tip.m-5
          img(src="../assets/seat-lock.png")
          span 已选锁定坑
        .tip.m-5
          img(src="../assets/seat-blank.png")
          span 可选空白坑
        .tip.m-5
          img(src="../assets/seat-choose.png")
          span 已选约影坑
        .tip.m-5
          img(src="../assets/seat-choose.png")
          span 选中这坑啦
      el-col.trapezoid(v-bind:span='12')
        div
      el-col.apply-btn-container(v-bind:span='6')
        el-button.apply-btn.font-10.bold 点我申请约影
    .seats.bg-white.p-30
      .left
        img(src="../assets/seat-blank.png" v-for='item in 24' v-bind:key='item')
      .middle
        img(src="../assets/seat-blank.png" v-for='item in 66' v-bind:key='item')
      .right
        img(src="../assets/seat-blank.png" v-for='item in 24' v-bind:key='item')

    p.leave-msg(v-bind:class="l_msg_active ? 'show' : 'hide' ") 留言阿斯达敖德萨所多阿斯达阿斯达按时啊啊
    el-button.buy-btn.font-12.bold BUY

</template>

<script>
  export default {
    name: 'SelectSeat',
    data () {
      return {
        myTheme: 'light',
        l_msg_active: true
      }
    }
  }
</script>

<style lang="sass" scoped>
$bg-color: #fba214

.SelectSeat
  min-width: 1000px
  min-height: 500px
  .el-row
    .tips
      .tip
        color: white
        font-weight: bold
        img
          width: 30px
        span
          position: relative
          bottom: 10px
          left: 5px
    .trapezoid
      div
        height: 0;
        border-bottom: 100px solid #232323;
        border-left: 250px solid transparent;
        border-right: 250px solid transparent;
    .apply-btn-container
      position: relative
      top: 20px
      .apply-btn
        background-color: black
        color: $bg-color
        border: 0
  .seats
    display: flex
    justify-content: space-around
    width: 1000px
    margin: 10px auto
    img
      width: 34px
      margin: 2.5px 0px
    .left
      width: 140px
      height: 100%
    .middle
      width: 400px
      height: 100%
    .right
      width: 140px
      height: 100%

  .buy-btn
    background-color: black
    color: $bg-color
    border: 0
  .leave-msg

.show
  visibility: visible
.hide
  visibility: hidden
</style>

