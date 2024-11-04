import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from './router';
import 'primeicons/primeicons.css';
import ToastService from 'primevue/toastservice';

const app = createApp(App);
app.use(ToastService);
app.use(router); 
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
 }); 
app.mount('#app');
