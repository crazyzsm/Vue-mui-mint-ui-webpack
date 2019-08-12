<template>
    <div class="">
        
        <aplayer  :music="musiclist"  >

        </aplayer>
    </div>
</template>
<script>
 import {Toast} from "mint-ui"
 
 import aplayer from "vue-aplayer"

export default {
    data(){
        return{
            id:this.$route.params.id,
            musicMessage:[],
            musiclist:{
                 title:null,
                 author:null,
                 url: null,  
                 pic: null,
                 lrc: null
            },
            path:null
        }
    },
    methods:{
        getMusicMessage(){
            this.$http.get(this.path).then(result=>{
                if(result.body.code===200){
                    this.musiclist.title=result.body.data.songs[0].name
                    this.musiclist.author=result.body.data.songs[0].ar[0].name
                    console.log("成功")
                }else{
                    console.log("失败")
                }
            })
        }
    },
    created(){
        var _this=this;
        _this.path="https://v1.itooi.cn/netease/song?id="+_this.id
        _this.musiclist.url="https://v1.itooi.cn/netease/url?id="+_this.id
        _this.musiclist.pic="https://v1.itooi.cn/netease/pic?id="+_this.id
        _this.musiclist.lrc="https://v1.itooi.cn/netease/lrc?id="+_this.id
        _this.getMusicMessage();
    },
    components:{
        aplayer:aplayer
    }
}
</script>
<style scoped>

</style>



