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
          img(src="../assets/seat-yue.png")
          span 可选约影坑
        .tip.m-5
          img(src="../assets/seat-choose.png")
          span 选中这坑啦
      el-col.trapezoid(v-bind:span='12')
        div
      el-col.apply-btn-container(v-bind:span='6')
        el-button.apply-btn.font-10.bold(@click='Y') 点我申请约影
    .seats.bg-white.p-30(v-if='tickets')
      .left
        .img(v-for='item in tickets.filter(item => { return item.posY <= 4 })' v-bind:key='item' @click='clickTicket(item)' v-bind:class="item._status !== 1 ? 'pointer' : '' ")
          img(src="../assets/seat-lock.png" v-if='item._status === 1')
          img(src="../assets/seat-blank.png" v-if='item._status === 0')
          img(src="../assets/seat-yue.png" v-if='item._status === 2')
          img(src="../assets/seat-choose.png" v-if='item._status === 3')
      .middle
        .img(v-for='item in tickets.filter(item => { return item.posY > 4 && item.posY <= 15})' v-bind:key='item' @click='clickTicket(item)' v-bind:class="item._status !== 1 ? 'pointer' : '' ")
          img(src="../assets/seat-lock.png" v-if='item._status === 1')
          img(src="../assets/seat-blank.png" v-if='item._status === 0')
          img(src="../assets/seat-yue.png" v-if='item._status === 2')
          img(src="../assets/seat-choose.png" v-if='item._status === 3')
      .right
        .img(v-for='item in tickets.filter(item => { return item.posY > 15 })' v-bind:key='item' @click='clickTicket(item)' v-bind:class="item._status !== 1 ? 'pointer' : '' ")
          img(src="../assets/seat-lock.png" v-if='item._status === 1')
          img(src="../assets/seat-blank.png" v-if='item._status === 0')
          img(src="../assets/seat-yue.png" v-if='item._status === 2')
          img(src="../assets/seat-choose.png" v-if='item._status === 3')

    p.leave-msg(v-bind:class="l_msg ? 'show' : 'hide' ") {{'这是约影者的留言：' + l_msg}}
    el-button.buy-btn.font-12.bold(@click='clkBuy') BUY

</template>

<script>
  export default {
    name: 'SelectSeat',
    created () {
      this.fetchData()
    },
    data () {
      return {
        myTheme: 'light',
        l_msg: null,
        loading: null,
        tickets: null,
        bindSeatId: null,
        toBuyId: []
      }
    },
    methods: {
      fetchData: function () {
        this.loading = true
        this.tickets = null
        this.$http.get('/api/schedule/1')
        .then((resp) => {
          resp.data.tickets.forEach((item) => {
            // todo
            // item.status = 1
            item._status = item.status
          })
          // todo
          // resp.data.tickets[0].message = 'adasd'
          // resp.data.tickets[0]._status = resp.data.tickets[0].status = 2
          this.loading = false
          this.tickets = resp.data.tickets
        })
      },
      clickTicket: function (item) {
        // 1:锁定 0:可选 2:可约 3:选中
        if (item._status === 0) {
          item._status = 3
          if (this.yueinfo) {
            this.autoSelectSeat(item)
            this.toBuyId.forEach(id => {
              this.tickets.find(t => {
                return t.id === id
              })._status = 0
            })
          } else {
            this.toBuyId.push(item.id)
          }
          return
        }
        if (item._status === 2) {
          this.l_msg = item.message
          item._status = 3
          return
        }
        if (item._status === 3) {
          if (this.yueinfo) {
            this.bindSeatId.forEach((i) => {
              this.tickets[i]._status = 0
            })
          } else {
            item._status = item.status
            this.l_msg = ''
          }
          return
        }
      },
      Y: function () {
        this.$store.commit('toggleDiglog', 'Y')
      },
      updateBindSeatId: function (newV, oldV) {
        if (oldV) {
          oldV.forEach((id) => {
            this.tickets.find(t => {
              return t.id === id
            })._status = 0
          })
        }
        newV.forEach((id) => {
          this.tickets.find(t => {
            return t.id === id
          })._status = 3
        })
      },
      autoSelectSeat: function (item, index) {
        var bindItem = null
        if (item.posY === 4 || item.posY === 15 || item.posY === 19) {
          bindItem = this.tickets.find(t => {
            return t.posX === item.posX && t.posY === item.posY - 1
          })
        } else {
          bindItem = this.tickets.find(t => {
            return t.posX === item.posX && t.posY === item.posY + 1
          })
        }
        this.bindSeatId = [item.id, bindItem.id]
      },
      clkBuy: function () {
        var promises = []
        if (this.yueinfo && this.bindSeatId) {
          promises = this.bindSeatId.map(i => {
            return this.buyAPI(i)
          })
        } else if (this.toBuyId.length > 0) {
          promises = this.toBuyId.map(i => {
            return this.buyAPI(i)
          })
        }
        Promise.all(promises).then(posts => {
          this.$alert('买票成功')
        }).catch(reason => {
          console.log('err')
        })
      },
      buyAPI: function (id) {
        return new Promise(resolve => {
          this.$http.get('/api/order/buy/' + id).then(resp => {
            console.log('b api', resp)
            resolve(resp)
          })
        })
      }
    },
    computed: {
      yueinfo () {
        return this.$store.getters.getYInfo
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData',
      bindSeatId: 'updateBindSeatId'
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
    .img
      display: inline-block
      width: 34px
      margin: 2.5px 0px
      img
        width: 100%
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

.pointer
  cursor: pointer
.show
  visibility: visible
.hide
  visibility: hidden
</style>

