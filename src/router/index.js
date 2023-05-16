import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Menu from '../views/Menu'
import Product from '../components/Product'


const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/menu', name: 'Menu', component: Menu},
  {path: '/update/:id?', name: 'UpdateComponent', component: Product}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
