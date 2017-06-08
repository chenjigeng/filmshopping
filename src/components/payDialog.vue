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
      return this.$store.getters.getPayDialog
    },
    seatInfo () {
      return this.$store.getters.getSeatInfo
    },
    yueinfo () {
      return this.$store.getters.getYInfo
    },
    userInfo () {
      return this.$store.getters.getUserInfo
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
      if (!this.userInfo.login) {
        this.$alert('请先登录', '注意')
        return
      }
      // 约影
      if (this.seatInfo[1] === -2) {
        this.$http.get('/api/order/participate/' + this.seatInfo[0]).then(resp => {
          this.$store.commit('toggleDiglog', 'Pay')
          this.$store.commit('toggleDiglog', 'OrderDetail')
          this.$message('约影成功')
        }).catch(reason => {
          this.$message({
            type: 'error',
            message: reason.bodyText
          })
        })
        return
      }
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
          message: this.yueinfo.phone ? this.yueinfo.message : ''
        }
        this.$http.post('/api/order/create', params,
          {
            emulateJSON: true
          }).then(resp => {
            this.$message('创建订单成功')
          }).catch(reason => {
            this.$message({
              type: 'error',
              message: reason.bodyText
            })
          })
      }).catch(reason => {
        this.$message({
          type: 'error',
          message: reason.bodyText
        })
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

