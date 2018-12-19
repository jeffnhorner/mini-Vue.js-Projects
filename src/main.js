import Vue from 'vue'
import vueRouter from 'vue-router';
import vueResource from 'vue-resource'

import Home from './components/Home'
import Weather from './components/Weather'
import Users from './components/Users'
import ToDo from './components/ToDo'
import Quotes from './components/Quotes'
import Calculator from './components/Calculator'
import ColorGame from './components/ColorGame/ColorGame'

import './styles.css'

Vue.use(vueResource)
Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/weather', component: Weather},
    {path: '/todo', component: ToDo},
    {path: '/quotes', component: Quotes},
    {path: '/calculator', component: Calculator},
    {path: '/color-game', component: ColorGame},
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="nav">
      <ul>
        <li @click="navItem"><router-link to="/">Home</router-link></li>
        <li @click="navItem"><router-link to="/weather">Weather</router-link></li>
        <li @click="navItem"><router-link to="/todo">Todo List</router-link></li>
        <li @click="navItem"><router-link to="/quotes">Quote Generator</router-link></li>
        <li @click="navItem"><router-link to="/calculator">Calculator</router-link></li>
        <li @click="navItem"><router-link to="/color-game">Color Game</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `,
  methods: {
    navItem() {
      if (window.location.pathname == '/calculator') {
        document.body.classList.add('calc');
      } else if (window.location.pathname !== '/calculator') {
        document.body.classList.remove('calc');
      }
    }
  }
}).$mount('#app')