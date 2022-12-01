import Vue from 'vue'
import App from './App.vue'

// 导入路由模块
import router from '@/router/index.js'
// 按需引入element-ui
import element from './components/elementui'
Vue.use(element)

// 意思是阻止你显示显示生产模式的消息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 使用路由
  router
}).$mount('#app')
