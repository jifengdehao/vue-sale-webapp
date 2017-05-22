<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">购买数量：</div>
        <div class="sales-board-line-right">
          <counter @changeValue="changeValue('number', $event)"></counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">产品类型：</div>
        <div class="sales-board-line-right">
          <selection @changeValue="changeValue('buyType', $event)" :selections="buyTypes"></selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">有效时间：</div>
        <div class="sales-board-line-right">
          <chooser @changeValue="changeValue('period', $event)" :selections="periodList"></chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">产品版本：</div>
        <div class="sales-board-line-right">
          <multi-chooser @changeValue="changeValue('version', $event)" :selections="versionList"></multi-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">总价：</div>
        <div class="sales-board-line-right">{{price}}</div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left"></div>
        <div class="sales-board-line-right">
          <div class="button" @click="buy">立即购买</div>
        </div>
      </div>
    </div>
    <div class="sales-board-desc">
      <h2>产品说明</h2>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>
      <h3>用户行为指标</h3>
      <ul>
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>
      <h3>浏览网站方式</h3>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
    </div>
    <v-dialog :isShow="isShowPay" @closeDialog="close">
      <table class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>有效时间</th>
          <th>产品版本</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{salesObj.number}}</td>
          <td>{{salesObj.buyType.label}}</td>
          <td>{{salesObj.period.label}}</td>
          <td>
            <span v-for="item in salesObj.version"> {{item.label}} </span>
          </td>
          <td>{{price}}</td>
        </tr>
      </table>
      <bank-list @chooseBank="chooseBank"></bank-list>
      <div class="button buy-dialog-btn" @click="confirmBuy">确认购买</div>
    </v-dialog>
    <v-dialog :isShow="isShowError">支付失败</v-dialog>
    <check-order :isShowCheck="isShowCheck" @closeCheck="closeCheck"></check-order>
  </div>
</template>

<script>
  import vDialog from '../../components/dialog'
  import bankList from '../../components/bankList'
  import selection from '../../components/base/selection'
  import chooser from '../../components/base/chooser'
  import multiChooser from '../../components/base/multiChooser'
  import counter from '../../components/base/counter'
  import checkOrder from '../../components/checkOrder'
  export default {
    data () {
      return {
        isShowError: false,
        isShowPay: false,
        isShowCheck: false,
        price: 0,
        salesObj: {
          version: '',
          period: '',
          buyType: '',
          number: ''
        },
        versionList: [
          {
            label: '客户版',
            value: 0
          },
          {
            label: '代理商版',
            value: 1
          },
          {
            label: '专家版',
            value: 2
          }
        ],
        periodList: [
          {
            label: '半年',
            value: 0
          },
          {
            label: '一年',
            value: 1
          },
          {
            label: '三年',
            value: 2
          }
        ],
        buyTypes: [
          {
            label: '入门版',
            value: 0
          },
          {
            label: '中级版',
            value: 1
          },
          {
            label: '高级版',
            value: 2
          }
        ],
        bankId: ''
      }
    },
    mounted () {
      this.salesObj = {
        version: [this.versionList[0]],
        period: this.periodList[0],
        buyType: this.buyTypes[0],
        number: 1
      }
      this.getPrice()
    },
    methods: {
      confirmBuy () {
        let versionArr = this.salesObj.version.map((item) => {
          return item.value
        })
        let params = {
          buyNumber: this.salesObj.number,
          buyType: this.salesObj.buyType.value,
          period: this.salesObj.period.value,
          version: versionArr.join(','),
          bankId: this.bankId
        }
        console.log(params)
        this.isShowPay = false
        this.isShowCheck = true
        // this.isShowError = true
      },
      closeCheck () {
        this.isShowCheck = false
      },
      buy () {
        this.isShowPay = true
      },
      close () {
        this.isShowPay = false
      },
      changeValue (attr, value) {
        this.salesObj[attr] = value
        this.getPrice()
      },
      chooseBank (item) {
        this.bankId = item.id
      },
      getPrice () {
        let versionArr = this.salesObj.version.map((item) => {
          return item.value
        })
        let params = {
          buyNumber: this.salesObj.number,
          buyType: this.salesObj.buyType.value,
          period: this.salesObj.period.value,
          version: versionArr.join(',')
        }
        let price = params.buyNumber * ((params.buyType + 1) * 100) * (params.period + 1) * params.version.length
        this.price = price
      }
    },
    components: {
      selection,
      chooser,
      multiChooser,
      counter,
      vDialog,
      bankList,
      checkOrder
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .buy-dialog-table
    width: 100%
    margin-bottom: 20px
    th, td
      padding: 5px 0
      border: 1px solid #e3e3e3
      text-align: center
    th
      background: #4fc08d
      color: #fff
</style>
