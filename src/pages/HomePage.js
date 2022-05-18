import Layout from '../common/Layout/Layout'
import { useCartActions, useCart } from '../Context/CartProvider'
import * as data from '../data/data'
import checkInCart from '../utils/checkInCart'
import { toast } from 'react-toastify'

const HomePage = () => {
  const { cart } = useCart()
  const dispatch = useCartActions()

  const addProductHandler = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })

    toast.success(`${product.name} added to cart !`)
  }

  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section key={product.id} className="product">
                <div className="productImg">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-description">
                  <p>{product.name}</p>
                  <p> $ {product.price}</p>
                  <button className="btn primary" onClick={() => addProductHandler(product)}>
                    {checkInCart(cart, product) ? 'In Cart' : 'Add to Cart'}
                  </button>
                </div>
              </section>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export default HomePage
