import Vue from 'vue'
import Router from 'vue-router'

import Sider from '@/views/BaseSider.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Sider
    }
  ]
})
