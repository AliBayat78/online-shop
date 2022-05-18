import { NavLink } from 'react-router-dom'
import './Navigation.scss'
import { useCart } from '../../Context/CartProvider'

const Navigation = () => {
  const { cart } = useCart()
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink className={(navData) => (navData.isActive ? 'activeLink' : '')} to="/">
              Home
            </NavLink>
          </li>
          <li className="cartLink">
            <NavLink to="/carts">Carts</NavLink>
            <span>{cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
