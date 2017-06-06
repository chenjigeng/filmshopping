<template>
<div>
  <el-dialog
    class='pay tc'
    :visible.sync="dialogVisible"
    size="tiny"
    :before-close="handleClose"
    :show-close='false'
  >
    <p class='title'>扫码支付</p>
    <img src='../assets/qrcode.png'/>
    <el-button @click='submit' class='mt-20'>确认支付</el-button>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    dialogVisible () {
      console.log(this.$store.getters.getOrderDetailDialog)
      return this.$store.getters.getPayDialog
    },
    seatInfo () {
      return this.$store.getters.getSeatInfo
    },
    yueinfo () {
      return this.$store.getters.yueinfo
    }
  },
  data () {
    return {
      message: '',
      phone: ''
    }
  },
  methods: {
    toggleDialog () {
      this.$store.commit('toggleDiglog', 'Pay')
    },
    handleClose (action, instance, done) {
      this.$store.commit('toggleDiglog', 'Pay')
    },
    submit () {
      var promises = this.seatInfo.map(i => {
        if (i !== -1) {
          return this.buyAPI(i)
        }
        return Promise.resolve('')
      })
      Promise.all(promises).then(posts => {
        this.$store.commit('toggleDiglog', 'Pay')
        this.$store.commit('toggleDiglog', 'OrderDetail')
        var params = {
          customerTicketId: this.seatInfo[0],
          partnerTicketId: this.seatInfo[1],
          message: this.yueinfo ? this.yueinfo.message : ''
        }
        console.log('in', params)
        this.$http.post('/api/order/create', params,
          {
            emulateJSON: true
          }).then(resp => {
            this.$message('创建订单成功')
            console.log('resp', resp)
          }).catch(reason => {
            this.$message({
              type: 'error',
              message: reason
            })
            console.log('reason', reason)
          })
      }).catch(reason => {
        console.log('错误: ', reason)
      })
    },
    buyAPI (id) {
      return new Promise(resolve => {
        this.$http.get('/api/ticket/buy/' + id).then(resp => {
          resolve(resp)
        })
      })
    }
  }
}
</script>

<style lang="scss">
.pay  {
  .el-dialog {
    background: #fba214;
    width: 450px;
  }
  .el-dialog__body {
    padding: 0;
    padding-bottom: 20px;
  }
  .title {
    font-weight: bold;
    font-size: 24px;
    color: black;
  }
  button {
    border-color: black;
    width: 180px;
    background: black;
    color: #fde101;
  }
}
</style>

