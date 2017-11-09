<template>
  <Card class="card" :xs="24">
    <div class="icons"><i :class=iconClass></i></div>
    <div class="desc">
      <div class="title">{{cardTitle}}</div>
      <h2 class="sum">{{sum}}</h2>
    </div>
  </Card>
</template>

<script>
    export default {
      props : ['cardTitle','sum','iconClass'],
        data() {
            return {

            }
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
  .icons{
    float: left;
    width: 30%;
  }
  .desc{
    float: right;
    width: 60%;
  }
  .card{
    margin-top:10px;
    height: 90px;

  }
  .card:hover{
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
</style>
