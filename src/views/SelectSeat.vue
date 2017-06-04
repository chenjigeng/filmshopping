<template lang='jade'>
  .SelectSeat
    el-row
      el-col.tips(v-bind:span='6')
        .tip.m-5(v-for="item in 4" v-bind:key="item")
          img(src="../assets/star1.png")
          span 已选锁定坑
      el-col.trapezoid(v-bind:span='12')
        div
      el-col.apply-btn-container(v-bind:span='6')
        el-button.apply-btn.font-10.bold 点我申请约影
    .seats.bg-white
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
        img
          width: 30px
        span
          position: relative
          bottom: 8px
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
    width: 1000px
    height: 400px
    margin: 10px auto
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

