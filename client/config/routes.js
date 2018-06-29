// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    name: 'app',
    // path: '/app',
    path: '/app/:id',
    component: () => import('../views/todo/todo.vue'),
    props: true,
    // props: (router) => ({ id:router.query.id })
    meta: {
      title: 'this is app',
      description: 'akjda'
    },
    beforeEnter (to, from, next) {
      console.log('beforeEnter')
      next()
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
