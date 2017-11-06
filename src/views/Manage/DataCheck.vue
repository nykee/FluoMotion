<template>
  <div>

    <div class="content" v-show="!loading">
      <h4 class="func-title">病例数据查看</h4>
      <Row type="flex" justify="end" class="search-container">
        <i-col  :span="5">
          <span>搜索</span><input v-model="searchKW" @keyup="searchKeyWord" placeholder="请输入搜索内容"/>
        </i-col>
      </Row>
      <!--<Table
        :data="tableData"
        border
        style="width: 100%"
        ref="elTable"
        @cell-click="handleCellClick"
        :row-class-name="tableRowClassName"
        :default-sort = "{prop: 'date', order: 'descending'}">
        <Table-column
          prop="date"
          label="上传日期"
          width="180"
          sortable>
          <template scope="scope">
            <Icon name="time"></Icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </Table-column>
        <Table-column
          prop="name"
          label="姓名"
          width="180"
          sortable>
        </Table-column>
        <Table-column
          prop="dType"
          label="病种"
          width="180"
          sortable>
        </Table-column>
        <Table-column
          prop="sType"
          label="术前/术后"
          width="180"
          sortable>
        </Table-column>
        <Table-column
          prop="status"
          label="状态"
          width="180" class-name="tableRowClassName"
        sortable>

        </Table-column>
        <Table-column label="操作" >
          <template scope="scope">
            <el-button
                    type="primary"
                    size="small"
                    >查看</el-button>
          </template>
        </Table-column>
      </Table>-->
      <Table border :columns="columns" :data="tData"></Table>
      <Row  class="pagination-container" >
        <i-col :span="5" ><span ref="sResult">&nbsp;</span></i-col>
        <i-col :offset="14" :span="5">
          <Page
            page-size="10"
            layout="total,prev, pager, next"
            :total="4">
          </Page>
        </i-col>

      </Row>
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
              columns: [

                {
                  title: '姓名',
                  key: 'name',
                  sortable: true
                },
                {
                  title: '病种',
                  key: 'dType',
                  sortable: true
                },
                {
                  title: '术前/术后',
                  key: 'sType',
                  sortable: true
                },
                {
                  title: '状态',
                  key: 'status',
                  sortable: true
                },
                {
                  title: '操作',
                  key: 'operation',
                  render: (h, params) => {
                    return h('div', [
                      h('Button', {
                        props: {
                          type: 'primary',
                          size: 'small'
                        }
                      }, '查看')])}

                },

              ],
              tData: [
                {
                  name: '王小明',
                  dType: "ACL重建",
                  sType: '术前',
                  status: '上传中'
                },
                {
                  name: '王小明1',
                  dType: "ACL重建1",
                  sType: '术前1',
                  status: '上传中1'
                },
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
  .Table .complete-row{
    /*background: green;*/
    color:#13ce66;
  }
  .Table .fail-row{
    /*background: #ff4949;*/
    color:#ff4949;
  }
  .Table .process-row{
    /*background: #58b7ff;*/
    color:#58b7ff;
  }
  .pagination-container{
    margin-top:15px;
  }

</style>
