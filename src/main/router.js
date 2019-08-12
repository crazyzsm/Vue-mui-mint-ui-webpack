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
import musicinfo from '../components/childcomponents/musicinfo.vue'  //导入相关的组件
import musicmessage from '../components/childcomponents/subcomponents/musicmessage.vue'

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
        // 这里使用:page传递image的page页数，:id传递图片的id
        {path:'/image/imageinfo/:page/:id',component:imageinfo,name:"ImageInfo"},
        {path:'/music/musicinfo/:id',component:musicinfo},
        {path:'/music/musicinfo/:id/:id',component:musicmessage}
    ],
    linkActiveClass:'mui-active'  //当组件激活时应用的类，如果不修改的话，默认的受router-link-active
})
export default router  //向外暴露router对象