import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    name: 'app',
    path: '/app',
    component: Todo
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  }
]
