
import { defineNuxtPlugin } from "#app";
 

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);
    //other components that you need
});
