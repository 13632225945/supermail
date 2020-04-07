import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Orderlist = () => import('views/orderlist/Orderlist')
const People = () => import('views/people/People')
const More = () => import('views/more/More')

Vue.use(VueRouter)

const routes = [{
  path: '/home',
  component: Home
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/orderlist',
  component: Orderlist
}, {
  path: '/people',
  component: People
}, {
  path: '/more',
  component: More
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
