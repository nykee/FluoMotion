<template>
  <div>

    <div class="content" v-show="!loading">
      <h4 class="func-title">病例数据查看</h4>
      <el-row type="flex" justify="end" class="search-container">
        <el-col  :span="5">
          <span>搜索</span><input v-model="searchKW" @keyup="searchKeyWord" placeholder="请输入搜索内容"/>
        </el-col>
      </el-row>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        ref="elTable"
        @cell-click="handleCellClick"
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
                    >查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row  class="pagination-container" >
        <el-col :span="5" ><span ref="sResult">&nbsp;</span></el-col>
        <el-col :offset="14" :span="5">
          <el-pagination
            page-size="10"
            layout="total,prev, pager, next"
            :total="4">
          </el-pagination>
        </el-col>

      </el-row>
    </div>
    <Loading v-show="loading"></Loading>
  </div>
</template>

<script>
  import  Loading from '../../components/Loading.vue';
  import { mapMutations } from 'vuex'
  import eventBus from '../../store/eventBus.js'
    export default {
        data() {
            return {
              tableData: [
                {
                date: '2016-05-02',
                name: '张三',
                  pid:'张三20160502',
                dType:"ACL术前",
                sType:"术后",
                status:"上传完成",
                rowClassName:'complete-row'
                },
                {
                date: '2016-05-04',
                name: '李四',
                  pid:'李四20160504',
                dType:"关节炎",
                sType:"术前",
                status:"处理中...",
                rowClassName:'process-row'
                },
                {
                date: '2016-05-01',
                name: '王五',
                  pid:'王五20160501',
                dType:"ACL术后",
                sType:"术后",
                status:"上传完成",
                rowClassName:'complete-row'
                },
                {
                date: '2016-05-03',
                name: '赵六',
                  pid:'赵六20160503',
                dType:"ACL术前",
                sType:"术后",
                status:"上传失败",
                rowClassName:'fail-row'
                }
              ],
              loading:true,
              searchKW:'',
              pid:''
            }
        },
        methods: {
          ...mapMutations(['setid']),
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
//                console.log(this.tableData[index].rowClassName);
                return this.tableData[index].rowClassName;
            },
          handleCellClick(row,cell){
//            console.log(row.pid);
            if(cell.label!=="操作"){return}
//            console.log(cell);
            this.$store.commit('setid',row.pid);
            this.$router.push('/DataStatus')

//            console.log(this.pid);
          },

          checkStatus(id){
//            console.log(id);
            eventBus.$emit('checkStatus',id);
//              this.$router.push('/DataStatus')

//            console.log(this.$refs.elTable);
//              let id = this.$refs.elTable.handleCellClick();
//              console.log(id);
//              eventBus.$emit('checkStatus');

          },
          searchKeyWord(){
            this.$refs.sResult.innerHTML="搜索到"+2+'条记录';
            if(this.searchKW ===""){
              this.$refs.sResult.innerHTML='&nbsp;';

            }
//            console.log("serachKeyWord");
          },

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
  .pagination-container{
    margin-top:15px;
  }

</style>
