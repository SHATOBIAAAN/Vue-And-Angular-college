import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import EmailContent from '@/components/EmailContent.vue'
import PhoneContent from '@/components/PhoneContent.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: HomeView },
        { path: '/about', component: AboutView },
        { path: '/contact', component: ContactView },
        { path: '/email', component: EmailContent },
        { path: '/phone', component: PhoneContent },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
    ],
})

export default router
