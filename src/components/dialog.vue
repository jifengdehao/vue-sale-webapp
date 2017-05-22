<template>
  <div class="dialog-wrapper">
    <div class="mask" @click="close" v-if="isShow"></div>
    <transition name="pop">
      <div class="content" v-if="isShow">
        <p class="close" @click="close">X</p>
        <slot>empty</slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close () {
        this.$emit('closeDialog')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .dialog-wrapper
    position: fixed
    width: 100%
    height: 100%
    .mask
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: 5
      background: rgba(0, 0, 0, 0.3)
    .content
      position: fixed
      top: 20%
      left: 50%
      margin-left: -25%
      padding: 2%
      width: 50%
      max-height: 50%
      line-height: 1.6
      z-index: 10
      overflow: auto
      border: 2px solid #464068
      background: #fff
      &.pop-enter-active
        transition: all 0.5s
      &.pop-leave-active
        transition: all 0.4s
      &.pop-enter, &.pop-leave-active
        transform: translateY(-500px)
      .close
        position: absolute
        top: 5px
        right: 5px
        width: 20px
        height: 20px
        text-align: center
        cursor: pointer
        &:hover
          color: #4fc08d
</style>
