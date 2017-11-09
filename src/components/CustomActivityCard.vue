<template>
  <Card class="card-btm">
    <div class="card-top">
      <h3 class="fl">{{title}}</h3>
      <i class="fa fa-refresh  fr"></i>
      <span class="clearfix"></span>
    </div>

    <div class="card-content" >
      <Row class="card-content-items" v-for="act in activity">
        <i-col :span="4"><i class="fa fa-dot-circle-o fa-lg"></i></i-col>
        <i-col :span="12"><span>{{act.name}}</span></i-col>
        <i-col :span=8><b class="time-tag">{{act.timetag}}</b></i-col>
      </Row>
    </div>
    <div class="card-foot">
      <span class="moreInfo fr"><i class="fa fa-angle-double-right fa-lg "></i>更多</span>
    </div>
  </Card>
</template>

<script>
    export default {
        props:['title','activity'],
        data() {
            return {

            }
        },
        methods: {},
        created: function () {

        },
        mounted() {

        },
        components: {
        }
    }
</script>
<style scoped="scoped">
  .card-btm:hover{
    box-shadow: 0 1px 6px rgba(0,0,0,0.2);
    border-color: transparent;
  }

</style>
