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
    <el-button @click='toggleDialog' class='mt-20'>确认支付</el-button>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    dialogVisible () {
      return this.$store.getters.getPayDialog
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
      alert('TODO')
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

