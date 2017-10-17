<template>
  <div id="app">
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>



  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {}
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

<style>
  body,html{ height:100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;

}
/*通用样式开始*/
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, legend, input, textarea, button, p, blockquote, th, td{margin: 0;padding: 0;}
a{text-decoration: none;}
a,img{border:0;}
  li{list-style-type:none;}
.fl{  float: left;
}
.fr{  float: right;}
  .clearfix{*zoom:1}
  .clearfix:after{display:block;visibility:hidden;clear:both;height:0;content:'.';font-size:0}
/*通用样式结束*/

</style>
