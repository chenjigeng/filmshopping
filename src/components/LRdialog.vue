<template>
<div class='lr-diglog'>
  <el-dialog
    :visible.sync="dialogVisible"
    size="tiny"
    :before-close="handleClose"
    :show-close='false'
  >
    <span slot='title'>
      <el-tabs v-model='activeName'>
        <el-tab-pane label='登录' name='login' class='login tl'>
          <el-form :model='loginForm' :rules='loginRules' label-width="50px" class='tl' ref='login'>
            <el-form-item prop='username' label='账号'>
              <el-input v-model='loginForm.username' placeholder='请输入用户账号'></el-input>
            </el-form-item>
            <el-form-item prop='password' label='密码'>
              <el-input type='password' v-model='loginForm.password' placeholder='请输入密码'></el-input>
            </el-form-item>
            <el-button type='primary' class='row' @click='login'>登录</el-button>
          </el-form> 
        </el-tab-pane>
        <el-tab-pane label='注册' name='regist'>
          <el-form :model='registForm' :rules='registRules' label-width="50px" ref='regist'>
            <el-form-item prop='phone' label='手机'>
              <el-input v-model='registForm.phone' placeholder='请输入手机号'></el-input>
            </el-form-item>
            <el-form-item prop='password' label='密码'>
              <el-input type='password' v-model='registForm.password' placeholder='请输入密码'></el-input>
            </el-form-item>
            <el-form-item prop='nickname' label='昵称'>
              <el-input v-model='registForm.nickname' placeholder='请输入昵称'></el-input>
            </el-form-item>
            <el-form-item label='性别' prop='gender' class='tl'>
              <el-radio-group v-model='registForm.gender'>
                <el-radio label='false' value='0'>男</el-radio>
                <el-radio label='true' value='1'>女</el-radio></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-button type='primary' class='row' @click='regist'>注册</el-button>
          </el-form>        
        </el-tab-pane>
      </el-tabs>
    </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    dialogVisible () {
      return this.$store.getters.getLRDialog
    }
  },
  data () {
    var validatePhone = (rule, value, callback) => {
      if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(value))) {
        callback(new Error('请输入正确的手机号码'))
      } else {
        callback()
      }
    }
    return {
      activeName: 'login',
      loginForm: {
        username: '',
        password: ''
      },
      registForm: {
        nickname: '',
        confirmPassword: '',
        password: '',
        phone: '',
        gender: 'false'
      },
      loginRules: {
        username: [
          {required: true, message: '请输入用户账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      registRules: {
        phone: [
          {validator: validatePhone, trigger: 'blur'},
          {required: true, message: '请输入手机号码', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        confirmPassword: [
          {required: true, message: '请重新输入密码', trigger: 'blur'}
        ],
        nickname: [
          {required: true, message: '请输入昵称', trigger: 'blur'}
        ],
        gender: [
          {required: true, message: '请输入昵称', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.$http.post('/api/user/login', {
            phone: this.loginForm.username,
            password: this.loginForm.password
          }, {
            emulateJSON: true
          })
          .then(response => {
            if (response.ok) {
              let payload = response.body
              payload.login = true
              this.$store.commit('changeUserInfo', payload)
              this.$message({
                type: 'success',
                message: '登陆成功'
              })
              this.$store.commit('toggleDiglog', 'LR')
            }
          }, response => {
            this.$message({
              type: 'error',
              message: response.bodyText
            })
          })
        } else {
          return false
        }
      })
    },
    regist () {
      this.$refs.regist.validate((valid) => {
        if (valid) {
          this.$http.post('/api/user/register', {
            username: this.registForm.nickname,
            password: this.registForm.password,
            gender: this.registForm.gender,
            phone: this.registForm.phone
          })
          .then((response) => {
            if (response.ok) {
              this.$message({
                type: 'success',
                message: '注册成功'
              })
              let payload = response.body
              payload.login = true
              this.$store.commit('changeUserInfo', payload)
            }
            this.$store.commit('toggleDiglog', 'LR')
          }, (response) => {
            this.$message({
              type: 'error',
              message: response.bodyText
            })
          })
          .catch((err) => {
            this.$message({
              type: 'error',
              message: err.bodyText
            })
          })
        } else {
          return false
        }
      })
    },
    toggleDialog () {
      this.$store.commit('toggleDiglog', 'LR')
    },
    handleClose (action, instance, done) {
      this.$store.commit('toggleDiglog', 'LR')
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
    }
  }
}
</script>

<style lang="scss" >

.lr-diglog {
  .el-tabs__item.is-active {
    color: #fba214
  }
  .el-dialog {
    padding: 20px;
    padding-bottom: 40px;
  }
  .el-dialog__body {
    display: none
  }
  button {
    background: #fba214;
    height: 45px;
  }
  .el-tabs__active-bar {
    background-color: #fba214
  }
  .el-button--primary {
    background: #fba214
  }
}

</style>

