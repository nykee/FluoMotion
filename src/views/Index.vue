<template>
<div >
  <!--上层收藏数量卡及图表-->
  <Row :gutter="10">
    <i-col :xs="24" :sm="6" :md="6" :lg="5">

      <CustomCard card-title="收藏" sum="22" icon-class="fa fa-heart fa-2x"></CustomCard>
      <CustomCard card-title="消息" sum="55" icon-class="fa fa-envelope fa-2x"></CustomCard>

    </i-col>
    <i-col :xs="24" :sm="6" :md="6" :lg="5">

      <CustomCard card-title="任务"     sum="24" icon-class="fa fa-tasks fa-2x"></CustomCard>
      <CustomCard card-title="病例数据" sum="180" icon-class="fa fa-cloud fa-2x"></CustomCard>

    </i-col>
    <i-col :xs="24" :sm="12" :md="12" :lg="14">
        <!--<pie></pie>-->
      <lineChart></lineChart>
    </i-col>
  </Row>
  <!--下层通知卡、动态卡-->
  <Row :gutter="10">
    <i-col :xs="24" :md="8" :sm="8" :lg="8">
      <CustomActivityCard title="动态" :activity="activity"></CustomActivityCard>
    </i-col>
    <i-col :xs="24" :md="24" :sm="8" :lg="8">
      <CustomMessageCard title="通知" :message="message"></CustomMessageCard>

    </i-col>
    <i-col :xs="24" :md="24" :sm="8" :lg="8">
      <CustomActivityCard title="动态" :activity="activity"></CustomActivityCard>
    </i-col>
  </Row>

</div>
</template>

<script>
  import pie from '../components/Charts/pie.vue';
  import lineChart from '../components/Charts/line.vue';
  import CustomCard from '../components/CustomCard.vue';
  import CustomActivityCard from '../components/CustomActivityCard.vue';
  import CustomMessageCard from '../components/CustomMessageCard.vue';

    export default {
        data() {
            return {
              activity:[
                {name:'删除病例--张三丰',timetag:'2017-9-30 17:30'},
                {name:'删除病例--张三丰2',timetag:'2017-9-29 17:30'},
                {name:'删除病例--张三丰3',timetag:'2017-9-28 17:30'},
                {name:'删除病例--张三丰4',timetag:'2017-9-27 17:30'},
                {name:'删除病例--张三丰5',timetag:'2017-9-26 17:30'},
              ],
              message:[
                {name:'病例数据--张三丰--处理完成',timetag:'2017-6-30 17:30'},
                {name:'病例数据--张三丰1--处理完成',timetag:'2017-6-29 17:30'},
                {name:'病例数据--张三丰2--处理完成',timetag:'2017-6-28 17:30'},
                {name:'病例数据--张三丰3--处理完成',timetag:'2017-6-27 17:30'},
                {name:'病例数据--张三丰4--处理完成',timetag:'2017-6-26 17:30'},

              ]
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
          pie,lineChart,CustomCard,CustomActivityCard,CustomMessageCard
        }
    }
</script>
<style>



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
