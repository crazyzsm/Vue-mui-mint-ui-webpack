<template>
    <div class="newsinfo-container">
        <div class="subcontainer">
        <p class="title">标题</p>
        <p class="subtitle">
        <span>发表时间：</span>
        <span>来源：网易新闻</span>
        </p>
        <hr>
        </div>
        <div class="content">

        </div>
    </div>
</template>
<script>
 import {Toast} from "mint-ui"
export default {
   data(){
       return {
    
       }
},
created(){
    this.getnewsinfo()
},
methods:{
    getnewsinfo(){
        this.$http.get('http://mini.eastday.com/mobile/170105110355287.html?qid=juheshuju').then(result=>{
            if(result.body.code===200){
                console.log("成功")
            }else{
               Toast("失败")
            }
        })
    }
}
}
</script>
<style scoped>
 .newsinfo-container{
  padding: 0 5px;
 }
 .title{
     font-size: 18px;
     text-align: center;
     color: red;
 }
 .subtitle{
     display: flex;
     justify-content: space-between;
     color: cornflowerblue;
 }
</style>



