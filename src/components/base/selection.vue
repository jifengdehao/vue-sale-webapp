<template>
  <div class="selection">
    <div class="selection-show" @click.stop="toggle">
      <span>{{selections[nowIndex].label}}</span>
      <div class="arrow"></div>
    </div>
    <div class="selection-list" v-show="isDrop">
      <ul>
        <li v-for="(item, index) in selections" @click="chooseSelect(index)">{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {eventHub} from '../../eventHub'
  export default {
    props: {
      selections: {
        type: Array,
        default: [
          {
            label: 'test',
            value: 0
          }
        ]
      }
    },
    data () {
      return {
        isDrop: false,
        nowIndex: 0
      }
    },
    methods: {
      toggle () {
        eventHub.$emit('closeList')
        this.isDrop = !this.isDrop
      },
      chooseSelect (index) {
        this.nowIndex = index
        this.isDrop = false
        this.$emit('changeValue', this.selections[index])
      }
    },
    mounted () {
      eventHub.$on('closeList', () => {
        this.isDrop = false
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .selection
    position: relative
    display: inline-block
    .selection-show
      position: relative
      display: inline-block
      padding: 0 20px 0 10px
      height: 25px
      line-height: 25px
      background: #fff
      border: 1px solid #e3e3e3
      border-radius: 3px
      cursor: pointer
      .arrow
        display: inline-block
        margin-top: -1px
        margin-left: 6px
        margin-right: -14px
        width: 0
        height: 0
        border-top: 5px solid #e3e3e3
        border-left: 4px solid transparent
        border-right: 4px solid transparent
        vertical-align: middle
    .selection-list
      display: inline-block
      position: absolute
      left: 0
      top: 25px
      width: 100%
      background: #fff
      border-top: 1px solid #e3e3e3
      border-bottom: 1px solid #e3e3e3
      z-index: 5
      li
        padding: 5px 15px 5px 10px
        border-left: 1px solid #e3e3e3
        border-right: 1px solid #e3e3e3
        background: #fff
        cursor: pointer
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        &:hover
          background: #e3e3e3
</style>
