<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.path">
					<a :href="item.path" class="">
						<img class="mui-media-object mui-pull-left" :src="item.image">
						<div class="mui-media-body">
							{{item.title}}
							<p class="mui-ellipsis">{{item.passtime}}</p>
						</div>
					</a>
				</li>

			</ul>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
         newsList:[]
        }
    },
    methods:{
        getData(){

            this.$http.post('getWangYiNews',{page:'1',count:'20'},{emulateJSON:true}).then(result=>{
              if(result.body.code===200){
                this.newsList=result.body.result
              }else{
                  console.log('失败')
              }
            })
        }
    },
    created(){
        this.getData();
    }
}
</script>
<style scoped>

</style>