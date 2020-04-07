import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import PersonInformation from '@/components/patient/personinformation/personinformation.vue'
import Register from '@/components/patient/register/register.vue'

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
    }
  ]
})
