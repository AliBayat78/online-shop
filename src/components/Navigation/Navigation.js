import { NavLink } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink className={(navData) => (navData.isActive ? 'activeLink' : '')} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/carts">Carts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
