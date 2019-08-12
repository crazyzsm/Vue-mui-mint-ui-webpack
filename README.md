# 一个api接口实现网站，一个Vue项目的构建，动态路由设置，vue-resource获取接口的数据
#  实现功能：首页轮播图+首页：音乐(使用vue-aplayer播放)，图片，新闻，视频等功能
##  使用Vue+webpack+mui+mint-ui设计样式，部分样式自己设计，自己修改
###  使用vue-resource获取接口数据
####  音乐接口：https://messoer.github.io/mess-api-doc/#/music/netease?id=%e9%9f%b3%e4%b9%90%e8%af%a6%e6%83%85
####  图片接口：https://api.apiopen.top/getImages
####  新闻接口：https://api.apiopen.top/getWangYiNews
####  Vue-Aplayer：https://vue-aplayer.js.org/


#                    项目创建过程中的错误与改进
####在编写音乐详情组件时，路由地址显示正常，但是显示"Cannot read property '$createElement' of undefined"错误
####形成原因是：在router.js中编写的路由规则{path:'/music/musicinfo/:id/:id',components:musicmessage}  component多了一个s

####vue-aplayer的使用中url必须要在data中初始化才能继续使用，否则会出现Invalid prop: custom validator check failed for prop "music"错误
####在data中提前指定url的路径，使用id:this.$route.params.id来获取id，将地址与id拼接，但是这时候又出现了错误，this.id显示的值为：undefined
####这就涉及到了我下面遇到得另一个问题了，this的指向问题

#          Vue中data的this指向问题
####在musicmessage.vue中，我想在组件的内部data中将url，pic，lrc初始化，初始化形式为:"http..."+this.id，但是发现this.id的值为undefined
####通过实验和查阅相关文档知道:在Vue组件中data的this指向的确实是改组件本身，但是一旦形如this.id，即通过this引用自身的属性时，就会出现           undefined，在Vue实例中data，this指向的是window。
####形成原因(个人猜测)：在url:this.id的过程中发生了隐式this绑定丢失
####解决办法：
######1、在created()中，保存当前this初次指向对象，在钩子函数中的this永远指向组件本身，var _this=this
######2、在created()中，初始化url,pic,lrc，this已经保存到_this了，所以this用_this取代