// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import * as api from './common/api'
import * as echarts from 'echarts';
import {goPageTop} from './common/base'
import store from './store/index'


Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$echarts = echarts
Vue.prototype.goPageTop = goPageTop;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
