import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import './assets/style/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter()

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  render: h => h(App)
}).$mount(root)
