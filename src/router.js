import {createRouter,createWebHashHistory} from 'vue-router'

// console.log(Router)

const router =  createRouter({
  history: createWebHashHistory(),
  routes:[
    {
      path:'/home',
      component:()=> import('./view/home.vue')
    },{
      path:'/login',
      component:() => import('./view/login.vue')
    }
  ]
});


// router.beforeResolve()

export default router