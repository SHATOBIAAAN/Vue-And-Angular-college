import EmailContent from '@/components/EmailContent.vue'
import PhoneContent from '@/components/PhoneContent.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { createRouter, createWebHistory } from 'vue-router'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about/:id?',
      component: AboutView,
      // route.params - это объект который содержит все переданные пропы (из RouterView) 
      props: (route) => ({
        title: 'Hello world!',
        message: route.params.message
      })
    },
    {
      path: '/contacts',
      component: ContactView,
      children: [
        {
          path: 'phone',
          component: PhoneContent,
          props: (route) => ({
            phone: route.params.phone
          })
        }, 
        {
          path: 'email',
          component: EmailContent,
          props: (route) => ({
            phone: route.params.email
          })
        }, 
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    }
  ],
})


const isAuth = true

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/about' && !isAuth){
    next('/')
  } else {
    next()
  }
})

export default router
