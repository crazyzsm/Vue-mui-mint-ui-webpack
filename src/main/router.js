import VueRouter from 'vue-router'  //导入vue-router
//导入组件
import account from '../components/account.vue'  
import search from '../components/search.vue'
import cart from '../components/cart.vue'
import home from '../components/home.vue'
import music from '../components/childcomponents/music.vue'
import image from '../components/childcomponents/image.vue'
import video from '../components/childcomponents/video.vue'
import cloud from '../components/childcomponents/cloud.vue'


var router=new VueRouter({
    routes:[  //制作路由规则
        {path:'/account',component:account},
        {path:'/search',component:search},
        {path:'/cart',component:cart},
        {path:'/home',component:home},
        {path:'/',redirect:'/home'},
        {path:'/music',component:music},
        {path:'/image',component:image},
        {path:'/video',component:video},
        {path:'/cloud',component:cloud},
    ],
    linkActiveClass:'mui-active'  //当组件激活时应用的类，如果不修改的话，默认的受router-link-active
})
export default router  //向外暴露router对象