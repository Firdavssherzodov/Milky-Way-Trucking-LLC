import { createRouter,createWebHistory } from 'vue-router'
import AOS from "aos";
import 'aos/dist/aos.css';


const route = [
{
path:'/',
name:'home',
component: () => import ('../components/Home.vue')
},
{
  path:'/content1',
  name:'content1',
  component: () => import ('../components/Content_one.vue')
},
{
  path:'/content2',
  name:'content2',
  component: () => import ('../components/Content_two.vue')
},
{
  path:'/content3',
  name:'content3',
  component: () => import ('../components/Content_three.vue')
}

]


let router = createRouter({
    history: createWebHistory(),
    routes:route
  })

  router.beforeEach((to, from, next) => {
    AOS.init(); // Initialize AOS
    next();
  });
  export default router