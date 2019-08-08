import VueRouter from 'vue-router'  //导入vue-router
//导入组件
import account from '../components/account.vue'  
import search from '../components/search.vue'
import cart from '../components/cart.vue'
import home from '../components/home.vue'
import music from '../components/music.vue'
import image from '../components/image.vue'
import video from '../components/video.vue'
import news from '../components/news.vue'
import newsinfo from '../components/childcomponents/newsinfo.vue'
import imageinfo from '../components/childcomponents/imageinfo.vue'

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
        {path:'/news',component:news},
        {path:'/news/newsinfo/',component:newsinfo},
        {path:'/image/imageinfo/:id',component:imageinfo}
    ],
    linkActiveClass:'mui-active'  //当组件激活时应用的类，如果不修改的话，默认的受router-link-active
})
export default router  //向外暴露router对象