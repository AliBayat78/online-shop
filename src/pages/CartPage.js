import Layout from '../common/Layout/Layout'
import { useCart } from '../Context/CartProvider'
import './cartPage.css'

const CartPage = () => {
  const { cart } = useCart()

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
        <section className='cartCenter'>
          <section className="cartItemList">
            {cart.map((item) => {
              return (
                <div className="cartItem">
                  <div className="itemImg">
                    <img src={item.image} alt={item.name}></img>
                  </div>
                  <div>{item.name}</div>
                  <div>{item.price * item.quantity}</div>
                  <div>
                    <button>remove</button>
                    <button>{item.quantity}</button>
                    <button>Add</button>
                  </div>
                </div>
              )
            })}
          </section>
          <section className="cartSummary">cart summary</section>
        </section>
      </main>
    </Layout>
  )
}

export default CartPage
