<template>
    <div class="image-container">
        <div class="title">
         <h1 class="title-txt">图片详情</h1>
          <p class="subtitle">
              <span>图片地址：{{this.imageMessage.img}}</span>
              <span>发表时间：{{this.imageMessage.time}}</span>
          </p>
        </div>
          <hr>
          <div class="img-container">
              <img class="mui-media-object" :src="imageMessage.img">
         </div>
       
    </div>
</template>
<script>
 import {Toast} from "mint-ui"

export default {
    data(){
        return {
            id:this.$route.params.id,    //通过$route.params.id得到url的id，如果是?的形式那么就用$route.query得到参数
                                         //每一个组件都有一个路由配置的属性是$route
            page:this.$route.params.page,//获取page信息                             
            imageArray:[],    //查找出来的图片数组
            imageMessage:{},    //得到当前图片的信息
        }
    },
    methods:{
        getImage(){
            this.$http.post('https://api.apiopen.top/getImages',{page:this.page,count:10},{emulateJSON:true}).then(result=>{
               if(result.body.code===200){
                 this.imageArray=result.body.result;
                 this.matchId()   //在异步操作中渲染
               }else{
                   Toast("失败")
               }
            })
        },
        matchId(){  //通过检索匹配id得到图片信息
           for(var i=0;i<this.imageArray.length;i++){
               if(this.imageArray[i].id==this.id){
                   this.imageMessage=this.imageArray[i];
               }
           }
           this.img=this.imageMessage.img
        }
    },

    created(){
        this.getImage();
    }
}
</script>
<style scoped>
 .image-container{
     margin: 10px
 }
 .title{
     text-align: center;
 }
 .subtitle{
     display: flex;
     justify-content: space-between;
     color: blue;
 }
 .title-txt{
  color: crimson
 }
 .mui-btn{
     padding-bottom: 10px
 }
 .img-container{
     display: flex;
     justify-content: center;
     align-content: center;
 }
</style>