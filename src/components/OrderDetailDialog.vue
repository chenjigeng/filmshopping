<template>
<div>
  <el-dialog
    class='order-detail tc'
    :visible.sync="dialogVisible"
    size="tiny"
    :before-close="handleClose"
    :show-close='false'
  >
    <p class='status'>支付成功</p>
    <p class='movie-name'>神奇女侠</p>
    <p class='time mb-5'>6月5号 21:30-23:50</p>
    <p class='location mt-5'>超级英雄电影院</p>
    <p class='seat'>5排6座</p>
    <div>
      <p class='link'>约友联系方式是：18819253444</p>
      <p class='welcome'>请享受欢乐约影吧O(∩_∩)O</p>
    </div>
    <img src='../assets/yue3.png' class='logo'>
    <el-button @click='toggleDialog'>OK</el-button>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    dialogVisible () {
      console.log(this.$store.getters.getOrderDetailDialog)
      return this.$store.getters.getOrderDetailDialog
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
      this.$store.commit('toggleDiglog', 'OrderDetail')
    },
    handleClose (action, instance, done) {
      this.$store.commit('toggleDiglog', 'OrderDetail')
    },
    submit () {
      alert('TODO')
    }
  }
}
</script>

<style lang="scss">
.order-detail {
  color: black;
  .el-dialog__body {
    padding: 0;
    padding-bottom: 20px;
  }
  .btn {
    background: #000000;
    width: 150px;
    color: #fba214;
    font-size: 18px;
    font-weight: bold;
  }
  .status {
    font-weight: bold;
    color: black;
    font-size: 18px;
  }
  .movie-name {
    color: black;
    font-size: 24px;
    font-weight: bold;
  }
  .time {
    font-size: 12px;
    color: black;
    font-weight: bold;
  }
  .location {
    color: black;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .seat {
    color: black;
    font-size: 14px;
    font-weight: bolder
  }
  .logo {
    width: 60px;
  }
  button {
    font-size: 20px;
    color: #fde101;
    background: black;
    width: 180px;
    display: block;
    margin: auto;
    border-color: black;
  }
  .link {
    color: white;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .welcome {
    color: black;
    font-weight: bold;
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 20px;
  }
  .el-dialog {
    background: #fba214;
    width: 450px;
  }
}

</style>

