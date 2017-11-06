<template>
  <div>
    <div class="timleline-content" v-show="!loading">
      <h5 class="timeline-title">病例<span>{{pid}}</span>TimeLine</h5>
      <ul class="timeline">
        <template v-for="item in items">
          <li class="timeline-item">
            <div class="item-tail"></div>
            <div class="item-head item-head-blue" ></div>
            <div class="item-content">
              <p class="time">{{item.time}}</p>
              <p class="content">{{item.content}}</p>
            </div>
          </li>

        </template>

      </ul>
    </div>
    <Loading v-show="loading"></Loading>

  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import  Loading from '../../components/Loading.vue'
  import eventBus from '../../store/eventBus.js'
    export default {
        data() {
            return {
              loading:true,
              items:[]
            }
        },
        methods: {
          ...mapMutations(['increment','decrement'])
        },
        created: function () {

        },
        mounted() {
          let id =this.$store.state.pid;
//          console.log(this.$store.state.pid);
          if(id ==='赵六20160503'){
            this.items =[
              {
                time:'2017-10-12 17:04:22',
                content:'病例数据上传'
              },
              {
                time:'2017-10-12 18:20:31',
                content:'双平面坐标开始建立'
              },
              {
                time:'2017-10-12 18:22:31',
                content:'双平面坐标建立完成'
              },
              {
                time:'2017-10-12 18:37:02',
                content:'骨模型轮廓描绘'
              },
              {
                time:'2017-10-12 18:37:02',
                content:'双平面数据处理开始'
              },
              {
                time:'2017-10-12 18:37:02',
                content:'双平面数据处理中，进度：20%'
              },
              {
                time:'2017-10-12 18:37:02',
                content:'双平面数据处理中，进度：40%'
              },
              {
                time:'2017-10-12 18:37:02',
                content:'双平面数据处理中，进度：60%'
              },
              {
                time:'2017-10-12 18:37:02',
                content:'双平面数据处理中，进度：80%'
              },
              {
                time:'2017-10-12 18:37:02',
                content:'双平面数据处理完成'
              },
            ]
          }
          else if(id ==="王五20160501"){
            this.items =[
              {
                time:'2017-10-11 17:04:22',
                content:'病例数据上传'
              },
              {
                time:'2017-10-11 18:20:31',
                content:'双平面坐标开始建立'
              },
              {
                time:'2017-10-11 18:22:31',
                content:'双平面坐标建立完成'
              },
              {
                time:'2017-10-11 18:37:02',
                content:'骨模型轮廓描绘'
              },
              {
                time:'2017-10-11 18:37:02',
                content:'双平面数据处理开始'
              },
              {
                time:'2017-10-11 18:37:02',
                content:'双平面数据处理中，进度：20%'
              },
              {
                time:'2017-10-11 18:37:02',
                content:'双平面数据处理中，进度：40%'
              },
              {
                time:'2017-10-11 18:37:02',
                content:'双平面数据处理中，进度：60%'
              },
              {
                time:'2017-10-11 18:37:02',
                content:'双平面数据处理中，进度：80%'
              },
              {
                time:'2017-10-11 18:37:02',
                content:'双平面数据处理完成'
              },
            ]

          }
          else{
            this.items =[
              {
                time:'2017-10-10 17:04:22',
                content:'病例数据上传'
              },
              {
                time:'2017-10-10 18:20:31',
                content:'双平面坐标开始建立'
              },
              {
                time:'2017-10-10 18:22:31',
                content:'双平面坐标建立完成'
              },
              {
                time:'2017-10-10 18:37:02',
                content:'骨模型轮廓描绘'
              },
              {
                time:'2017-10-10 18:37:02',
                content:'双平面数据处理开始'
              },
              {
                time:'2017-10-10 18:37:02',
                content:'双平面数据处理中，进度：20%'
              },
              {
                time:'2017-10-10 18:37:02',
                content:'双平面数据处理中，进度：40%'
              },
              {
                time:'2017-10-10 18:37:02',
                content:'双平面数据处理中，进度：60%'
              },
              {
                time:'2017-10-10 18:37:02',
                content:'双平面数据处理中，进度：80%'
              },
              {
                time:'2017-10-10 18:37:02',
                content:'双平面数据处理完成'
              },
            ]
          }
          var _this =this;
          setTimeout(function () {

            _this.loading =false
          },1000);


        },
      computed:{
          pid(){
            return this.$store.state.pid;
          }
      },
        components: {Loading}
    }
</script>
<style>
  .timeline{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .timeline-title{
    margin-bottom:20px;
  }
  .timeline-item{
    position: relative;
    margin: 0;
    padding: 0 0 12px;
    list-style: none;
  }
  .item-tail{
    height: 100%;
    border-left:1px solid #2d8cf0;
    position: absolute;
    left: 6px;
    top:0;
  }
  .item-head{
    width: 13px;
    height: 13px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid transparent;
    position: absolute;
  }
  .item-head-blue{
    border-color: #2d8cf0;
    color:#2d8cf0 ;
  }
  .item-content{
    padding: 1px 1px 10px 24px ;
    font-size: 12px;
    position: relative;
    top:-3px;
  }
  .timeline .timeline-item:last-child .item-tail{
    display: none;
  }
  .time{
    font-size: 14px;
    font-weight: bold;
  }
  .content{
    padding-left: 5px;
  }
</style>
