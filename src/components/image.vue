<template>
    <div>
       <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in imageList" :key="item.id">
		            <router-link :to="'/image/imageinfo/'+item.id" class="text-class">
		                <img class="mui-media-object" :src="item.img">
		                <div class="mui-media-body">创建时间：{{item.time}}</div></router-link>
                </li>
		    </ul>
            <div class="button-container">
                <button type="button" class="glyphicon glyphicon-chevron-left  mui-btn mui-btn-primary" @click="getPrePage">
		            上一页
		        </button>
                 <button type="button" class="glyphicon glyphicon-chevron-right mui-btn mui-btn-primary" @click="getNextPage">
		            下一页
		        </button>
            </div>
            
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            imageList:[],
            page:1
        }
    },
    methods:{
        getImage(){
            this.$http.post('getImages',{page:this.page,count:10},{emulateJSON:true}).then(result=>{
                if(result.body.code===200){
                    this.imageList=result.body.result
                }else{
                   Toast("失败")
                }
            })
        },
        getNextPage(){
            this.page=this.page+1;
              this.$http.post('getImages',{page:this.page,count:10},{emulateJSON:true}).then(result=>{
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
              this.$http.post('getImages',{page:this.page,count:10},{emulateJSON:true}).then(result=>{
                if(result.body.code===200){
                    this.imageList=result.body.result
                }else{
                   Toast("失败")
                }
            })
        }
    },
    created(){
        this.getImage();
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
    height: 30px;
    margin-bottom: 10px
}
</style>