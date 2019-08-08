//在webpack.config.js中会自动将main.js打包后搭载到index上，我们一般在此页面编写逻辑

import Vue from "vue"
import app from './app.vue'  //引入app
import './lib/css/mui.css'  //引入mui样式
import {Header} from 'mint-ui'  //引入mui的header
import router from './main/router.js'    //引入我们编写的路由对象
import VueRouter from 'vue-router'   //引入vue-router
import './lib/css/icons-extra.css'  //引入图标样式
import './lib/fonts/mui-icons-extra.ttf'  //引入字体
import { Swipe, SwipeItem } from 'mint-ui';  //轮播图组件的引用
import VueResource from 'vue-resource'   //引用vue-rousource，可以获取数据，类似Ajax
import 'bootstrap/dist/css/bootstrap.css'  //引入bootstrap

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(VueRouter)  //注册vuerouter
Vue.use(VueResource)  //注册vueresource
Vue.http.options.root='https://api.apiopen.top'   //设置访问的根路径


Vue.component(Header.name,Header)
var vm=new Vue({
    el:'#app',
    render:c=>c(app),  //渲染app
   router
})