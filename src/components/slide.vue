<template>
  <div class="slide" @mouseover="stop" @mouseout="run">
    <div class="slide-img">
      <router-link :to="{path: slides[nowIndex].href}">
        <transition name="slide">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </router-link>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{'on': index === nowIndex}">{{index + 1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      invTime: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        nowIndex: 0,
        isShow: true
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      goto (index) {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
        }, 10)
      },
      run () {
        this.inv = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.invTime)
      },
      stop () {
        clearInterval(this.inv)
      }
    },
    mounted () {
      this.run()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide
    position: relative
    margin: 15px 15px 15px 0
    width: 900px
    height: 500px
    overflow: hidden
    .slide-img
      width: 100%
      img
        position: absolute
        top: 0
        width: 100%
        &.slide-enter-active
          transition: all 0.5s
        &.slide-enter
          transform: translateX(900px)
        &.slide-old-leave-active
          transition: all 0.5s
          transform: translateX(-900px)
    h2
      position: absolute
      bottom: 0
      padding-left: 15px
      width: 100%
      height: 30px
      line-height: 30px
      background: rgba(0, 0, 0, 0.5)
      color: #fff
      text-align: left
    .slide-pages
      position: absolute
      bottom: 10px
      right: 15px
      li
        display: inline-block
        padding: 0 10px
        color: #fff
        cursor: pointer
        .on
          text-decoration: underline
</style>
