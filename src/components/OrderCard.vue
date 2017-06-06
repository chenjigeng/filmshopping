<template lang='jade'>
.order-card.tc.bg-white.mb-20
  p.status {{ order.status }}
  p.movie-name.large.mt-15 {{ order.movieCnName}}
  p.time.mt-25 {{ order.startTime }} - {{ order.endTime }}
  p.location.mt-10 {{ order.cinema }}

  p.seat.mt-30 {{ order.posX }} 排 {{ order.posY }} 座
  p.link.mt-10(v-if='order.orderStatus === 1 && order.partnerPhone !== -1') 约友联系方式: {{ order.partnerPhone }}
  p.tips.mt-10(v-if='order.orderStatus === 1 && order.partnerPhone !== -1') 请享受欢乐约影吧O(∩_∩)O
  img(src='../assets/yue3.png' class='logo')
  el-button.btn(@click='confirm(order.orderId)' v-if='order.orderStatus === 0 || order.partnerPhone === 1') 退票
</template>

<script>
export default {
  props: ['content'],
  computed: {
    order () {
      let result = this.content
      switch (result.orderStatus) {
        case 0:
          result.status = '支付成功'
          break
        case 1:
          result.status = '约影成功'
          break
        case 2:
          result.status = '交易完成'
          break
        case 3:
          result.status = '已取消'
          break
        default:
          result.status = '未知'
      }
      return result
    }
  },
  data () {
    return {
    }
  },
  methods: {
    confirm (id) {
      this.$confirm('确定要取消订单吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.get(`/api/order/cancel/${id}`)
          .then(response => {
            if (response.ok) {
              this.$message({
                type: 'success',
                message: '取消订单成功'
              })
              this.order.status = '已取消'
              this.order.orderStatus = 3
            }
          }, response => {
            this.$message({
              type: 'error',
              message: '网络出现了问题，请稍后重试'
            })
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 60px;
}
.order-card {
  max-width: 300px;
  min-width: 300px;
  padding: 20px;
  margin-right: 30px;
  min-height: 320px;
  .btn {
    display: block;
    margin: auto;
    background: #000000;
    width: 150px;
    color: #fba214;
    font-size: 18px;
    font-weight: bold;
  }
  .status {
    font-weight: bold;
    color: #fba214;
  }
  .movie-name {
    font-size: 24px;
    font-weight: bold;
  }
  .time {
    font-size: 12px;
    font-weight: bold;
  }
  .location {
    font-size: 12px;
    font-weight: bold;
  }
  .seat {
    font-size: 14px;
    font-weight: bolder
  }
  .link {
    color: #fba214;
    font-weight: bold;
    font-size: 14px;
  }
  .tips {
    font-size: 12px;
    font-weight: bolder;
  }
}


.status {
  color: #fba214
}

.el-dialog__body {
  display: none
}
</style>

