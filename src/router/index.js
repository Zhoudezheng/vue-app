import Vue from 'vue'
import Router from 'vue-router'
import Classif  from '../pages/Classif/Classif.vue'
import Miste  from '../pages/Miste/Miste.vue'
import MySelf  from '../pages/MySelf/MySelf.vue'
import ShoppingCart  from '../pages/ShoppingCart/ShoppingCart.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/miste'
    },
    {
      path:'/miste',
      component:Miste
    }
    ,
    {
      path:'/classif',
      component:Classif
    }
    ,
    {
      path:'/shoppingcart',
      component:ShoppingCart
    },
    {
      path:'/myself',
      component:MySelf
    }
  ]
})
