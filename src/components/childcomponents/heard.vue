<template>
    <span class="heard glyphicon glyphicon-heart" @click="putLikeObj(likeobj)"></span>
</template>
<script>
import {Toast} from 'mint-ui'
// 这个组件是在音乐，歌单的封面上显示出一个爱心按钮。当点击时，去改变store.state的值，实现点击添加到我的收藏
export default {
   props:['likeobj'],
   methods:{
       putLikeObj(obj){
        Toast("已添加到收藏");
         this.$store.commit('addImageObj',obj)
       }
   }
}
</script>
<style scoped>
.heard{
    z-index: 99;
    position: absolute;
    font-size: 50px;
    color: #fcb0f9;
    margin-top:10px;
    left: 288px; 
}
</style>