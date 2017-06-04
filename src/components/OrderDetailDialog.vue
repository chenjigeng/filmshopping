<template>
<div id='Ydiglog'>
  <el-dialog
    class='Ydiglog tl'
    :visible.sync="dialogVisible"
    size="tiny"
    :before-close="handleClose"
    :show-close='false'
  >
    <p class='status'>支付成功</p>
    <p class='movive-name'>神奇女侠</p>
    <p class='time'>6月5号 21:30-23:50</p>
    <p class='location'>超级英雄电影院</p>
    <p class='location'>5排6座</p>
    <p></p>
    <el-btn>OK</el-btn>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    dialogVisible () {
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

.Ydiglog {
  .el-dialog {
    background: #fba214;
    width: 450px;
  }
  .el-dialog__body {
    margin: 20px;
  }
  .message textarea {
    background: #fde101;
    height: 150px
  }
  input {
    background: #fde101;
  }
  .phone {
    width: 220px;
  }
  .submit-btn {
    width: 100%;
    background: black;
    color: #fde101;
    height: 50px;
    font-size: 20px;
  }
  label {
    font-weight: bold;
    color: black;
  }
  .tips {
    color: black
  }
}

</style>

