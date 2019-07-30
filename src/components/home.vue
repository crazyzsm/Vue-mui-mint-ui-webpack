<template>
    <div>
		<mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
     <mt-swipe-item>2</mt-swipe-item>
     <mt-swipe-item>3</mt-swipe-item>
	  <mt-swipe-item>4</mt-swipe-item>
      </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/music">
		                    <span class="glyphicon glyphicon-music"></span>
		                    <div class="mui-media-body">音乐</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		       
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



