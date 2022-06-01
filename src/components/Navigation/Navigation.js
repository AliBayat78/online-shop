import { NavLink } from 'react-router-dom'
import './Navigation.scss'
import { useCart } from '../../Context/CartProvider'
import { useAuth } from '../../Context/AuthProvider'

const Navigation = () => {
  const { cart } = useCart()
  const userData = useAuth()
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <div>Ali Shopping</div>
          <li>
            <NavLink className={(navData) => (navData.isActive ? 'activeLink' : '')} to="/">
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="cartLink">
            <NavLink to="/carts">Carts</NavLink>
            <span>{cart.length}</span>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'activeLink' : '')}
              to={userData ? '/profile' : '/login'}
            >
              {userData ? 'profile' : 'Login / Signup'}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
