import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('../views/Homepage.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('../views/CommentPage.vue'),
      meta: {
        title: '评论'
      }
    }
  ]
})
