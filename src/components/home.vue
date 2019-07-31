<template>
    <div>
		<mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
     <mt-swipe-item>2</mt-swipe-item>
     <mt-swipe-item>3</mt-swipe-item>
	  <mt-swipe-item>4</mt-swipe-item>
      </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/music">
		                    <span class="glyphicon glyphicon-music"></span>
		                    <div class="mui-media-body">音乐</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/image">
		                    <span class="glyphicon glyphicon-picture"></span>
		                    <div class="mui-media-body">图片</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/cloud">
		                    <span class="glyphicon glyphicon-cloud"></span>
		                    <div class="mui-media-body">天气</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/video">
		                    <span class="glyphicon glyphicon-film"></span>
		                    <div class="mui-media-body">视频推荐</div></router-link></li>
		         
		       
				</ul>
				<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
</template>
<script>

		

export default {
    data(){
     return {
		 lunbotuList:[]
	 }
	}
}
</script>
<style scoped>

.mint-swipe{
 height: 500px;
}
.mint-swipe-item:nth-child(1){
	background:url('../images/背景1.png');
	background-size: 100% 100%
}
.mint-swipe-item:nth-child(2){
	background:url('../images/背景2.jpg');
	background-size: 100% 100%
}
.mint-swipe-item:nth-child(3){
	background:url('../images/背景3.png');
	background-size: 100% 100%
}
.mint-swipe-item:nth-child(4){
	background:url('../images/背景4.png');
	background-size: 100% 100%
}
.glyphicon{
	font-size: 30px
}

</style>



