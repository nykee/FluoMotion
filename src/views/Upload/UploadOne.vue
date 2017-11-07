<template>
  <div>
    <Steps :space="150"  :current="current" class="step-intro">
      <Step title="步骤 1：病例信息"></Step>
      <Step title="步骤 2：方板位置"></Step>
      <Step title="步骤 3：文件上传"></Step>
    </Steps>

    <div class="step-details">
      <!--输入病例信息-->
      <div v-show="step1">
        <span class="step-title">步骤1:输入病例信息</span>
        <i-form ref="pForm" :model="pForm" :label-width="100">
          <FormItem label="病例姓名">
            <i-col :span="8">
              <Input v-model="pForm.name"
                        placeholder="姓名 + 测试日期,例如：张三20170801"/>

            </i-col>
          </FormItem>
          <FormItem label="病种类型">
            <i-col :span="8">
              <Select v-model="pForm.dType" placeholder="请选择病种类型">
                <Option label="ACL术前" value="ACLbefore"></Option>
                <Option label="ACL术后" value="ACLafter"></Option>
                <Option label="关节炎" value="GJY"></Option>
              </Select>
            </i-col>
          </FormItem>
          <FormItem label="术前/术后选择">
            <i-col :span="8">
              <Select v-model="pForm.sType" placeholder="请选择术前/术后">
                <Option label="术前" value="beforeS"></Option>
                <Option label="术后" value="afterS"></Option>
              </Select>
            </i-col>
          </FormItem>
          <FormItem label="备注">
            <i-col :span="8"><Input type="textarea" v-model="pForm.desc"/></i-col>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="patientInfoHandler">下一步</Button>
          </FormItem>
        </i-form>

      </div>
      <!--选择方板放置方法-->
      <div v-show="step2">
        <span class="step-title">步骤2:选择方板定位器放置方法</span>
        <Form ref="fForm" :model="fForm" :label-width="100">
          <FormItem label="方板定位器放置方法选择">
            <i-col :span="10">
              <Tooltip placement="top">
                <div slot="content">横放：巴啦啦了<br/>竖放：巴啦啦</div>
                <Button class="toolTip"><i class="fa fa-question fa-lg" style="color: #e4393c"></i></Button>
              </Tooltip>
              <Select v-model="fForm.fbLocation" placeholder="请选择方板定位器放置方法">
                <Option label="横放" value="hor"></Option>
                <Option label="竖放" value="vert"></Option>
              </Select>
            </i-col>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="fbLocationHandler">下一步</Button>
          </FormItem>
        </Form>

      </div>
      <!--CT文件上传-->
      <div v-show="step3">
        <span class="step-title">步骤3:上传病例CT文件</span>
        <!--<Upload
          style="margin-top: 15px"
          ref="upload"
          action=""
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <Button slot="trigger" size="small" type="primary">选取文件</Button>
          <Button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</Button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </Upload>-->
        <Upload
          multiple
          :before-upload="handleUpload"
          action="">
          <Button type="ghost" icon="ios-cloud-upload-outline" style="background: #66B1FF;color: #fff">选择需要上传的文件</Button>
        </Upload>
        <div>文件大小不能超过250MB</div>

        <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
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
                desc: '',

              },
              fForm:{
                fbLocation:''
              },
              fileList: [],
              step1:true,
              step2:false,
              step3:false,
              current: 0,
              file: null,
              loadingStatus: false


            }
        },
        methods: {
          patientInfoHandler(){
            if (this.current++ > 2) this.current = 0;
            this.step1 =false;
            this.step2 = true;

          },
          fbLocationHandler(){
            if (this.current++ > 2) this.current = 0;
            this.step2 =false;
            this.step3 = true;
          },
          handleUpload (file) {
            this.file = file;
            return false;
          },
          upload () {
            this.loadingStatus = true;
            setTimeout(() => {
              this.file = null;
              this.loadingStatus = false;
              this.$Message.success('Success')
            }, 1500);
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
  .step-intro{
    background: #fff;
    padding: 1rem;
  }
</style>
