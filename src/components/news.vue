<template>
  <div class="news">
    <h2>最新消息</h2>
    <ul>
      <li v-for="item in list">
        <a class="news-item" :href="item.url">{{item.title}}</a>
      </li>
    </ul>
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
  .news
    min-height: 512px
    margin: 15px
    background: #fff
    box-shadow: 0 0 1px #ddd
    h2
      margin-bottom: 20px
      padding: 10px 15px
      background: #4fc08d
      color: #fff
    ul
      padding: 10px 15px
      li
        padding: 5px
        .news-item
          display: block
          width: 230px
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
</style>
