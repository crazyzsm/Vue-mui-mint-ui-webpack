<template>
  <div>
    <video class="videoContainer" src="http://v.d9y.net/vip/?url=https://www.iqiyi.com/v_19rrcusdf0.html" controls="controls"></video>
    <el-input placeholder="请输入播放地址的url" prefix-icon="el-icon-video-camera" v-model="videoUrl"></el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoPlayUrl: "",
      videoUrl:'',
      inderfaceUrl:'http://v.d9y.net/vip/?url=',
    };
  },
  beforeUpdate(){
      var _this=this;
      _this.videoPlayUrl=_this.inderfaceUrl+_this.videoUrl;
  }
};
</script>
<style scoped>
.videoContainer{
   margin: 20px 
}
</style>