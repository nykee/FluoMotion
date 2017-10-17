<template>
  <el-row class="left-nav">
    <!--<div><h2 class="sys-title">Fluo-motion</h2></div>-->
    <el-menu :collapse="isCollapse" ref="elmenu" default-active="0" theme="dark" unique-opened @select="handleSelect"  @open="handleOpen">
      <div><h2 class="sys-title">Fluo-motion</h2></div>
      <el-menu-item index="0" @click="closeOthers"><i class="fa fa-desktop fa-lg _icons"></i>首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title"><i class="fa fa-upload fa-lg _icons"></i>数据上传</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">单病例数据上传</el-menu-item>
          <el-menu-item index="1-2">批量数据上传</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="fa fa-cogs fa-lg _icons"></i>病例管理</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">病例数据查看</el-menu-item>
          <el-menu-item index="2-2">病例数据文件下载</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="fa fa-book fa-lg _icons"></i>帮助</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">双平面系统流程</el-menu-item>
          <el-menu-item index="3-2">双平面文件拍摄注意事项</el-menu-item>
          <el-menu-item index="3-3">数据上传要求</el-menu-item>
          <el-menu-item index="3-4">下载文件内容</el-menu-item>
          <el-menu-item index="3-5">账户信息</el-menu-item>
          <el-menu-item index="3-6">在线技术支持</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-row>
</template>

<script>
  import eventBus from '../store/eventBus.js'
    export default {
        data() {
            return {
              isCollapse:false
            }
        },
        methods: {
          closeOthers(){
            this.$refs.elmenu.closeMenu()

          },
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
            console.log(typeof keyPath);
          },
          handleSelect(key,keyPath){
//            console.log(key,keyPath);
            eventBus.$emit('menuclick',key);
//            this.$root.$emit('menu-click',key,keyPath);
            switch (key){
              case "0":
                this.$router.push( {path: '/Index'});
                    break;
              case "1-1":
                this.$router.push( {path: '/UploadOne'});
                break;
              case "1-2":
                this.$router.push( {path: '/UploadAll'});
                break;
              case "2-1":
                this.$router.push( {path: '/DataCheck'});
                break;
              case "2-2":
                this.$router.push( {path: '/DataDownload'});
                break;
              case "3-1":
                this.$router.push( {path: '/Help/Process'});
                break;
              case "3-2":
                this.$router.push( {path: '/Help/PhotoQA'});
                break;
              case "3-3":
                this.$router.push( {path: '/Help/UploadQA'});
                break;
              case "3-4":
                this.$router.push( {path: '/Help/DownloadQA'});
                break;
              case "3-5":
                this.$router.push( {path: '/Help/Account'});
                break;
              case "3-6":
                this.$router.push( {path: '/Help/OnlineHelp'});
                break;
              default:
                this.$router.push( {path: '/Index'});
                break;
            }
          }
        },
        created: function () {
          var _this =this;
          eventBus.$on('accountMenuClick',function () {
//            console.log("监听到账户点击");
            _this.$refs.elmenu.closeMenu();
            _this.$refs.elmenu.openMenu("3",["3"]);
           _this.$refs.elmenu.activeIndex ="3-5"
//

          })

        },
        mounted() {
          /*eventBus.$on('accountMenuClick',function () {
            console.log(this.$refs.elmenu.props);
            this.$refs.elmenu.closeMenu();
            this.$refs.elmenu.openMenu("3-5",["3", "3-5"]);
            this.$refs.elmenu.setAttribue("default-openeds",["3"])

          })*/

        },
        components: {}
    }
</script>
<style>
  .sys-title{
    color: #fff;
    text-align: center;
    margin-top:30px;
    margin-bottom:10px;
  }
  .left-nav{
    color:#333;
    background: #324157;

  }
  ._icons{
    margin-right:20px;
  }
</style>
