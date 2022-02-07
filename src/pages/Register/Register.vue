<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>注册新用户
        <span class="go">我有账号，去 <router-link to="/login">登录</router-link>
        </span>
      </h3>
      <el-form :rules="rules" ref="registerForm" label-width="400px" style="margin: 20px 2px"
               class="registerForm" label-position="right" status-icon :model="register">
        <el-form-item label="手机号" prop="phone">
          <el-tooltip effect="dark" content="11位手机号码" :open-delay="200" placement="left">
            <el-input v-model="register.phone" placeholder="请输入你的手机号" class="elInputClass"></el-input>
          </el-tooltip>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-tooltip effect="dark" content="6位验证码" :open-delay="200" placement="left">
            <el-input v-model="register.code" placeholder="请输入验证码" class="elInputClass"></el-input>
          </el-tooltip>
          <el-button type="warning" @click.native="getCode" size="small" round style="margin: 0 5px" :disabled="isClickGetCode">
            <span v-if="!isClickGetCode">点击获取验证码</span>
            <span v-if="isClickGetCode">{{codeNum}}s后可重新获取</span>
          </el-button>
        </el-form-item>
        <el-form-item label="登录密码" prop="password1">
          <el-tooltip effect="dark" content="以字母开头，长度在6~18之间，只能包含字母、数字和下划线"
                      :open-delay="200" placement="left">
            <el-input type="password" v-model="register.password1" placeholder="请输入密码" class="elInputClass"></el-input>
          </el-tooltip>
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
          <el-tooltip effect="dark" content="再次输入密码"
                      :open-delay="200" placement="left">
            <el-input type="password" v-model="register.password2" placeholder="请确认密码" class="elInputClass"></el-input>
          </el-tooltip>
        </el-form-item>
        <el-form-item prop="agree">
          <el-switch
              v-model="register.agree"
              active-color="#13ce66"
              inactive-color="#ff4949">
          </el-switch>
          <span style="margin: 10px 5px">同意协议并注册《尚品汇用户协议》</span>
        </el-form-item>
        <el-form-item style="margin-left: 100px;">
          <el-button type="primary" @click="userRegister">完成注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import dayjs from 'dayjs'

export default {
  name: 'Register',
  data() {
    // 自定义校验规则
    const validatePhone = (rule, value, callback) => {
      if (!/^1(3|5|6|7|8|9)\d{9}$/.test(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    const validatePassword1 = (rule, value, callback) => {
      if (!/^[a-zA-Z]\w{5,17}$/.test(value)) {
        callback(new Error('密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线'))
      } else {
        callback()
      }
    }
    const validatePassword2 = (rule, value, callback) => {
      if (this.register.password2 === '' || this.register.password1 !== value) {
        callback(new Error('前后密码不一致'))
      } else {
        callback()
      }
    }
    const validateCode = (rule, value, callback) => {
      if (!/^\d{6}$/.test(value)) {
        callback(new Error('验证码只能位6位数字'))
      } else {
        callback()
      }
    }
    const validateAgree = (rule, value, callback) => {
      if (value === true) {
        callback()
      } else {
        callback(new Error('请勾选协议'))
      }
    }
    return {
      register: {
        //用户输入的手机号
        phone: '',
        //用户输入的验证码
        code: '',
        //密码
        password1: '',
        //确认密码
        password2: '',
        //确认协议
        agree: false,
      },
      isClickGetCode: false,
      // 点击获取验证码后的倒计时
      codeNum: 60,

      rules: {
        phone: [
          {required: true, trigger: 'blur', validator: validatePhone},
        ],
        code: [
          {required: true, trigger: 'blur', validator: validateCode},
        ],
        password1: [
          {required: true, trigger: 'blur', validator: validatePassword1}
        ],
        password2: [
          {required: true, trigger: 'change', validator: validatePassword2}
        ],
        agree: [
          {required: true, message: '请勾选协议', trigger: 'blur', validator: validateAgree}
        ],
      }
    }
  },
  computed: {
    //获取后台传过来的验证码
    ...mapState('user', ['checkCode'])
  },
  methods: {
    subTime() {
      let interval = setInterval(()=>{
        if(dayjs().subtract(60, 'second').format()
            > JSON.parse(localStorage.getItem('CLICKTIME'))) {
          this.isClickGetCode = false
          this.codeNum = 60
          localStorage.removeItem('CLICKTIME')
          clearInterval(interval)
        } else {
          this.codeNum -= 1
        }
      }, 1000);
    },
    async getCode() {
      localStorage.setItem('CLICKTIME', JSON.stringify(dayjs().format()))
      if (/^1(3|5|6|7|8|9)\d{9}$/.test(this.register.phone)) {
        await this.$store.dispatch('user/getCode', this.register.phone)
        this.register.code = this.checkCode
        await this.$message.success('验证码已成功发送')
        // 不能再被点击
        this.isClickGetCode = true
        this.subTime()
      } else {
        this.$message.warning('请先输入11位手机号')
      }
    },
    async userRegister() {
      await this.$refs.registerForm.validate(async (valid) => {
        if (valid) {
          try {
            let result = await this.$store.dispatch('user/register', {
              phone: this.register.phone,
              password: this.register.password1,
              code: this.register.code
            })
            if (result) {
              this.$confirm('注册成功，是否立即登录', '', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'success'
              }).then(() => {
                this.$router.push('/login')
              }).catch(() => {
                this.$router.push('/home')
              });
            } else {
              this.$message.error('注册失败！')
            }
          } catch (e) {
            console.log(e.message)
          }
        } else {
          this.$message.warning('请检查输入是否有误')
        }
      })
    },
  }
}
</script>

<style scoped lang="css">
.elInputClass {
  width: 400px;
  margin: 0 0;
}
</style>
<style lang="less" scoped>
.register-container {
  .register {
    width: 1100px;
    height: 431px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #b3d8ff;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #409eff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
