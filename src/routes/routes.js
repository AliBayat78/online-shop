import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/carts', component: CartPage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: SignupPage },
]

export default routes
