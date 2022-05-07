import Layout from '../common/Layout/Layout'
import { useCartActions } from '../Context/CartProvider'
import * as data from '../data/data'

const HomePage = () => {
  const dispatch = useCartActions()

  const addProductHandler = (product) => {
    console.log(product)
    dispatch({ type: 'ADD_TO_CART', payload: product })
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
                    Add to Cart
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
