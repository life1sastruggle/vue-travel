import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/routes',
      component: () => import('../views/HomePage'),
      children: [
        {path: 'routes', component: () => import('../views/RoutesPage')},
        {path: 'spots', component: () => import('../views/SpotsPage')},
        {path: 'comments', component: () => import('../views/CommentsPage')},
        {path: 'weather', component: () => import('../views/WeatherPage')}
      ]
    }
  ]
})
