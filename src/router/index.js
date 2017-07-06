import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
// import Dominic from 'components/Dominic'

// 비동기 처리..
const Dominic = resolve => require(['components/Dominic'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/dominic',
      name: 'DominicComponent',
      component: Dominic
    }
  ]
})
