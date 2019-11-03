import VueRouter from 'vue-router'
import Index from '@/pages/index'
import Contacts from '@/pages/contacts'
import AboutMe from '@/pages/about-me'

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Index
    },
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/about-me',
      component: AboutMe
    }
  ],
  mode: 'history'
}) 