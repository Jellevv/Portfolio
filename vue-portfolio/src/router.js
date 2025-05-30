import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import AboutMe from '@/views/AboutMe.vue';
import Projects from '@/views/Projects.vue';
import Contact from '@/views/ContactMe.vue';
import Privacy from '@/views/Privacy.vue';
import Wpl from '@/views/Wpl.vue';
import NotFound from "@/views/NotFound.vue";


const routes = [
    { path: '/', component: Index },
    { path: '/about', component: AboutMe },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
    { path: '/privacy', component: Privacy},
    { path: '/wpl', component: Wpl},
    { path: "/:notFound(.*)", name: "NotFound", component: NotFound }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 };
    }
  
  });
  
  export default router;