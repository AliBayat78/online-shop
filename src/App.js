import './App.css'
import { Routes, Route } from 'react-router-dom'
import routes from './routes/routes'
import CartProvider from './Context/CartProvider'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          {routes.map((route) => {
            return <Route key={route.path} path={route.path} element={<route.component />} />
          })}
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App
