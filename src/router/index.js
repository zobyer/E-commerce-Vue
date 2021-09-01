import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import allFoods from '../views/allFoods.vue'
import Login from '../views/logIn.vue'
import Registration from '../views/Registration.vue'
import Orders from '../views/Order.vue'
import Image from '../views/foodsInsert.vue'
import singleFood from '../views/foodDetails.vue'
import placedOrders from '../views/placeOrders.vue'
import insertFood from '../views/Admin/insertfood.vue'
import adminOrders from '../views/Admin/orders.vue'
import adminFoodsList from '../views/Admin/foods.vue'
import updateFood from '../views/Admin/updateFood.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/my-orders',
    name: 'Orders',
    component: Orders
  },

  {
    path: '/all-foods',
    name: 'allFoods',
    component: allFoods
  },
  {
    path: '/food/:id',
    name: 'singleFood',
    component: singleFood
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/insert-img',
    name: 'Image',
    component: Image
  },
  {
    path: '/my-orders',
    name: 'placedOrders',
    component: placedOrders
  },
  {
    path: '/admin/insert-food',
    name: 'insertFood',
    component: insertFood
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin/orders/:state',
    name: 'adminOrders',
    component: adminOrders
  },
  {
    path: '/admin/foods',
    name: 'adminFoodsList',
    component: adminFoodsList
  },
  {
    path: '/admin/update/food/:id',
    name: 'updateFood',
    component: updateFood
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
