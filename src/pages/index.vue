<template>
  <div class="index-wrapper">
    <div class="index-left">
      <product :list="productList"></product>
      <news :list="newsList"></news>
    </div>
    <div class="index-right">
      <slide :slides="slides" :invTime="inv"></slide>
      <board :list="boardList"></board>
    </div>
  </div>
</template>

<script>
  import product from '../components/product'
  import news from '../components/news'
  import slide from '../components/slide'
  import board from '../components/board'
  export default {
    components: {
      product,
      news,
      slide,
      board
    },
    data () {
      return {
        inv: 2000,
        productList: {
          pc: {
            title: 'PC产品',
            list: [
              {
                name: '数据统计',
                url: 'http://starcraft.com'
              },
              {
                name: '数据预测',
                url: 'http://warcraft.com'
              },
              {
                name: '流量分析',
                url: 'http://overwatch.com',
                hot: true
              },
              {
                name: '广告发布',
                url: 'http://hearstone.com'
              }
            ]
          },
          app: {
            title: '手机应用类',
            last: true,
            list: [
              {
                name: '91助手',
                url: 'http://weixin.com'
              },
              {
                name: '产品助手',
                url: 'http://twitter.com',
                hot: true
              },
              {
                name: '智能地图',
                url: 'http://maps.com'
              },
              {
                name: '团队语音',
                url: 'http://phone.com'
              }
            ]
          }
        },
        slides: [
          {
            src: require('../assets/slides/pic1.jpg'),
            title: 'xxx1',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/slides/pic2.jpg'),
            title: 'xxx2',
            href: 'detail/count'
          },
          {
            src: require('../assets/slides/pic3.jpg'),
            title: 'xxx3',
            href: 'detail/publish'
          },
          {
            src: require('../assets/slides/pic4.jpg'),
            title: 'xxx4',
            href: 'detail/forecast'
          }
        ],
        newsList: [],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ]
      }
    },
    mounted () {
      this.getNewList()
    },
    methods: {
      getNewList () {
        this.$http.get('api/getNewsList')
          .then((res) => {
            this.newsList = res.data.data
          }, (err) => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .index-wrapper
    width: 1200px
    margin: 0 auto
    overflow: hidden
    .index-left
      float: left
      width: 300px
      text-align: left
    .index-right
      float: left
      width: 900px
</style>
