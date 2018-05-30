import Vue from 'vue'
import Router from 'vue-router'
import Price from '../components/Price'
import Final from '../components/Final'
import Pricelist from '../components/Pricelist'

Vue.use(Router)

export default new Router({
  routes: [
   
    
    {
    path:'/pricelist',
    name:'pricelist',
    component:Pricelist
    },
    {
      path:'/price',
      name:'price',
      component:Price
    },
    {
      path: '/final',
      name: 'final',
      component: Final
    }
  ]
})
