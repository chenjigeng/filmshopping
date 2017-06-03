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
          <el-form :model='loginForm' :rules='loginRules' label-width="50px" class='tl'>
            <el-form-item prop='username' label='账号'>
              <el-input v-model='loginForm.username' placeholder='请输入用户账号'></el-input>
            </el-form-item>
            <el-form-item prop='password' label='密码'>
              <el-input type='password' v-model='loginForm.password' placeholder='请输入密码'></el-input>
            </el-form-item>
            <el-checkbox v-model='loginForm.autoLogin' class='mb-20'>下次自动登录</el-checkbox>
            <el-button type='primary' class='row'>登录</el-button>
          </el-form> 
        </el-tab-pane>
        <el-tab-pane label='注册' name='regist'>
          <el-form :model='registForm' :rules='registRules' label-width="50px">
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
                <el-radio label='man' value='man'>男</el-radio>
                <el-radio label='woman' value='woman'>女</el-radio></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-button type='primary' class='row'>注册</el-button>
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
      return this.$store.getters.getdialogVisible
    }
  },
  data () {
    console.log(this)
    return {
      activeName: 'login',
      loginForm: {
        username: '',
        password: '',
        autoLogin: false
      },
      registForm: {
        nickname: '',
        confirmPassword: '',
        password: '',
        phone: '',
        gender: 'man'
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
    toggleDialog () {
      this.$store.commit('toggleDiglog')
    },
    handleClose (action, instance, done) {
      this.$store.commit('toggleDiglog')
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
    }
  }
}
</script>

<style lang="scss" scoped>

.el-dialog__body {
  display: none
}
</style>

