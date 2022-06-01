import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import routes from './routes/routes'
import CartProvider from './Context/CartProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthProvider from './Context/AuthProvider'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <ToastContainer />
          <Routes>
            {routes.map((route) => {
              return <Route key={route.path} path={route.path} element={<route.component />} />
            })}
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App
