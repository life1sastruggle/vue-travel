import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/route',
      component: () => import('../views/HomePage'),
      children: [
        {path: 'route', component: () => import('../views/RoutePage')},
        {path: 'spot', component: () => import('../views/SpotPage')},
        {path: 'comment', component: () => import('../views/CommentPage')},
        {path: 'weather', component: () => import('../views/WeatherPage')}
      ]
    }
  ]
})
