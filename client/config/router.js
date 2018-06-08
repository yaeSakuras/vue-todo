import Router from 'vue-router'

import routes from './routes'

// 抛出方法有利于服务端渲染每次new一个新的router，不然会导致内存溢出
export default () => {
  return new Router({
    mode: 'history',
    routes
  })
}
