<template>
  <div class="detail-wrapper">
    <div class="detail-left">
      <div class="product-board">
        <img :src="productImg">
        <ul>
          <li v-for="item in products">
            <router-link :to="{path: item.path}" active-class="active">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          {
            name: '数据统计',
            path: 'count',
            icon: require('../assets/images/1.png'),
            active: false
          },
          {
            name: '数据预测',
            path: 'forecast',
            active: false
          },
          {
            name: '流量分析',
            path: 'analysis',
            active: false
          },
          {
            name: '广告发布',
            path: 'publish',
            active: false
          }
        ],
        imgMap: {
          '/detail/count': require('../assets/images/1.png'),
          '/detail/forecast': require('../assets/images/2.png'),
          '/detail/analysis': require('../assets/images/3.png'),
          '/detail/publish': require('../assets/images/4.png')
        }
      }
    },
    computed: {
      productImg () {
        return this.imgMap[this.$route.path]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .detail-wrapper
    margin: 0 auto
    padding-top: 20px
    width: 1200px
    overflow: hidden
    .detail-left
      float: left
      width: 200px
      text-align: center
      .product-board
        padding: 20px 0
        background: #fff
        ul
          margin-top: 20px
          li
            a
              display: block
              padding: 10px 15px
              text-align: left
              &.active, &:hover
                background: #4fc08d
                color: #fff
    .detail-right
      float: left
      margin-left: 20px
      width: 980px
      .sales-board
        background: #fff
        .sales-board-intro
          h2
            padding: 20px
            font-size: 20px
          p
            padding: 10px 20px
            line-height: 1.8
            background: #f7fcff
            color: #999
        .sales-board-form
          padding: 30px 20px
          font-size: 14px
          .sales-board-line
            padding-bottom: 20px
            clear: both
            .sales-board-line-left
              display: inline-block
              width: 100px
            .sales-board-line-right
              display: inline-block
              width: 75%
        .sales-board-desc
          padding: 15px 20px
          border-top: 20px solid #f0f2f5
          h2
            padding-bottom: 15px
            font-size: 20px
          p
            line-height: 1.6
          h3
            padding: 20px 0 10px 0
            font-size: 18px
            font-weight: bold
          li
            padding: 5px 0
          .sales-board-table
            margin-top: 20px
            width: 100%
            th
              background: #4fc08d
              color: #fff
            td
              padding: 15px
              border: 1px solid #f0f2f5
</style>
