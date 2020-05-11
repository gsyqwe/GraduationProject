import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import PersonInformation from '@/components/patient/personinformation/personinformation.vue'
import Register from '@/components/patient/register/register.vue'
import checkcases from '@/components/patient/cases/cases.vue'
import Doctor from '@/components/doctor/personinformation/personinformation.vue'
import Admit from '@/components/doctor/acceptregister/acceptregister.vue'
import Diagnose from '@/components/doctor/diagnose/diagnose.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/personinformation',
      name: 'personinformation',
      component: PersonInformation
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path:"/checkcases",
      name:"checkcases",
      component:checkcases
    },
    {
      path:"/doctor",
      name:"doctor",
      component:Doctor
    },
    {
      path:"/admit",
      name:"admit",
      component:Admit
    },
    {
      path:"/diagnose",
      name:"diagnose",
      component:Diagnose
    }
  ]
})
