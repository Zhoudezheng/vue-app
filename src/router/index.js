import Vue from 'vue'
import Router from 'vue-router'
import Classif  from '../pages/Classif/Classif.vue'
import Miste  from '../pages/Miste/Miste.vue'
import MySelf  from '../pages/MySelf/MySelf.vue'
import ShoppingCart  from '../pages/ShoppingCart/ShoppingCart.vue'
import LeftClass   from '../pages/Classif/LeftClass/LeftClass.vue'
import RightClass from '../pages/Classif/RightClass/RightClass.vue'
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
      component:Classif,
      children:[
        {
          path:'/classif/leftclass',
          component:LeftClass,
        },
        {
          path:'/classif/rightclass',
          component:RightClass,
        },
        {
          path:'',
          redirect:'/classif/leftclass',
        }
      ]
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
