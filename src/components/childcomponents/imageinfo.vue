<template>
    <div class="image-container">
        <div class="title">
         <h1 class="title-txt">图片详情</h1>
          <button  @click='matchId' type="button" class="mui-btn mui-btn-primary">查看大图</button>
          <p class="subtitle">
              <span>图片地址：{{this.imageMessage.img}}</span>
              <span>发表时间：{{this.imageMessage.time}}</span>
          </p>
        </div>
          <hr>
          <div>
              <img class="mui-media-object" :src="imageMessage.img">
         </div>
       
    </div>
</template>
<script>
 import {Toast} from "mint-ui"
export default {
    data(){
        return {
            id:this.$route.params.id,
            imageArray:[],
            imageMessage:{}
        }
    },
    methods:{
        getImage(){
            this.$http.post('getImages',{page:1,count:10},{emulateJSON:true}).then(result=>{
               if(result.body.code===200){
                 this.imageArray=result.body.result;
               }else{
                   Toast("失败")
               }
            })
        },
        matchId(){
           for(var i=0;i<this.imageArray.length;i++){
               if(this.imageArray[i].id==this.id){
                   this.imageMessage=this.imageArray[i];
               }
           }
        }
    },

    created(){
     this.getImage();
    },
    beforeMount(){
    this.matchId();
    console.log(this.imageMessage.id);
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
</style>