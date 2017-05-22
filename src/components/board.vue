<template>
  <div class="board-list">
    <div class="board-item" v-for="(item, index) in list" :class="[{'line-last': index % 2 !== 0}, 'board-' + item.id]">
      <div class="board-item-inner">
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
        <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .board-list
    overflow: hidden
    .board-item
      float: left
      width: 400px
      padding: 20px
      margin-right: 20px
      margin-bottom: 20px
      background: #fff
      box-shadow: 0 0 1px #ddd
      &.line-last
        margin-right: 0
      &.board-car
        .board-item-inner
          background: url(../assets/images/1.png) no-repeat
      &.board-earth
        .board-item-inner
          background: url(../assets/images/2.png) no-repeat
      &.board-loud
        .board-item-inner
          background: url(../assets/images/3.png) no-repeat
      &.board-hill
        .board-item-inner
          background: url(../assets/images/4.png) no-repeat
      .board-item-inner
        min-height: 125px
        padding-left: 120px
        h2
          margin-bottom: 15px
          font-size: 18px
          font-weight: bold
          color: #000
        .button
          margin-top: 20px
</style>
