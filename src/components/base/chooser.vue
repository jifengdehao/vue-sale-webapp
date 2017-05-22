<template>
  <div class="chooser">
    <ul class="chooser-list">
      <li v-for="(item, index) in selections" @click="chooseItem(index)" :class="{'active': nowIndex === index}">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
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
        nowIndex: 0
      }
    },
    methods: {
      chooseItem (index) {
        this.nowIndex = index
        this.$emit('changeValue', this.selections[index])
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .chooser
    position: relative
    display: inline-block
    .chooser-list
      li
        display: inline-block
        padding: 0 8px
        margin-right: 5px
        border: 1px solid #e3e3e3
        border-radius: 3px
        text-align: center
        cursor: pointer
        height: 25px
        line-height: 25px
        &.active
          border-color: #4fc08d
          background: #4fc08d
          color: #fff
</style>
