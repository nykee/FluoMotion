<template>
  <Row class="left-nav">
    <!--<div><h2 class="sys-title">Fluo-motion</h2></div>-->
    <Menu :collapse="isCollapse" ref="myMenu" active-name="1-2" theme="dark" accordion @on-select="handleSelect"  @open="handleOpen" style="width: auto;background: #324157">
      <div><h2 class="sys-title">Fluo-motion</h2></div>
      <MenuItem name="0"><i class="fa fa-desktop fa-lg _icons" ></i>首页</MenuItem>
      <Submenu name="1">
        <template slot="title"><i class="fa fa-upload fa-lg _icons"></i>数据上传</template>
        <MenuGroup>
          <MenuItem name="1-1">单病例数据上传</MenuItem>
          <MenuItem name="1-2">批量数据上传</MenuItem>
        </MenuGroup>
      </Submenu>
      <Submenu name="2">
        <template slot="title"><i class="fa fa-cogs fa-lg _icons"></i>病例管理</template>
        <MenuGroup>
          <MenuItem name="2-1">病例数据查看</MenuItem>
          <MenuItem name="2-2">病例数据文件下载</MenuItem>
        </MenuGroup>
      </Submenu>
      <Submenu name="3">
        <template slot="title"><i class="fa fa-book fa-lg _icons"></i>帮助</template>
        <MenuGroup>
          <MenuItem name="3-1">双平面系统流程</MenuItem>
          <MenuItem name="3-2">双平面文件拍摄注意事项</MenuItem>
          <MenuItem name="3-3">数据上传要求</MenuItem>
          <MenuItem name="3-4">下载文件内容</MenuItem>
          <MenuItem name="3-5">账户信息</MenuItem>
          <MenuItem name="3-6">在线技术支持</MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
  </Row>
</template>

<script>
  import eventBus from '../store/eventBus.js'
    export default {
        data() {
            return {
              isCollapse:false,
              open: [],
              active: "1-1",
            }
        },
        methods: {
          handleSelect(name){
            console.log(name);
//            console.log(key,keyPath);
            eventBus.$emit('menuclick',name);
//            this.$root.$emit('menu-click',key,keyPath);
            switch (name){
              case "0":
//                console.log(this);

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
        /*  var _this =this;
          eventBus.$on('accountMenuClick',function () {
//            console.log("监听到账户点击");
//            console.log(_this.$refs.elmenu);
            _this.$refs.elmenu.closeMenu();
            _this.$refs.elmenu.openNames=["3-5"];
           _this.$refs.elmenu.activeName ="3-5"
//

          })*/

        },
        mounted() {
          eventBus.$on('accountMenuClick',/*()=>{
            this.$nextTick(()=>{
              this.$refs.myMenu.updateOpened();
              this.$refs.myMenu.updateActiveName();
            })

          })*/ ()=>{
            console.log(this);
            this.open = ["2"];
            this.active = ["2-2"];
            this.$refs.myMenu.updateOpened();
            this.$refs.myMenu.updateActiveName();
            this.handleSelect(this.active);
          })


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
