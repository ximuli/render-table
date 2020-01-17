import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import RenderTable from './components/render-table/index'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(RenderTable)

new Vue({
  render: h => h(App),
}).$mount('#app')
