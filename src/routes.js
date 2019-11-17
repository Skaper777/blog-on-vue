import VueRouter from 'vue-router'
import Index from '@/pages/index'
import Contacts from '@/pages/contacts'
import Articles from '@/pages/articles'
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
      path: '/articles',
      component: Articles,     
    },
    {
      path: '/articles/:id',
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