<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.path">
					<a :href="item.path">
						<img class="mui-media-object mui-pull-left" :src="item.image">
						<div class="mui-media-body">
							{{item.title}}
							<p class="mui-ellipsis">{{item.passtime}}</p>
						</div>
					</a>
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
    data:function(){
        return{
         newsList:[],
         page:1
        }
    },
    methods:{
        getData(){

            this.$http.post('getWangYiNews',{page:this.page,count:'20'},{emulateJSON:true}).then(result=>{
                if(result.body.code===200){
                this.newsList=result.body.result
                }else{
                    Toast('失败')
                }
            })
        },
        getNextPage(){
            this.page=this.page+1;
            this.$http.post('getWangYiNews',{page:this.page,count:'20'},{emulateJSON:true}).then(result=>{
            if(result.body.code===200){
                this.newsList=result.body.result
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
                this.$http.post('getWangYiNews',{page:this.page,count:'20'},{emulateJSON:true}).then(result=>{
                if(result.body.code===200){
                    this.newsList=result.body.result
                }else{
                    Toast("失败")
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
.button-container{
    display: flex;
    justify-content: space-between;
}
.mui-btn{
    height: 30px;
    margin-bottom: 10px;
    margin-top: 10px;
}
</style>