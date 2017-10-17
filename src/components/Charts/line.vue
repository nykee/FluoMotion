
  <template>
    <div id="chart" style="height: 240px;"></div>
  </template>


<script>
  import echarts from 'echarts'
  require('echarts/chart/line');
    export default {
        data() {
            return {
              chartOption:{
                title: {
                  text: '关节炎发病率年龄分布'
                },
                tooltip: {
                  trigger: 'axis'
                },
                /*legend: {
                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                },*/
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                /*toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },*/
                xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: ['10-20岁','21-30岁','31-40岁','41-50岁','51-60岁','61-70岁','71-80岁','81-90岁','91-100岁']
                },
                yAxis: {
                  type: 'value'
                },
                series: [
                  {
                    name:'',
                    type:'line',
                    stack: '总量',
                    data:[11,42,33,45,56,67,74,81,86]
                  },

                ]
              }
            }
        },
        methods: {},
        created: function () {

        },
        mounted() {
          let chart = echarts.init(document.getElementById('chart'));
          chart.setOption(this.chartOption,true)
        },
        components: {}
    }
</script>
<style>

</style>
