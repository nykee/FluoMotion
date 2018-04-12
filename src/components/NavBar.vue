<template>


      <Row class="nav-bar">
        <i-col :span="6" class="f-title-container">
         <span class="f-title" >NykeeMotion数字影像分析平台</span>
        </i-col>
        <i-col :span="2" :offset="16">
          <Dropdown class="dropdown">
            <span class="Dropdown-link">
              <span class="user-name">admin</span>
              <img src="../assets/images/u-default.jpg" alt="" class="avatar"/>
            </span>
            <DropdownMenu slot="list">
              <DropdownItem ><router-link to="/Help/Account" ><span @click="handleClick">账户信息</span></router-link> </DropdownItem>
              <DropdownItem ><span @click="logout">退出登录</span></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </i-col>
      </Row>




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

            this.$Modal.confirm({
              title: '退出提示',
              content: '<p>确认退出吗?</p>',
              okText:'确定',
              cancelText:'取消',
              onOk: () => {
                sessionStorage.removeItem('user');
                this.$router.push('/Login');
              },
              onCancel: () => {
                this.$Message.info('Clicked cancel');
              }
            })
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
  .Dropdown-link{
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
