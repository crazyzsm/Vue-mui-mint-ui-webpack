<template>
  <div class="music-container">
    <div class="music-body">
      <el-container>
        <el-header>
          {{musiclist.title}}
        </el-header>
        <el-container>
          <el-container>
            <el-main height="500px">
              <img :src="musiclist.pic" style="width:100%;height:100%">
            </el-main>
            <el-footer height="100px">
              <div class="music-play">
                <aplayer :music="musiclist" showLrc style="width:100%"></aplayer>
              </div>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

import aplayer from "vue-aplayer";

export default {
  data() {
    return {
      id: this.$route.params.id,
      musicMessage: [],
      musiclist: {
        title: null,
        author: null,
        url: null,
        pic: null,
        lrc: null
      },
      path: null
    };
  },
  methods: {
    getMusicMessage() {
      this.$http.get(this.path).then(result => {
        if (result.body.code === 200) {
          this.musiclist.title = result.body.data.songs[0].name;
          this.musiclist.author = result.body.data.songs[0].ar[0].name;
          this.musicMessage=result.body.data.songs
          console.log("成功");
        } else {
          console.log("失败");
        }
      });
    },
    // getMusicLrc(){
    //   this.$http.get("https://v1.itooi.cn/netease/lrc?id=1324016837").then(result=>{
    //    this.musicLrc=result.body
    //   })
    // }
  },
  created() {
    var _this = this;
    _this.path = "https://v1.itooi.cn/netease/song?id=" + _this.id;
    _this.musiclist.url = "https://v1.itooi.cn/netease/url?id=" + _this.id;
    _this.musiclist.pic = "https://v1.itooi.cn/netease/pic?id=" + _this.id;
    _this.musiclist.lrc = "https://v1.itooi.cn/netease/lrc?id=" + _this.id;
    _this.getMusicMessage();
    // _this.getMusicLrc();
  },
  components: {
    aplayer: aplayer
  }
};
</script>
<style scoped>
.el-header{
  background-color: rgb(189, 184, 184);
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size:20px;
  padding-left:0;
  padding-right: 0;
}
.el-footer {
  background-color: #4481d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size:20px;
  padding-left:0;
  padding-right: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding-left:0;
  padding-right: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.music-play{
    width: 100%;
    height: 100%;
}


</style>



