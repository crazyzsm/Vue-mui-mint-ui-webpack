<template>
    <div>
        <lunbotu :lunbotuList="lunbotuList" :isfull="true"></lunbotu>
       <div class="mui-card" v-for="item in musicList" :key="item.id">
				<div class="mui-card-header mui-card-media">
					<img :src="item.creator.avatarUrl">
					 <div class="mui-media-body">
						{{item.creator.nickname}}
						<p>{{item.name}}</p>
					</div>
				</div>
				<div class="mui-card-content">
					<div @click="getMusicUrl(item.id)">
                         
                    <img :src="item.coverImgUrl" alt="" width="100%">
                    </div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">{{item.playCount}}次播放</a>
					<a class="mui-card-link">{{item.subscribedCount}}个订阅</a>
					<a class="mui-card-link">{{item.commentCount}}条评论</a>
				</div>
		</div>
        <hr>
         <div class="button-container">
                <button type="button" class="mui-icon mui-icon-back  mui-btn mui-btn-primary" @click="getPrePage">
		            上一页
		        </button>
                 <button type="button" class="mui-icon mui-icon-forward mui-btn mui-btn-primary" @click="getNextPage">
		            下一页
		        </button>
            </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import lunbotu from './lunbotu.vue'   //引入相关的轮播图子组件
export default {
    data(){  
        return {
            musicList:[],
            lunbotuList:[],
            page:0
        }
    },
    components:{   //在父组件的components中定义要引用的子组件名称
      lunbotu
    },
    methods:{
        getMusic(){
                this.$http.post('https://v1.itooi.cn/netease/songList/hot?cat=%E5%85%A8%E9%83%A8&pageSize=20',{page:this.page},{emulateJSON:true}).then(result=>{
                if(result.body.code===200){
                    this.musicList=result.body.data;
                    for(let i=0;i<3;i++){
                      this.lunbotuList= this.lunbotuList.concat(result.body.data[i].coverImgUrl)                   
                       }
                    
                }else{
                    console.log("失败")
                }
                })
        },
        getPrePage(){   //重新获取数据并渲染
            if(this.page==0){
                Toast("已经是第一页...")
                return { }
            }
            this.page=this.page-1
              this.$http.post('https://v1.itooi.cn/netease/songList/hot?cat=%E5%85%A8%E9%83%A8&pageSize=20',{page:this.page},{emulateJSON:true}).then(result=>{
                if(result.body.code===200){
                    this.musicList=result.body.data;
                }else{
                    console.log("失败")
                }
                })

        },
        getNextPage(){
            console.log("进入");
            this.page=this.page+1;
              this.$http.post('https://v1.itooi.cn/netease/songList/hot?cat=%E5%85%A8%E9%83%A8',{page:this.page,pageSize:20},{emulateJSON:true}).then(result=>{
                if(result.body.code===200){
                    this.musicList=result.body.data;
                    console.log("成功")
                }else{
                    console.log("失败")
                }
                })
        },
        getMusicUrl(id){
            this.$router.push({name:"musicInfo",params:{id:id}})
        }
    },
    created(){
            this.getMusic();
        }
}
</script>
<style scoped>
.button-container{
    display: flex;
    justify-content: space-between;
}
.mui-btn{
    margin-bottom: 10px
}
</style>