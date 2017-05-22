<template>
  <div class="order-wrapper">
    <h3>您的产品</h3>
    <div class="order-list">
      <div class="order-option">
        选择产品：
        <selection :selections="products" @changeValue="changeValue"></selection>
      </div>
      <div class="order-option">
        开始日期：
        <datepicker class="datepicker" v-model="queryObj.startDate" format="yyyy-MM-dd"></datepicker>
      </div>
      <div class="order-option">
        结束日期：
        <datepicker class="datepicker" v-model="queryObj.endDate" format="yyyy-MM-dd"></datepicker>
      </div>
      <div class="order-option">
        关键词：
        <input v-model.lazy="queryObj.queryText" @keydown.enter="queryResult" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table v-if="result">
        <tr>
          <th v-for="item in tableHeads">{{item.label}}</th>
        </tr>
        <tr v-for="item in result">
          <td v-for="head in tableHeads">{{item[head.key]}}</td>
        </tr>
      </table>
      <div v-if="!result">没有查询到内容！</div>
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  import selection from '../components/base/selection'
  export default {
    components: {
      selection,
      Datepicker
    },
    data () {
      return {
        result: '',
        queryObj: {
          queryText: '',
          productId: 0,
          startDate: new Date(),
          endDate: new Date()
        },
        tableHeads: [
          {
            label: '订单号',
            key: 'orderId'
          },
          {
            label: '购买产品',
            key: 'product'
          },
          {
            label: '版本类型',
            key: 'version'
          },
          {
            label: '有效时间',
            key: 'period'
          },
          {
            label: '购买日期',
            key: 'date'
          },
          {
            label: '数量',
            key: 'buyNum'
          },
          {
            label: '总价',
            key: 'amount'
          }
        ],
        products: [
          {
            label: '数据统计',
            value: 0
          },
          {
            label: '数据预测',
            value: 1
          },
          {
            label: '流量分析',
            value: 2
          },
          {
            label: '广告发布',
            value: 3
          }
        ],
        list: [
          {
            orderId: 'ddj123',
            product: '数据统计',
            version: '高级版',
            period: '1年',
            buyNum: 2,
            date: '2016-10-10',
            amount: '500元'
          },
          {
            orderId: 'yuj583',
            product: '流量分析',
            version: '户外版',
            period: '3个月',
            buyNum: 1,
            date: '2016-5-2',
            amount: '2200元'
          },
          {
            orderId: 'pmd201',
            product: '广告发布',
            version: '商铺版',
            period: '3年',
            buyNum: 12,
            date: '2016-8-3',
            amount: '7890元'
          }
        ]
      }
    },
    methods: {
      changeValue (item) {
        this.queryObj.productId = item.value
      },
      queryResult () {
        this.result = this.list
      }
    },
    mounted () {
      console.log(this.$store)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .order-wrapper
    margin: 20px auto
    width: 1200px
    min-height: 800px
    overflow: hidden
    h3
      margin-bottom: 20px
      font-size: 20px
      font-weight: bold
    .order-list
      .order-option
        display: inline-block
        padding-left: 15px
        &:first-child
          padding-left: 0
        .datepicker
          display: inline-block
        .order-query
          height: 25px
          line-height: 25px
          border: 1px solid #e3e3e3
          outline: none
          text-indent: 10px
    .order-list-table
      margin-top: 20px
      table
        width: 100%
        background: #fff
        th, td
          padding: 10px 0
          border: 1px solid #e3e3e3
          text-align: center
        th
          background: #4fc08d
          color: #fff
          cursor: pointer
          &.active
            background: #35495e
</style>
