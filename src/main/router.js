import VueRouter from 'vue-router'  //导入vue-router
//导入组件
import account from '../components/account.vue'  
import search from '../components/search.vue'
import cart from '../components/cart.vue'
import home from '../components/home.vue'
import music from '../components/childcomponents/music.vue'


var router=new VueRouter({
    routes:[  //制作路由规则
        {path:'/account',component:account},
        {path:'/search',component:search},
        {path:'/cart',component:cart},
        {path:'/home',
        component:home,
         children:[
             {path:'music',component:music}
         ]
        },
        {path:'/',redirect:'/home'}
    ],
    linkActiveClass:'mui-active'  //当组件激活时应用的类，如果不修改的话，默认的受router-link-active
})
export default router  //向外暴露router对象