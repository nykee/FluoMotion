<template>
  <div id="chart" style="height: 240px;width: 400px"></div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/chart/pie');
    export default {
        data() {
            return {
              chartOption:{
                title : {
                  text: 'piechart',
                  // subtext: '',
                  x:'left'
                },
                tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                  orient: 'vertical',
                  left: 'center',
                  data: ['女性','男性']
                },
                series : [
                  {
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[10,20],
                    selectedOffset:50,
                    itemStyle: {
                      emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                    },

                  }
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
