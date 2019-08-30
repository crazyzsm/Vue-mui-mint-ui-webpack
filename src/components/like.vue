<template>
  <el-collapse class="collapseContent" accordion>
    <el-collapse-item>
      <template slot="title">
        <i class="el-icon-headset"></i>
        音乐
      </template>
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </el-collapse-item>
    <el-collapse-item>
      <template slot="title">
        <i class="el-icon-picture-outline"></i>
        图片
      </template>
      <ul class="mui-table-view mui-grid-view" v-for='item in $store.getters.getImageObj' :key='item.id'>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
           <img class="mui-media-object" :src="item.img">
          <div class="mui-media-body">创建时间:{{item.time}}</div>
        </li>
      </ul>
    </el-collapse-item>
    <el-collapse-item>
      <template slot="title">
        <i class="el-icon-video-camera"></i>
        视频
      </template>
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.collapseContent {
  margin-left: 20px;
}
i {
  font-size: 20px;
  color: #7b68ee;
  margin: 8px;
}
</style>



