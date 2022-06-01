import { useNavigate } from 'react-router-dom'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import Profile from '../pages/Profile'
import SignupPage from '../pages/SignupPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/carts', component: CartPage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: SignupPage },
  { path: '/profile', component: Profile },
]

export default routes
