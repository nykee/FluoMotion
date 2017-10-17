<template>
  <div>
    <div class="title"><h1>账户信息</h1></div>
    <div class="content">
      <el-row class="row">
        <el-col :span="4"  class="col">用户名:</el-col><el-col :span="4">{{username}}</el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="col">公司/机构名称：</el-col><el-col :span="4">{{company}}</el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="col">免费处理次数剩余：</el-col><el-col :span="4">{{freeProcessCount}}</el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="col">付费处理次数剩余：</el-col><el-col :span="4">{{payProcessCount}}</el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="4" class="col">总计处理次数：</el-col><el-col :span="4">{{processCount}}</el-col>
      </el-row>
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

</style>
