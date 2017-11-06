<template>
  <Row class="main-container">
    <i-col :span="4" class="left-nav-container">
      <LeftNav ></LeftNav>
    </i-col>
    <i-col :span="20" class="right-col-container">
      <NavBar ></NavBar>
      <BreadCrumb></BreadCrumb>
      <router-view class="container"></router-view>
      <FootBar class="foot-bar"></FootBar>
    </i-col>
  </Row>
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  import FootBar from '../components/FootBar.vue'
  import LeftNav from '../components/LeftNav.vue'
  import BreadCrumb from '../components/BreadCrumb.vue'
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
          NavBar,FootBar,LeftNav,BreadCrumb
        }
    }
</script>
<style>
  .main-container{
    height: 100%;
  }
  .left-nav-container{
    height: 100%;
    background: #324157;
  }
  .right-col-container{
    height: 100%;
    background: #ECECEC;
    padding-left: 26px;
  }
  .foot-bar{
    text-align: center;
  }
  .container{
    height: 80%;
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
