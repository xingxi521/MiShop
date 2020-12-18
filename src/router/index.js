import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeLayout from '../views/HomeLayout'//首页、详情布局
import Home from '../views/Home'//首页
import Details from '../views/Details'//详情页
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
        path:'/details',
        name:'Details',
        component:Details
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
