<template>
  <div class="counter">
    <div class="counter-btn" @click="minus">-</div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="fix">
    </div>
    <div class="counter-btn" @click="add">+</div>
  </div>
</template>

<script>
  export default {
    props: {
      max: {
        type: Number,
        default: 5
      },
      min: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        number: this.min
      }
    },
    watch: {
      number () {
        this.$emit('changeValue', this.number)
      }
    },
    methods: {
      add () {
        if (this.number >= this.max) {
          this.number = this.max
        } else {
          this.number++
        }
      },
      minus () {
        if (this.number <= this.min) {
          this.number = this.min
        } else {
          this.number--
        }
      },
      fix () {
        let num
        if (typeof this.number === 'string') {
          num = Number(this.number.replace(/\D/g, ''))
        } else {
          num = this.number
        }
        if (num > this.max) {
          num = this.max
        }
        if (num < this.min) {
          num = this.min
        }
        this.number = num
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .counter
    position: relative
    display: inline-block
    overflow: hidden
    vertical-align: middle
    .counter-btn
      float: left
      width: 25px
      height: 25px
      line-height: 25px
      border: 1px solid #e3e3e3
      text-align: center
      cursor: pointer
      &:hover
        border-color: #4fc08d
        background: #4fc08d
        color: #fff
    .counter-show
      float: left
      input
        width: 30px
        height: 23px
        line-height: 23px
        border: none
        border-top: 1px solid #e3e3e3
        border-bottom: 1px solid #e3e3e3
        outline: none
        text-indent: 4px
</style>
