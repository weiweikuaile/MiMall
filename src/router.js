import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home'
import Index from './components/index'
import Product from './components/product'
import Detail from './components/detail'
import Cart from './components/cart'
Vue.use(Router);
export default new Router({
  routes:[
      {
         path:'/',
         name:'home',
         component:Home,
         children:[
             {
               path:'/index',
               name:'index',
               component:Index, 
             },{
                path:'/product/:id',
                name:'product',
                component:Product, 
              },{
                path:'/detail/:id',
                name:'detail',
                component:Detail,  
              }
         ]
      },{
        path:'/cart',
        name:'cart',
        component:Cart,  
      }
  ]
});