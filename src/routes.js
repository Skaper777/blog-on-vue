import VueRouter from 'vue-router'
import Index from '@/pages/index'
import Contacts from '@/pages/contacts'
import Rubrics from '@/pages/rubrics'
//import Rubric from '@/pages/rubric'
import Error404 from '@/pages/error404'

//оптимизация (ленивая загрузка)
const Rubric = res => {
  require.ensure(['./pages/rubric.vue'], () => {
    res(
      require('./pages/rubric')
    )
  })
}

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Index,
      name: 'home'
    },
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/rubrics',
      component: Rubrics,     
    },
    {
      path: '/rubrics/:id',
      component: Rubric
    },
    {
      path: '/none',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '*', //редирект на 404
      component: Error404
    }
  ],
  mode: 'history'
}) 