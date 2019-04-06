import Vue from 'vue'
import App from './App.vue'

//完整版引入mint-ui(薄荷)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './lib/mui/css/mui.min.css'
// 引入部分组件
// import {button} from 'mint-ui'
// Vue.component("mybtn",button)
// Vue
const vm =new Vue({
  el:"#app",
  render:function (createElement){
    return createElement(App)
  }
})
