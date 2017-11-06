<template>
<div >
  <!--上层收藏数量卡及图表-->
  <Row :gutter="10">
    <i-col :xs="24" :sm="6" :md="6" :lg="5">
      <Card class="card">
        <div class="icons"><i class="fa fa-heart fa-2x"></i></div>
        <div class="desc">
          <div class="title">收藏</div>
          <h2 class="sum">30</h2>
        </div>
      </Card>
      <Card class="card">
        <div class="icons"><i class="fa fa-envelope fa-2x"></i></div>
        <div class="desc">
          <div class="title">消息</div>
          <h2 class="sum">55</h2>
        </div>
      </Card >
    </i-col>
    <i-col :xs="24" :sm="6" :md="6" :lg="5">
      <Card class="card" :xs="24">
        <div class="icons"><i class="fa fa-tasks fa-2x"></i></div>
        <div class="desc">
          <div class="title">任务</div>
          <h2 class="sum">21</h2>
        </div>
      </Card>
      <Card class="card" :xs="24">
        <div class="icons"><i class="fa fa-cloud fa-2x"></i></div>
        <div class="desc">
          <div class="title">病例数据</div>
          <h2 class="sum">180</h2>
        </div>
      </Card>
    </i-col>
    <i-col :xs="24" :sm="12" :md="12" :lg="14">
        <!--<pie></pie>-->
      <lineChart></lineChart>
    </i-col>
  </Row>
  <!--下层通知卡、动态卡-->
  <Row :gutter="10">
    <i-col :xs="24" :md="8" :sm="8" :lg="8">
      <Card class="card-btm">
        <div class="card-top">
          <h3 class="fl">动态</h3>
          <i class="fa fa-refresh  fr"></i>
          <span class="clearfix"></span>
        </div>
        <div class="card-content">
          <Row class="card-content-items">
            <i-col :span="4"><i class="fa fa-dot-circle-o fa-lg"></i></i-col>
            <i-col :span="12"><span>删除病例&#45;&#45;张三丰</span></i-col>
            <i-col :span=8><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
          <Row class="card-content-items">
            <i-col :span="4"><i class="fa fa-dot-circle-o fa-lg"></i></i-col>
            <i-col :span="12"><span>下载病例&#45;&#45;张三丰</span></i-col>
            <i-col :span="8"><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
          <Row class="card-content-items">
            <i-col :span="4"><i class="fa fa-dot-circle-o fa-lg"></i></i-col>
            <i-col :span="12"> <span>编辑病例&#45;&#45;张三丰</span></i-col>
            <i-col :span="8"><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
          <Row class="card-content-items">
            <i-col :span="4"><i class="fa fa-dot-circle-o fa-lg"></i></i-col>
            <i-col :span="12"><span>上传病例&#45;&#45;张三丰</span></i-col>
            <i-col :span="8"><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
        </div>
        <div class="card-foot">
          <span class="moreInfo fr"><i class="fa fa-angle-double-right fa-lg "></i>更多</span>
        </div>
      </Card>
    </i-col>
    <i-col :xs="24" :md="24" :sm="8" :lg="8">
      <Card class="card-btm">
        <div class="card-top">
          <h3 class="fl">通知</h3>
          <i class="fa fa-refresh  fr"></i>
          <span class="clearfix"></span>
        </div>
        <div class="card-content">
          <Row class="card-content-items">
            <i-col :span="3"><i class="fa fa-circle-o fa-lg"></i></i-col>
            <i-col :span="12"><span>病例数据&#45;&#45;张三丰--处理完成</span></i-col>
            <i-col :span=8><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
          <Row class="card-content-items">
            <i-col :span="4"><i class="fa fa-circle-o fa-lg fail"></i></i-col>
            <i-col :span="12"><span>病例数据&#45;&#45;张三丰--上传失败</span></i-col>
            <i-col :span="8"><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
          <Row class="card-content-items">
            <i-col :span="4"><i class="fa fa-circle-o fa-lg"></i></i-col>
            <i-col :span="12"> <span>病例数据&#45;&#45;张三丰--处理完成</span></i-col>
            <i-col :span="8"><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
          <Row class="card-content-items">
            <i-col :span="4"><i class="fa fa-circle-o fa-lg"></i></i-col>
            <i-col :span="12"><span>病例数据&#45;&#45;张三丰--处理完成</span></i-col>
            <i-col :span="8"><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
        </div>
        <div class="card-foot">
          <span class="moreInfo fr"><i class="fa fa-angle-double-right fa-lg "></i>更多</span>
        </div>
      </Card>
    </i-col>
    <i-col :xs="24" :md="24" :sm="8" :lg="8">
      <Card class="card-btm">
        <div class="card-top">
          <h3 class="fl">动态</h3>
          <i class="fa fa-refresh  fr"></i>
          <span class="clearfix"></span>
        </div>
        <div class="card-content">
          <Row class="card-content-items">
            <i-col :span="4"><i class="fa fa-dot-circle-o fa-lg"></i></i-col>
            <i-col :span="12"><span>删除病例&#45;&#45;张三丰</span></i-col>
            <i-col :span=8><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
          <Row class="card-content-items">
            <i-col :span="4"><i class="fa fa-dot-circle-o fa-lg"></i></i-col>
            <i-col :span="12"><span>下载病例&#45;&#45;张三丰</span></i-col>
            <i-col :span="8"><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
          <Row class="card-content-items">
            <i-col :span="4"><i class="fa fa-dot-circle-o fa-lg"></i></i-col>
            <i-col :span="12"> <span>编辑病例&#45;&#45;张三丰</span></i-col>
            <i-col :span="8"><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
          <Row class="card-content-items">
            <i-col :span="4"><i class="fa fa-dot-circle-o fa-lg"></i></i-col>
            <i-col :span="12"><span>上传病例&#45;&#45;张三丰</span></i-col>
            <i-col :span="8"><b class="time-tag">2017-9-30 17:30</b></i-col>
          </Row>
        </div>
        <div class="card-foot">
          <span class="moreInfo fr"><i class="fa fa-angle-double-right fa-lg "></i>更多</span>
        </div>
      </Card>
    </i-col>
  </Row>

</div>
</template>

<script>
  import pie from '../components/Charts/pie.vue';
  import lineChart from '../components/Charts/line.vue';
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          pie,lineChart
        }
    }
</script>
<style>
  .icons{
    float: left;
    width: 30%;
  }
  .desc{
    float: right;
    width: 60%;
  }
  .icons .fa-heart{
    color: #e4393c;
  }
  .icons .fa-tasks{
    color: #6887FF;
  }
  .icons .fa-envelope{
    color: #6CC788;
  }
  .icons .fa-cloud{
    color: #595959;
  }
  .card{
    margin-top:10px;
    height: 90px;

  }
  .card:hover,.card-btm:hover{
    box-shadow: 0 1px 6px rgba(0,0,0,0.2);
    border-color: transparent;
  }
  .title{
    color:#9B9B9B;
    font-size:14px;
  }
  .sum:hover{
    cursor: pointer;
    color: #20A0FF;
  }
  .time-tag{
    font-weight:normal;
    font-size: 12px;
    color: #9B9B9B;
  }
  .fa-dot-circle-o,.fa-circle-o{
    color: #6CC788;
  }
  .card-content-items{
    margin-top:10px;
  }
  .fa-refresh:hover{
    cursor: pointer;
  }
  .fa-angle-double-right:hover,.moreInfo:hover{
    color: #6CC788;
    cursor: pointer;
  }
  .moreInfo{
    margin-top:20px;
    margin-bottom:10px;
  }
  .fail{color:#e4393c}


</style>
