<template>
    <div>
       <div class="mui-card" v-for="item in songList" :key="item.id">
				<div class="mui-card-header mui-card-media">
					<img :src="item.album.picUrl">
					<div class="mui-media-body">
					  	{{item.name}}
						<p>{{item.artists[0].name}}</p>
					</div>
				</div>
				<div class="mui-card-content">
					<div @click="getMusicMessageUrl(item.id)"><img :src="item.album.picUrl" alt="" width="100%"></div>
				</div>
			
			</div>
    </div>
</template>
<script>
export default {
   data(){
       return {
         id:this.$route.params.id,
         songList:[]
       }
},
methods:{
    getMusicinfo(){
        this.$http.post("https://v1.itooi.cn/netease/songList?",{id:this.id},{emulateJSON:true}).then(result=>{
            if(result.body.code===200){
                console.log("成功")
                this.songList=result.body.data.tracks
            }else{
                console.log("失败")
            }
        })
    },
    getMusicMessageUrl(id){
        this.$router.push({name:'musicMessage',params:{id:id}})
    }
} ,
created(){
    this.getMusicinfo()
}
}
</script>
<style scoped>

</style>



