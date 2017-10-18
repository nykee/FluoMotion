<template>
  <div >
    <router-view></router-view>
  </div>

</template>

<script>
  import Account from './Account.vue'
  import DownloadQA from './DownloadQA.vue'
  import OnlineHelp from './OnlineHelp.vue'
  import PhotoQA from './PhotoQA.vue'
  import Process from './Process.vue'
  import UploadQA from './UploadQA.vue'
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
          Account,
          DownloadQA,
          OnlineHelp,
          PhotoQA,
          Process,
          UploadQA,

        }
    }
</script>
<style>

</style>
