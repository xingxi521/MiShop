import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import api from './api'
import './Plugins/elementUi.js'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import 'swiper/swiper-bundle.css'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
