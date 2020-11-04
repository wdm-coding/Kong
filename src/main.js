import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
// 全部引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入mockjs,就是映入mock文件下的index.js
require('./mock')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
