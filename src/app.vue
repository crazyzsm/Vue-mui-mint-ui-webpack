<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="Vue项目练手"></mt-header>
    <!-- 主题信息 -->
    <transition>
      <!-- 组件渲染页面入口 -->
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
      <router-link class="mui-tab-item" to="/like">
        <el-badge v-model="value" class="item">
           <span class="mui-icon-extra mui-icon-extra-heart">
        </span>
        <span class="mui-tab-label float">收藏</span>
        </el-badge>
      </router-link>
      <router-link class="mui-tab-item" to="/account">
        <span class="mui-icon mui-icon-person-filled"></span>
        <span class="mui-tab-label">账户设置</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default{
   data(){
	   return{
         value:0
	   }
   }
}
</script>
<style scoped>
header {
  background-color: tan;
}
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
  height: 100%;
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
.glyphicon {
  font-size: 25px;
}
.float {
  font-size: 12px;
  display: block; /*设置为块级元素*/
  margin-top: 0px;
  padding-bottom: 0px;
}
.item{
	font-size: 10px;
	top:2px
}
</style>
