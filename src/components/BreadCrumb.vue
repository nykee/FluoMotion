<template>

  <Breadcrumb separator="/" class="breadcrumb">
    <BreadcrumbItem  v-for="menu in menus" >{{menu.name}}</BreadcrumbItem>
  </Breadcrumb>

</template>

<script>
  import eventBus from '../store/eventBus.js'
    export default {
        data() {
            return {

              menus:[{name:'首页'}]
            }
        },
        methods: {



        },
        created: function () {
          eventBus.$on('menuclick',(key)=>{
//            console.log("从事件桥接受到消息:"+key);
//            console.log(typeof key);
            switch (key){
              case "0":
                this.menus=[{name:'首页'}];
                break;
              case "1-1":
                this.menus=[{name:'数据上传'},{name:'单病例数据上传'}];
                break;
              case "1-2":
                this.menus=[{name:'数据上传'},{name:'批量数据上传'}];
                break;
              case "2-1":
                this.menus=[{name:'数据管理'},{name:'病例数据查看'}];
                break;
              case "2-2":
                this.menus=[{name:'数据管理'},{name:'病例数据文件下载'}];
                break;
              case "3-1":
               this.menus=[{name:'帮助'},{name:'双平面系统流程'}];
                break;
              case "3-2":
               this.menus=[{name:'帮助'},{name:'双平面文件拍摄注意事项'}];
                break;
              case "3-3":
               this.menus=[{name:'帮助'},{name:'数据上传要求'}];
                break;
              case "3-4":
              this.menus=[{name:'帮助'},{name:'下载文件内容'}];
                break;
              case "3-5":
                this.menus=[{name:'帮助'},{name:'账户信息'}];
                break;
              case "3-6":
                this.menus=[{name:'帮助'},{name:'在线技术支持',}];
                break;
              default:
                this.menus=[{name:'首页'}];
                break
            }

          })
        },
        mounted() {
          eventBus.$on('accountMenuClick',()=>{
            this.menus=[{name:'帮助'},{name:'账户信息'}];

          }).$on('checkStatus',()=>{
            this.menus=[{name:'数据管理'},{name:'病例数据查看'},{name:'数据状态查看'}];
          })



        },
      watch:{

      },
        components: {}
    }
</script>
<style>
  .breadcrumb{
    margin-top:10px;
    margin-bottom:10px;
  }
</style>
