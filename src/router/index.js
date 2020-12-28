import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeLayout from '../views/HomeLayout'//首页、详情布局
import Home from '../views/Home'//首页
import Details from '../views/Details'//详情页
import Product from '../views/Product'//产品站
import Login from '../views/Login'//登陆页面
import ShopCar from '../views/ShopCar'//购物车页面
import Order from '../views/Order'//订单类页面布局
import OrderConfirm from '../views/Order/OrderConfirm'//确认订单页面
import OrderPay from '../views/Order/OrderPay'//订单支付页面
import AliPay from '../views/Order/OrderPay/AliPay'//支付宝支付等待页面
import OrderList from '../views/Order/OrderList'//订单列表
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeLayout',
    component: HomeLayout,
    children:[
      {
        path:'/',
        name:'Home',
        component:Home
      },
      {
        path:'/details/:id',
        name:'Details',
        component:Details
      },
      {
        path:'/product/:id',
        name:'Product',
        component:Product
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/shopcar',
    name: 'ShopCar',
    component: ShopCar,
  },
  {
    path:'/order',
    name:'OrderLayout',
    component:Order,
    children:[
      {
        path:'/order',
        name:'order',
        component:OrderConfirm
      },
      {
        path:'orderpay/:id',
        name:'orderpay',
        component:OrderPay
      },
      {
        path:'alipay/:id',
        name:'alipay',
        component:AliPay
      },
      {
        path:'orderlist',
        name:'orderlist',
        component:OrderList
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
