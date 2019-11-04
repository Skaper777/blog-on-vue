import VueRouter from 'vue-router'
import Index from '@/pages/index'
import Contacts from '@/pages/contacts'
import Rubrics from '@/pages/rubrics'
import Rubric from '@/pages/rubric'

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
      path: '/rubrics',
      component: Rubrics
    },
    {
      path: '/rubrics/:id',
      component: Rubric
    }
  ],
  mode: 'history'
}) 