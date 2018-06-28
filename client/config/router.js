import Router from 'vue-router'

import routes from './routes'

// 抛出方法有利于服务端渲染每次new一个新的router，不然会导致内存溢出
export default () => {
  return new Router({
    routes,
    mode: 'history',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    parseQuery (query) {},
    stringifyQuery (obj) {}
  })
}
