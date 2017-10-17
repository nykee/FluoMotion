<template>
  <div class="loadingGif-container" >
    <i class="fa fa-spinner fa-4x fa-spin loadingGif"></i>
  </div>
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
<style scoped>
  .loadingGif-container{
    width: 100%;
    height: 400px;
    position: relative;

  }
  .loadingGif{
    position: absolute;
    top:40%;
    left:40%;
  }

</style>
