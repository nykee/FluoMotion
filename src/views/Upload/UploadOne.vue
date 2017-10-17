<template>
  <div>
    <el-steps :space="150" :active="active" finish-status="success" class="step-intro">
      <el-step title="步骤 1：病例信息"></el-step>
      <el-step title="步骤 2：方板位置"></el-step>
      <el-step title="步骤 3：文件上传"></el-step>
    </el-steps>

    <div class="step-details">
      <!--输入病例信息-->
      <div v-show="step1">
        <span class="step-title">步骤1:输入病例信息</span>
        <el-form ref="pForm" :model="pForm" label-width="80px">
          <el-form-item label="病例姓名">
            <el-col :span="8">
              <el-input v-model="pForm.name"
                        placeholder="姓名 + 测试日期,例如：张三20170801">
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="病种类型">
            <el-col :span="8">
              <el-select v-model="pForm.dType" placeholder="请选择病种类型">
                <el-option label="ACL术前" value="ACLbefore"></el-option>
                <el-option label="ACL术后" value="ACLafter"></el-option>
                <el-option label="关节炎" value="GJY"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="术前/术后选择">
            <el-col :span="8">
              <el-select v-model="pForm.sType" placeholder="请选择术前/术后">
                <el-option label="术前" value="beforeS"></el-option>
                <el-option label="术后" value="afterS"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="备注">
            <el-col :span="8"><el-input type="textarea" v-model="pForm.desc"></el-input></el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="patientInfoHandler">保存</el-button>
          </el-form-item>
        </el-form>

      </div>
      <!--选择方板放置方法-->
      <div v-show="step2">
        <span class="step-title">步骤2:选择方板定位器放置方法</span>
        <el-form ref="fForm" :model="fForm" label-width="100px">
          <el-form-item label="方板定位器放置方法">
            <el-col :span="8">
              <el-tooltip placement="top">
                <div slot="content">横放：巴啦啦了<br/>竖放：巴啦啦</div>
                <el-button class="toolTip"><i class="fa fa-question fa-lg"></i></el-button>
              </el-tooltip>
              <el-select v-model="fForm.fbLocation" placeholder="请选择方板定位器放置方法">
                <el-option label="横放" value="hor"></el-option>
                <el-option label="竖放" value="vert"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="fbLocationHandler">保存</el-button>
          </el-form-item>
        </el-form>

      </div>
      <!--CT文件上传-->
      <div v-show="step3">
        <span class="step-title">步骤3:上传病例CT文件</span>
        <el-upload
          style="margin-top: 15px"
          ref="upload"
          action=""
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              pForm: {
                name: '',
                age:'',
                dType: [],
                sType:[],
                desc: ''
              },
              fForm:{
                fbLocation:''
              },
              fileList: [],
              step1:true,
              step2:false,
              step3:false,
              active: 0


            }
        },
        methods: {
          patientInfoHandler(){
            if (this.active++ > 2) this.active = 0;
            this.step1 =false;
            this.step2 = true;

          },
          fbLocationHandler(){
            if (this.active++ > 2) this.active = 0;
            this.step2 =false;
            this.step3 = true;
          },
          submitUpload() {
            this.$refs.upload.submit();
          },
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePreview(file) {
            console.log(file);
          }
        },
        created: function () {

        },
        mounted() {

        },
        components: {}
    }
</script>
<style>
  .toolTip{
    border: 0;
    background: transparent;

  }
  .step-details{
    margin-top:15px;}
  .step-title{
    display: inline-block;
    margin-bottom:15px;
  }
</style>
