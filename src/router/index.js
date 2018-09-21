import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myheader from '@/components/myheader'
import index from '@/page/index'
import mycourse from '@/page/mycourse'
import myinfo from '@/page/myinfo'
import login from '@/page/login'
import register from '@/page/register'
import myNotice from '@/page/myNotice'
import informationDetail from '@/page/informationDetail'
import infoCourse from '@/page/infoCourse'
import myDiploma from '@/page/myDiploma'
import myPractice from '@/page/myPractice'
import practiceDetail from '@/page/practiceDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'myheader',
      component:myheader
    },
    {
      path:'/header',
      name:'myheader',
      component:myheader
    },
    {
      path:'/index',
      name:'index',
      component:index
    },
    {
      path:'/course',
      name:'mycourse',
      component:mycourse
    },
    {
      path:'/myinfo',
      name:'myinfo',
      component:myinfo
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/myinformation',
      name:'myNotice',
      component:myNotice
    },
    {
      path:'/informationDetail',
      name:'informationDetail',
      component:informationDetail
    },
    {
      path:'/infoCourse',
      name:'infoCourse',
      component:infoCourse
    },
    {
      path:'/myDiploma',
      name:'myDiploma',
      component:myDiploma
    },
    {
      path:'/myPractice',
      name:'myPractice',
      component:myPractice
    },
    {
      path:'/practiceDetail',
      name:'practiceDetail',
      component:practiceDetail
    }
  ]
})
