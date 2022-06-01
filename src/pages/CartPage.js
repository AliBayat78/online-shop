import { NavLink, useLocation } from 'react-router-dom'
import Layout from '../common/Layout/Layout'
import { useCart, useCartActions } from '../Context/CartProvider'
import './cartPage.css'

const CartPage = () => {
  const { cart, total } = useCart()
  const dispatch = useCartActions()

  const incrementHandler = (cartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: cartItem })
  }
  const removeHandler = (cartItem) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: cartItem })
  }

  if (!cart.length)
    return (
      <Layout>
        <main>
          <h2>Cart is Empty </h2>
        </main>
      </Layout>
    )

  return (
    <Layout>
      <main className="container">
        <section className="cartCenter">
          <section className="cartItemList">
            {cart.map((item) => {
              return (
                <div className="cartItem">
                  <div className="itemImg">
                    <img src={item.image} alt={item.name}></img>
                  </div>
                  <div>{item.name}</div>
                  <div>{item.offPrice * item.quantity}</div>
                  <div className="btnGroup">
                    <button onClick={() => removeHandler(item)}>remove</button>
                    <button>{item.quantity}</button>
                    <button onClick={() => incrementHandler(item)}>Add</button>
                  </div>
                </div>
              )
            })}
          </section>
          <CartSummery cart={cart} total={total} />
        </section>
      </main>
    </Layout>
  )
}

export default CartPage

const CartSummery = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price
      }, 0)
    : 0

  return (
    <section className="cartSummary">
      <h2 style={{ marginBottom: '30px' }}>Cart Summary</h2>
      <div className="summeryItem">
        <p>original total price</p>
        <p>{originalTotalPrice}$</p>
      </div>
      <div className="summeryItem">
        <p>cart discount</p>
        <p>{originalTotalPrice - total} $</p>
      </div>
      <div className="summeryItem net">
        <p>net price</p>
        <p> {total} $</p>
      </div>
      <NavLink to="/login?redirect=/checkout">
        <button className="btn primary" style={{ marginTop: '15px' }}>
          Go to checkout
        </button>
      </NavLink>
    </section>
  )
}
