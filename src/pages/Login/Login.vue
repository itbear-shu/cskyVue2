<template>
  <div class="login-container">
    <!-- 登录 -->
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
          <ul class="tab clearFix">
            <li>
              <a href="javascript:void(0);" class="current">账户登录</a>
            </li>
          </ul>

          <div class="content">
            <el-form label-width="100px" :model="loginForm" :rules="rules"
                     label-position="left" status-icon ref="loginForm">
              <el-form-item label="手机号" prop="phone">
                <el-input v-model="loginForm.phone" type="text" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item label="请输入密码" prop="password">
                <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"
                  @keyup.native.enter="userLogin"
                ></el-input>
              </el-form-item>
            </el-form>
            <form>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" checked="">
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <el-button type="primary" class="btn" @click.prevent="userLogin">登&nbsp;&nbsp;录</el-button>
            </form>

            <div class="call clearFix">
              <router-link class="register" to="/register" style="text-decoration: none">立即注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    // 自定义校验规则
    const validatePhone = (rule, value, callback) => {
      if (!/^1(3|5|6|7|8|9)\d{9}$/.test(value)) {
        callback(new Error('请输入11位手机号'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!/^\w{5,17}$/.test(value)) {
        callback(new Error('密码只能6~15位包含数字、字母和下划线'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        phone: '',
        password: ''
      },

      rules: {
        phone: [
          {required: true, trigger: 'blur', validator: validatePhone}
        ],
        password: [
          {required: true, trigger: 'blur', validator: validatePassword}
        ]
      }
    }
  },
  methods: {
    userLogin() {
      this.$refs.loginForm.validate(async (valid)=>{
        if(valid) {
          const result = await this.$store.dispatch('user/login', {
            phone: this.loginForm.phone,
            password: this.loginForm.password
          })
          if (result) {
            this.$message.success('登录成功！')
            const toPath = this.$route.query.redirect || '/home'
            await this.$router.push(toPath)
          } else {
            this.$message.error('登录失败，账户名或密码错误')
            this.loginForm.phone = ''
            this.loginForm.password = ''
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .login-wrap {
    height: 505px;
    background: url(~@/assets/bg1.png) no-repeat;
    background-size: 1300px;

    .login {
      width: 1200px;
      height: 487px;
      margin: 0 auto;

    }

    .loginform {
      width: 420px;
      height: 406px;
      box-sizing: border-box;
      background: #fff;
      top: 45px;
      right: -30%;
      position: relative;
      padding: 20px;
      text-align: center;

      .tab {

        li {
          width: 100%;

          a {
            width: 100%;
            display: block;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            font-weight: 700;
            color: #333;
            border: 1px solid #ddd;
            box-sizing: border-box;
            text-decoration: none;

          }

          .current {
            border-bottom: none;
            color: #579ed4;
          }
        }
      }

      .content {
        width: 380px;
        height: 316px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-top: none;
        padding: 18px;

        form {
          margin: 15px 0 18px 0;
          font-size: 12px;
          line-height: 18px;

          .setting {
            label {
              float: left;
            }

            .forget {
              float: right;
            }
          }

          .btn {
            padding: 6px;
            border-radius: 0;
            font-size: 16px;
            word-spacing: 4px;
            color: #fff;
            width: 100%;
            height: 36px;
            margin-top: 25px;
            outline: none;
          }
        }

        .call {
          margin-top: 30px;

          ul {
            float: left;

            li {
              float: left;
              margin-right: 5px;
            }
          }

          .register {
            float: right;
            font-size: 15px;
            line-height: 38px;
          }

          .register:hover {
            color: #4cb9fc;
            text-decoration: underline;
          }
        }

      }
    }
  }


}
</style>
