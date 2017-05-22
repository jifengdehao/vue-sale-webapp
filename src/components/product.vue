<template>
  <div class="product">
    <h2>全部产品</h2>
    <template v-for="item in list">
      <h3>{{item.title}}</h3>
      <ul>
        <li v-for="i in item.list">
          <a :href="i.url">{{i.name}}</a>
          <span class="hot-tag" v-if="i.hot">HOT</span>
        </li>
      </ul>
      <div v-if="!item.last" class="hr"></div>
    </template>
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
  .product
    margin: 15px
    background: #fff
    box-shadow: 0 0 1px #ddd
    h2
      margin-bottom: 20px
      padding: 10px 15px
      background: #4fc08d
      color: #fff
    h3
      padding: 0 15px 5px 15px
      font-weight: bold
      color: #222
    ul
      padding: 10px 15px
      li
        padding: 5px
        .hot-tag
          background: red
          color: #fff
    .hr
      margin-bottom: 20px
</style>
