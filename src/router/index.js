import { createRouter, createWebHistory } from 'vue-router';
import SingIn from '../Pages/SingIn.vue';
import SingUp from '../Pages/SingUp.vue';
import GridContact from '../Pages/ListContact.vue';

const routes = [
  { path: '/', component: SingIn },
  { path: '/login', component: SingUp },
  { path: '/list', component: GridContact }
  //{ path: '/about', component: AboutPage },
  //{ path: '/contact', component: ContactPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;