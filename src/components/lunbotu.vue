<template>
<!-- 轮播图子组件 将轮播图组件单独分离开，因为在music界面和image界面都需要-->
  <div class="block">
    <el-carousel height="1000px">
      <el-carousel-item v-for="item in lunbotuList" :key="item">
        <img  :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>
<script>
export default {
    props:["lunbotuList"]
}
</script>


<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  img{
    height: 100%;
    width: 100%
  }
</style>