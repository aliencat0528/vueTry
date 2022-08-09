import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormTest from '@/components/FormTest'
import Login from '@/components/LoginInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/FormTest',
      name: 'FormTest',
      component: FormTest
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
