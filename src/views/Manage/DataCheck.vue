<template>
  <div>

    <div class="content" v-show="!loading">
      <h4 class="func-title">病例数据查看</h4>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :row-class-name="tableRowClassName"
        :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column
          prop="date"
          label="上传日期"
          width="180"
          sortable>
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="dType"
          label="病种"
          width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="sType"
          label="术前/术后"
          width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="180" class-name="tableRowClassName"
        sortable>

        </el-table-column>
        <el-table-column label="操作" >
          <template scope="scope">
            <el-button
                    type="primary"
                    size="small"
                    @click="checkStatus">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Loading v-show="loading"></Loading>
    <!--<div class="loadingGif-container" v-show="loading"><i class="fa fa-spinner fa-4x fa-spin loadingGif"></i></div>-->
  </div>
</template>

<script>
  import  Loading from '../../components/Loading.vue';
  import eventBus from '../../store/eventBus.js'
    export default {
        data() {
            return {
              tableData: [
                {
                date: '2016-05-02',
                name: '王小虎',
                dType:"ACL术前",
                sType:"术后",
                status:"上传完成",
                    rowClassName:'complete-row'
              },
                {
                date: '2016-05-04',
                name: '王小虎1',
                  dType:"关节炎",
                sType:"术前",
                status:"处理中...",
                    rowClassName:'process-row'
              }, {
                date: '2016-05-01',
                name: '王小虎2',
                  dType:"ACL术后",
                sType:"术后",
                status:"上传完成",
                      rowClassName:'complete-row'
              }, {
                date: '2016-05-03',
                name: '王小虎3',
                  dType:"ACL术前",
                sType:"术后",
                status:"上传失败",
                      rowClassName:'fail-row'
              }],
              loading:true
            }
        },
        methods: {
//            tableRowClassName(){
//                return this.tableData.rowClassName;
//            }
            tableRowClassName(row, index) {
                /*if (index === 1) {
                    return 'fail-row';
                } else if (index === 3) {
                    return 'complete-row';
                }
                return '';*/
                return this.tableData[index].rowClassName;
            },
          checkStatus(){
              eventBus.$emit('checkStatus');
              this.$router.push('/DataStatus')
          }
        },
        created: function () {

        },

        mounted() {
        let _this =this;
    setTimeout(function () {
      _this.loading =false
          },1000)

        },
        components: {
          Loading


        }
    }
</script>
<style>

  .func-title{
    margin-bottom:16px;
  }
  .el-table .complete-row{
    /*background: green;*/
    color:#13ce66;
  }
  .el-table .fail-row{
    /*background: #ff4949;*/
    color:#ff4949;
  }
  .el-table .process-row{
    /*background: #58b7ff;*/
    color:#58b7ff;
  }

</style>
