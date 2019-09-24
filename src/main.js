import Vue from 'vue'
import App from './App.vue'
// import echarts from '../node_modules/echarts/lib/echarts'
// import '../node_modules/echarts/lib/component/tooltip'
// import '../node_modules/echarts/lib/component/title'
// import '../node_modules/echarts/lib/component/toolbox'
import echarts from '../node_modules/echarts/lib/chart/line'

Vue.config.productionTip = false
Vue.use(echarts)

new Vue({
  render: h => h(App),
}).$mount('#app')
