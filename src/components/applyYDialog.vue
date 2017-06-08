<template>
<div id='Ydiglog'>
  <el-dialog
    class='Ydiglog tl'
    :visible.sync="dialogVisible"
    size="tiny"
    :before-close="handleClose"
    :show-close='false'
  >
    <div>
      <el-form :model='form' :rules='rules' class='tl' ref='form'>
        <el-form-item prop='message'>
          <el-input type="textarea" class='message mb-20' resize='none' v-model='form.message' placeholder='约影留言能够提高约影成功率哦！O(∩_∩)O~~'></el-input>
        </el-form-item>
      </el-form>
    </div>
    <p class='tips'>
      PS：申请约影后，选择两个连续空位的左侧空位，系统将自动锁定右侧空位为待约影位
    </p>
    <el-button class='submit-btn' @click="submit('form')">APPLY</el-button>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    dialogVisible () {
      return this.$store.getters.getYDialog
    },
    yueinfo () {
      return this.$store.getters.yueinfo
    }
  },
  data () {
    return {
      form: {
        message: '',
        phone: ''
      },
      rules: {
        message: [
          { max: 100, message: '留言过长', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    toggleDialog () {
      this.$store.commit('toggleDiglog', 'Y')
    },
    handleClose (action, instance, done) {
      this.$store.commit('toggleDiglog', 'Y')
    },
    submit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var yueinfo = this.form
          this.$store.commit('applyY', yueinfo)
          this.$store.commit('toggleDiglog', 'Y')
          this.$message('已进入约影定座模式！')
        } else {
          return false
        }
      })
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

