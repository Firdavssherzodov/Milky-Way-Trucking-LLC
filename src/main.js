import { createApp } from 'vue'
import router from './router/router.js'
import App from './App.vue'
import PrimeVue from 'primeVue/config'

 

createApp(App).use(router).use(PrimeVue).mount('#app')
