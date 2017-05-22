<template>
  <div class="chooser">
    <ul class="chooser-list">
      <li v-for="(item, index) in selections" @click="chooseItem(index)" :class="{'active': checkActive(index)}">{{item.label}}</li>
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
        nowIndexes: [0]
      }
    },
    methods: {
      chooseItem (index) {
        if (this.nowIndexes.indexOf(index) === -1) {
          this.nowIndexes.push(index)
        } else {
          this.nowIndexes.splice(this.nowIndexes.indexOf(index), 1)
        }
        let obj = this.nowIndexes.map((index) => {
          return this.selections[index]
        })
        this.$emit('changeValue', obj)
      },
      checkActive (index) {
        return this.nowIndexes.indexOf(index) !== -1
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
