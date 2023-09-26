import { createApp } from 'vue'
import router from './router/router.js'
import App from './App.vue'
import PrimeVue from 'primeVue/config'
import AOS from 'aos'
import 'aos/dist/aos.css'
 

createApp(App).use(router).use(AOS).use(PrimeVue).mount('#app')
