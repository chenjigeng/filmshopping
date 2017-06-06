<template>
<div id='Ydiglog'>
  <el-dialog
    class='Ydiglog tl'
    :visible.sync="dialogVisible"
    size="tiny"
    :before-close="handleClose"
    :show-close='false'
  >
    <el-input 
      class='message mb-20'
      v-model='message'
      type='textarea'
      resize='none'
      :maxlength='100'
      placeholder='约影留言能够提高约影成功率哦！O(∩_∩)O~~'
    ></el-input>
    <div>
      <label class='mr-15'>请留下您的联系方式:</label>
      <el-input v-model='phone' class='phone' ></el-input>
    </div>  
    <p class='tips'>
      PS：申请约影后，选择两个连续空位的左侧空位，系统将自动锁定右侧空位为待约影位
    </p>
    <el-button class='submit-btn' @click='submit'>APPLY</el-button>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    dialogVisible () {
      return this.$store.getters.getYDialog
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
      this.$store.commit('toggleDiglog', 'Y')
    },
    handleClose (action, instance, done) {
      this.$store.commit('toggleDiglog', 'Y')
    },
    submit () {
      var yueinfo = {
        message: this.message,
        phone: this.phone
      }
      this.$store.commit('applyY', yueinfo)
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
    border-color: black;
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

