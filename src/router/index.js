import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ClientLoginView from '../views/ClientLoginView.vue'
import ClientView from '@/views/ClientView.vue'
import ClientProfileView from '@/views/ClientProfileView.vue'
import RestaurantSignupView from '@/views/RestaurantSignupView.vue'
import RestaurantLoginView from '@/views/RestaurantLoginView.vue'
import RestaurantView from '@/views/RestaurantView.vue'
import RestaurantProfileView from '@/views/RestaurantProfileView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/SignUpView',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/ClientLoginView',
    name: 'ClientLoginView',
    component: ClientLoginView
  },
  {
    path: '/ClientView',
    name: 'ClientView',
    component: ClientView
  },
  {
    path: '/ClientProfileView',
    name: 'ClientProfileView',
    component: ClientProfileView
  },
  {
    path: '/RestaurantSignupView',
    name: 'RestaurantSignupView',
    component: RestaurantSignupView
  },
  {
    path: '/RestaurantLoginView',
    name: 'RestaurantLoginView',
    component: RestaurantLoginView
  },
  {
    path: '/RestaurantView',
    name: 'RestaurantView',
    component: RestaurantView
  },
  {
    path: '/RestaurantProfileView',
    name: 'RestaurantProfileView',
    component: RestaurantProfileView
  },
  
]

const router = new VueRouter({
  routes
})

export default router
