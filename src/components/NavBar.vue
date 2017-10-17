<template>


      <el-row class="nav-bar">
        <el-col :span="6" class="f-title-container">
         <span class="f-title" >FluoMotion数字影像分析平台</span>
        </el-col>
        <el-col :span="2" :offset="16">
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              <span class="user-name">admin</span>
              <img src="../assets/images/u-default.jpg" alt="" class="avatar"/>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item ><router-link to="/Help/Account" ><span @click="handleClick">账户信息</span></router-link> </el-dropdown-item>
              <el-dropdown-item ><span @click="logout">退出登录</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>




</template>

<script>
  import eventBus from '../store/eventBus.js'
    export default {
        data() {
            return {

            }
        },
        methods: {
          handleClick(){
//            console.log("触发点击账户事件");
          eventBus.$emit("accountMenuClick")
          },
          logout(){

            this.$confirm('确认退出吗?', '提示', {
              //type: 'warning'
            }).then(() => {
              sessionStorage.removeItem('user');
              this.$router.push('/Login');
            }).catch(() => {

            });
          }


        },
        created: function () {

        },
        mounted() {


        },
        components: {}
    }
</script>
<style>
  .avatar{
    width: 40px;
    border-radius: 40px;
    /*float: right;*/
    vertical-align: middle;
  }
  .nav-bar{
    margin-left:-26px;
  }
  .nav-bar{
    background: #fff;

  }
  .el-dropdown-link{
    display: inline-block;
    vertical-align: middle;
    height: 40px;
  }
  .user-name{
    margin-right:5px;
    vertical-align: middle;

  }
  .dropdown{
    height: 60px;
    line-height: 46px;
  }

  .f-title-container{
    height:60px ;line-height: 60px;
  }
  .f-title{
    margin-left:10px;
  }
  a{
    color: #3d3d3d;
  }
</style>
