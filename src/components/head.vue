<template>
  <div class="head">
    <div class="head-inner">
      <router-link to="/">
        <img class="head-logo" src="../assets/logo.png">
      </router-link>
      <div class="head-nav">
        <ul class="nav-list">
          <li v-if="username">你好，{{username}}</li>
          <li v-if="username" class="nav-pile">|</li>
          <li v-if="username" @click="logout()">退出</li>
          <li v-if="!username" @click="open('isShowLogin')">登录</li>
          <li v-if="!username" class="nav-pile">|</li>
          <li v-if="!username" @click="open('isShowSignup')">注册</li>
          <li class="nav-pile">|</li>
          <li @click="open('isShowAbout')">关于</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      username: ''
    },
    methods: {
      open (attr) {
        this.$emit('openDialog', attr)
      },
      logout () {
        this.$emit('logout')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .head
    width: 100%
    height: 90px
    line-height: 90px
    background: #363636
    color: #b2b2b2
    .head-inner
      margin: 0 auto
      width: 1200px
      .head-logo
        float: left
        width: 50px
        height: 50px
        margin-top: 20px
      .head-nav
        float: right
        .nav-list
          overflow: hidden
          li
            float: left
            cursor: pointer
            &.nav-pile
              padding: 0 10px
</style>
