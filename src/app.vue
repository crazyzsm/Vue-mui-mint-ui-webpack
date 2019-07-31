<template>
   <div class='app-container'>
      <!-- 顶部 -->
     <mt-header fixed title="便民生活"></mt-header>
      <!-- 主题信息 -->
	    <transition>
			<router-view></router-view>
		</transition>
      <!-- 底部 -->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon-extra mui-icon-extra-heart">
					<!-- <span class="mui-badge">9</span> -->
					</span>
				<span class="mui-tab-label float">收藏</span>
			</router-link>
			<router-link class="mui-tab-item" to="/account">
				<span class="mui-icon mui-icon-person-filled"></span>
				<span class="mui-tab-label">账户设置</span>
			</router-link>
		</nav>
   </div>
</template>
<script>

 
</script>
<style scoped>
header{
	background-color:tan
}
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.glyphicon{
	font-size: 25px
}
.float{
	font-size: 12px;
	display: block;    /*设置为块级元素*/
	margin-top: 0px;
	padding-bottom: 0px;
}

</style>
