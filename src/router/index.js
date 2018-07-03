import Vue from 'vue'
import Router from 'vue-router'
import State from '@/components/component/state'
import Mutations from '@/components/component/mutations'
import Getters from '@/components/component/getters'
import Actions from '@/components/component/actions'
import Parent from '@/components/component/parent'
// import Header from '@/components/pages/Header'
// import Home from '@/page/home'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   component:Home
    // }
    {
      path: '/',
      name: 'State',
      component: State
    },
    {
      path:"/mutations",
      component:Mutations
    },
    {
      path:"/getters",
      component:Getters
    },
    {
      path:"/actions",
      component:Actions
    },
    {
      path:"/parent",
      component:Parent
    }
  ]
})
