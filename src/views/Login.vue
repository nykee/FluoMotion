<template>
  <div>
    <Form  :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"  class="demo-ruleForm login-container">
      <h3 class="title">FluoMotion系统登录</h3>
      <FormItem prop="account">
        <Input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"/>
      </FormItem>
      <FormItem prop="checkPass">
        <Input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"/>
      </FormItem>
      <Checkbox v-model="checked" checked class="remember">记住密码</Checkbox>
      <FormItem style="width:100%;">
        <Button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</Button>
        <!--<Button @click.native.prevent="handleReset2">重置</Button>-->
      </FormItem>

    </Form>
  </div>


</template>

<script>
    export default {
        data() {
            return {
              logining: false,
              ruleForm2: {
                account: 'admin',
                checkPass: '123456'
              },
              rules2: {
                account: [
                  { required: true, message: '请输入账号', trigger: 'blur' },
                  //{ validator: validaePass }
                ],
                checkPass: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
                  //{ validator: validaePass2 }
                ]
              },
              checked: true
            }
        },
        methods: {
          handleSubmit2(){
            sessionStorage.setItem('user', {"id":1,"username":"admin"});
//            this.loading =true;
            this.logining =true;
            let _this= this;
            setTimeout(function () {
              _this.$router.push({ path: '/Index' });
            },1300)
          }
        },
        created: function () {

        },
        mounted() {

        },
        components: {
        }
    }
</script>
<style scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title {
    margin: 0 auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0 0 35px 0;
  }
  .loading-container{

  }
</style>
