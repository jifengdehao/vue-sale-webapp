<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="user.name" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{nameErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="user.password" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="login">登录</a>
        </div>
      </div>
      <span class="g-form-error">{{errorText}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          name: '',
          password: ''
        },
        errorText: ''
      }
    },
    computed: {
      nameErrors () {
        let errorText, status
        if (!/@/g.test(this.user.name)) {
          status = false
          errorText = '不包含@'
        } else {
          status = true
          errorText = ''
        }
        if (!this.nameFlag) {
          errorText = ''
          this.nameFlag = true
        }
        return {
          errorText,
          status
        }
      },
      passwordErrors () {
        let errorText, status
        if (this.user.password.length < 6) {
          status = false
          errorText = '密码小于6位'
        } else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          errorText,
          status
        }
      }
    },
    methods: {
      login () {
        if (!this.nameErrors.status || !this.passwordErrors.status) {
          this.errorText = '输入不正确'
        } else {
          this.errorText = ''
          this.$emit('login', this.user)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
