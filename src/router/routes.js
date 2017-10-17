import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import Help from '../views/Help/Help.vue'
import Account from '../views/Help/Account.vue'
import DownloadQA from '../views/Help/DownloadQA.vue'
import OnlineHelp from '../views/Help/OnlineHelp.vue'
import PhotoQA from '../views/Help/PhotoQA.vue'
import Process from '../views/Help/Process.vue'
import UploadQA from '../views/Help/UploadQA.vue'
import UploadAll from '../views/Upload/UploadAll.vue'
import UploadOne from '../views/Upload/UploadOne.vue'
import DataCheck from '../views/Manage/DataCheck.vue'
import DataDownload from '../views/Manage/DataDownload.vue'
import Login from '../views/Login.vue';
import PageNotFound from '../views/404.vue'
import Home from '../views/Home.vue'



let routes = [

    {
      path: '/Login',
      name: 'Login',
      component: Login,
      hidden: true
    },
    //重定向'/'至 '/Index'
    {path: '/', redirect: '/Index'},
    {
      path: '/404',
      component: PageNotFound,
      name: '',
      hidden: true
    },
    {
      path:'/',
      component: Home,
      name: '帮助',
      children:[
        {
          path: '/Help',
          name: '',
          component: Help,
          children:[
            {
              path:"Account",
              component:Account
            },
            {
              path:"DownloadQA",
              component:DownloadQA
            },
            {
              path:"OnlineHelp",
              component:OnlineHelp
            },
            {
              path:"PhotoQA",
              component:PhotoQA
            },
            {
              path:"Process",
              component:Process
            },
            {
              path:"UploadQA",
              component:UploadQA
            },
          ]
        }
      ]
    },

    {
      path:'/',
      component: Home,
      name: '首页',
      children:[
        {
          path: '/Index',
          name: '',
          component: Index
        },
      ]
    },
    {
      path:'/',
      component: Home,
      name: '上传',
      children:[
        {
          path: '/UploadOne',
          name: 'UploadOne',
          component: UploadOne
        },
        {
          path: '/UploadAll',
          name: 'UploadAll',
          component: UploadAll
        },
      ]
    },
    {
      path:'/',
      component: Home,
      name: '下载',
      children:[
        {
          path: '/DataDownload',
          name: 'DataDownload',
          component: DataDownload
        },
        {
          path:"/DataCheck",
          name:"DataCheck",
          component:DataCheck
        }
      ]
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }

  ];


export default routes;
