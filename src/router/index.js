import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/pages/index'
import detailPage from '@/pages/detail'
import analysisPage from '@/pages/detail/analysis'
import forecastPage from '@/pages/detail/forecast'
import countPage from '@/pages/detail/count'
import publishPage from '@/pages/detail/publish'
import orderListPage from '@/pages/orderlist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
    },
    {
      path: '/detail',
      redirect: '/detail/analysis',
      component: detailPage,
      children: [
        {
          path: 'analysis',
          component: analysisPage
        },
        {
          path: 'forecast',
          component: forecastPage
        },
        {
          path: 'count',
          component: countPage
        },
        {
          path: 'publish',
          component: publishPage
        }
      ]
    },
    {
      path: '/orderlist',
      component: orderListPage
    }
  ]
})
