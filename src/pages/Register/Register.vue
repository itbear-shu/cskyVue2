<template>
  <el-row :gutter="20">
    <el-col :span="20" :offset="2">
      <div class="register-container">
        <!-- 注册内容 -->
        <div class="register">
          <h3>注册新用户
            <span class="go">我有账号，去 <router-link to="/login">登录</router-link>
            </span>
          </h3>
          <el-row :gutter="20">
            <el-col :span="15" :offset="4">
              <el-form :rules="rules" ref="registerForm" class="registerForm" label-position="right" status-icon :model="register">
                <el-form-item label="用户名称" prop="username">
                  <el-tooltip effect="dark" content="由5~15位数字、26个英文字母或者下划线组成" :open-delay="200" placement="left">
                    <el-input v-model="register.username" placeholder="请输入你的用户名"></el-input>
                  </el-tooltip>
                </el-form-item>

                <el-form-item label="邮箱账号" prop="email">
                  <el-tooltip effect="dark" content="xxxxx@xxx.xxx格式，请务必输入有效的邮箱账号" :open-delay="200" placement="left">
                    <el-input v-model="register.email" placeholder="请输入你的邮箱账号"></el-input>
                  </el-tooltip>
                  <el-button type="primary" size="mini" @click="sendEmailCode">发送验证码</el-button>
                </el-form-item>

                <el-form-item label="验证码" prop="emailCode">
                  <el-tooltip effect="dark" content="6位验证码，由26个英文字母和0~9数字组成" :open-delay="200" placement="left">
                    <el-input v-model="register.emailCode" placeholder="请输入邮箱中接收到的验证码"></el-input>
                  </el-tooltip>
                </el-form-item>

                <el-form-item label="登录密码" prop="password1">
                  <el-tooltip effect="dark" content="以字母开头，长度在6~18之间，只能包含字母、数字和下划线"
                              :open-delay="200" placement="left">
                    <el-input type="password" v-model="register.password1" placeholder="请输入密码"></el-input>
                  </el-tooltip>
                </el-form-item>

                <el-form-item label="确认密码" prop="password2">
                  <el-tooltip effect="dark" content="再次输入密码"
                              :open-delay="200" placement="left">
                    <el-input type="password" v-model="register.password2" placeholder="请确认密码"></el-input>
                  </el-tooltip>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="userRegister">完成注册</el-button>
                </el-form-item>
              </el-form>

            </el-col>
          </el-row>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// import {mapState} from 'vuex'
import dayjs from 'dayjs'
import {setToken} from "@/utils/token";

export default {
  name: 'Register',
  data() {
    // 自定义校验规则
    const validateUsername = (rule, value, callback) => {
      if (!/^\w{5,15}$/.test(value)) {
        callback(new Error('请检查用户名格式是否正确'))
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
    const validateEmail = (rule, value, callback) => {
      if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
        callback(new Error('请输入正确的邮箱地址'))
      } else {
        callback()
      }
    }
    const validateEmailCode = (rule, value, callback) => {
      if (!/^[A-Za-z0-9]{6}$/.test(value)) {
        callback(new Error('请输入正确的邮箱验证码'))
      } else {
        callback()
      }
    }
    return {
      register: {
        //用户名
        username: '',
        //密码
        password1: '',
        //确认密码
        password2: '',
        // 用户邮箱
        email: '',
        // 邮箱验证码
        emailCode: ''
      },
      isClickGetCode: false,
      // 点击获取验证码后的倒计时
      codeNum: 60,

      rules: {
        username: [
          {required: true, trigger: 'blur', validator: validateUsername},
        ],
        email: [
          {required: true, trigger: 'blur', validator: validateEmail},
        ],
        emailCode: [
          {required: true, trigger: 'blur', validator: validateEmailCode},
        ],
        password1: [
          {required: true, trigger: 'blur', validator: validatePassword1}
        ],
        password2: [
          {required: true, trigger: 'change', validator: validatePassword2}
        ],
      },
      // 校验验证码时的使用
      eid: ''
    }
  },
  computed: {
    //获取后台传过来的验证码
    // ...mapState('user', ['checkCode'])
  },
  methods: {
    // subTime() {
    //   let interval = setInterval(()=>{
    //     if(dayjs().subtract(60, 'second').format()
    //         > JSON.parse(localStorage.getItem('CLICKTIME'))) {
    //       this.isClickGetCode = false
    //       this.codeNum = 60
    //       localStorage.removeItem('CLICKTIME')
    //       clearInterval(interval)
    //     } else {
    //       this.codeNum -= 1
    //     }
    //   }, 1000);
    // },
    async sendEmailCode() {
      // localStorage.setItem('CLICKTIME', JSON.stringify(dayjs().format()))
      if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.register.email)) {
        this.$message.warning("验证码发送中...")
        try {
          const result = await this.$API.reqGetCode(this.register.email)
          // 1610580113@qq.com
          await this.$message.success('验证码成功发送，请注意查收！')
          if (result.data.code === 200) {
            this.eid = result.data.data.eid
            // 不能再被点击
            this.isClickGetCode = true
          } else {
            this.$message.error('验证码发送失败！')
          }
          // this.subTime()
        } catch (e) {
          this.$message.error(e.message)
        }
      } else {
        this.$message.warning('请先输入正确的邮箱账号')
      }
    },
    async userRegister() {
      await this.$refs.registerForm.validate(async (valid) => {
        if (valid) {
          try {
            // 先校验验证码是否通过
            const res = await this.$API.reqCheckCode(this.register.emailCode, this.eid)
            if (res.data.code !== 200) {
              this.$message.error(res.data.msg)
              return
            }
          } catch (e) {
            this.$message.error(e.message)
          }
          try {
            const result = await this.$store.dispatch("user/register", {
              username: this.register.username,
              password: this.register.password1,
              userEmail: this.register.email
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
            }
          } catch (e) {
            this.$message.error(e.message)
          }
        } else {
          this.$message.warning('请检查输入是否有误')
        }
      })
    },
  }
}
</script>

<style lang="less" scoped>
.register-container {
  .register {
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

    .registerForm {
      margin: 20px 2px;
    }
  }
}
</style>
