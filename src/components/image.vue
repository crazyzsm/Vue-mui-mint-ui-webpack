<template>
    <div>
        <lunbotu :lunbotuList="lunbotuList"></lunbotu>
       <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in imageList" :key="item.id">
		          <!-- 本该是a链接的位置替换成了div，添加了点击事件goImage -->
                  <!-- 这里为了能够将图片页面详细的显示出来，所以必须要将page参数，作为url传递出去 -->
                    <div  class="text-class" @click="goImage(item.id,page)">
		                <img class="mui-media-object" :src="item.img">
		                <div class="mui-media-body">创建时间：{{item.time}}</div>
                    </div>
                </li>
		    </ul>
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
import {Toast} from "mint-ui"
import lunbotu from './lunbotu.vue'
export default {
    data(){
        return {
            imageList:[],
            lunbotuList:[],
            page:1
        }
    },
    methods:{
        getImage(){
            this.$http.post('https://api.apiopen.top/getImages',{page:this.page,count:10},{emulateJSON:true}).then(result=>{
                if(result.body.code===200){
                    this.imageList=result.body.result
                    for(let i=0;i<3;i++){
                        this.lunbotuList=this.lunbotuList.concat(result.body.result[i].img)
                    }
                }else{
                   Toast("失败")
                }
            })
        },
        getNextPage(){
            this.page=this.page+1;
              this.$http.post('https://api.apiopen.top/getImages',{page:this.page,count:10},{emulateJSON:true}).then(result=>{
                if(result.body.code===200){
                    this.imageList=result.body.result
                }else{
                   Toast("失败")
                }
            })
        },
        getPrePage(){
            if(this.page==1){
                Toast("这是第一页。。")
                return { }
            }
            this.page=this.page-1;
              this.$http.post('https://api.apiopen.top/getImages',{page:this.page,count:10},{emulateJSON:true}).then(result=>{
                if(result.body.code===200){
                    this.imageList=result.body.result
                }else{
                   Toast("失败")
                }
            })
        },
        goImage(id,page){
            // name在router.js中定义，params用于传递参数
            this.$router.push({name:'ImageInfo',params:{id:id,page:page}})
        }
    },
    created(){
        this.getImage();
    },
    components:{
        lunbotu
    }
}
</script>
<style scoped>
.text-class .mui-media-body{
    font-size: 20px;
    color: red;
}
.button-container{
    display: flex;
    justify-content: space-between;
}
.mui-btn{
    margin-bottom: 10px
}

</style>