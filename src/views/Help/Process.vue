<template>
  <!--<div>-->
    <!--<el-row>-->
      <!--<el-col :span="8">-->
        <!--<div class="desc-lft">-->
          <!--<h3 class="desc-lft-title"><i class="plusWeight">6</i>大核心服务</h3>-->
          <!--<span class="desc-lft-content">逸云6大核心服务，覆盖了数据收集、数据处理、智能分析。满足骨科运动学步态数据分析、医学影像处理。为客户提供完整的骨科关节医疗解决方案！</span>-->
        <!--</div>-->

      <!--</el-col>-->
      <!--<el-col :span="16">-->
        <!--<el-row class="service">-->
          <!--<el-col class="service-title"  :span="8">平台服务</el-col>-->

            <!--<el-row class="service-content">-->
              <!--<el-col>-->
                <!--<ul>-->
                  <!--<li class="icon"><i class="fa fa-desktop fa-2x"></i></li>-->
                  <!--<li class="descp"><h4>Optiknee运动学分析云平台</h4>-->
                    <!--<h4>Sports Anaylize Cloud</h4></li>-->
                <!--</ul>-->
              <!--</el-col>-->
            <!--</el-row>-->
          <!--<el-row class="service-content">-->
            <!--<el-col>-->
              <!--<ul>-->
                <!--<li class="icon"><i class="fa fa-cloud fa-2x"></i></li>-->
                <!--<li class="descp"><h4>FluoMotion医疗影像云平台</h4>-->
                  <!--<h4>Medical Imaging Cloud</h4></li>-->
              <!--</ul>-->
            <!--</el-col>-->
          <!--</el-row>-->



        <!--</el-row>-->
        <!--<el-row class="service">-->
          <!--<el-col class="service-title" :span="8">医疗服务</el-col>-->

          <!--<el-row class="service-content">-->
            <!--<el-col>-->
              <!--<ul>-->
                <!--<li class="icon"><i class="fa fa-stethoscope fa-2x"></i></li>-->
                <!--<li class="descp"><h4>医生咨询服务</h4><h4>Doctor Consult Service</h4></li>-->
              <!--</ul>-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--<el-row class="service-content">-->
            <!--<el-col>-->
              <!--<ul>-->
                <!--<li class="icon"><i class="fa fa-hospital-o fa-2x"></i></li>-->
                <!--<li class="descp"><h4>多中心专家诊断</h4><h4>Multiple Center Expert Diagnose</h4></li>-->
              <!--</ul>-->
            <!--</el-col>-->
          <!--</el-row>-->



        <!--</el-row>-->
        <!--<el-row class="service">-->
          <!--<el-col class="service-title" :span="8">数据服务</el-col>-->

          <!--<el-row class="service-content">-->
            <!--<el-col>-->
              <!--<ul>-->
                <!--<li class="icon"><i class="fa fa-universal-access fa-2x"></i></li>-->
                <!--<li class="descp"><h4>人工智能分析</h4><h4>AI Diagnosis</h4></li>-->
              <!--</ul>-->
            <!--</el-col>-->

          <!--</el-row>-->
          <!--<el-row class="service-content">-->
            <!--<el-col>-->
              <!--<ul>-->
                <!--<li class="icon"><i class="fa fa-image fa-2x"></i></li>-->
                <!--<li class="descp"><h4>图像识别</h4><h4>Image Recognition</h4></li>-->
              <!--</ul>-->
            <!--</el-col>-->

          <!--</el-row>-->




        <!--</el-row>-->
      <!--</el-col>-->
    <!--</el-row>-->
  <!--</div>-->
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style scoped="scoped">
    ul,li{
      list-style: none;
      float: left;
    }
  .service-title{
    background: #2FB3D3;
    color: #fff;
    text-align: center;
    margin-bottom:20px;
  }
  .service{
    border-left: 1px solid #6D93B5;

  }
  .icon,.descp{
    color:#0D4E86;

  }
    .icon{
      margin-left:50px;
    }
    .descp{
      margin-left:30px;
    }
  .service>.service-content{
    margin-bottom:10px;
  }
  .desc-lft{
    margin-top:30px;
    color:#0D4E86;
  }
  .plusWeight{
    font-style: normal;

    font-size: 40px;
  }
</style>
