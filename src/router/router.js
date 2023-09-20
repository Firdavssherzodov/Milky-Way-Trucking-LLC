import { createRouter,createWebHistory } from 'vue-router'



const route = [
{
path:'/',
name:'home',
component: () => import ('../components/Home.vue')
}

]


let router = createRouter({
    history: createWebHistory(),
    routes:route
  })
  export default router