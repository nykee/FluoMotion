<template>
  <div class="account-style">
    <div class="title"><h1>账户信息</h1></div>
    <div class="content">
      <Row class="row">
        <i-col :span="4"  class="col">用户名:</i-col><i-col :span="4">{{username}}</i-col>
      </Row>
      <Row class="row">
        <i-col :span="4" class="col">公司/机构名称：</i-col><i-col :span="4">{{company}}</i-col>
      </Row>
      <Row class="row">
        <i-col :span="4" class="col">免费处理次数剩余：</i-col><i-col :span="4">{{freeProcessCount}}</i-col>
      </Row>
      <Row class="row">
        <i-col :span="4" class="col">付费处理次数剩余：</i-col><i-col :span="4">{{payProcessCount}}</i-col>
      </Row>
      <Row class="row">
        <i-col :span="4" class="col">总计处理次数：</i-col><i-col :span="4">{{processCount}}</i-col>
      </Row>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
              username:'admin',
              company:'逸动医疗',
              freeProcessCount:0,
              payProcessCount:0,
              processCount:0
            }
        },
        methods: {

        },
        created: function () {


        },
        mounted() {


        },
        components: {}
    }
</script>
<style>
  .content{
    margin-top:10px;
  }
  .col{
    text-align: left;
  }
  .row{
    margin-top:10px;
  }
  .account-style{
    font-size: 1rem;
  }

</style>
