import { useAuth } from '../../Context/AuthProvider'

const Checkout = () => {
  const auth = useAuth()
  return (
    <div>
      {auth ? (
        <>
          <p>name : {auth.name}</p>
          <p>email: {auth.email}</p>
          <p>tel: {auth.phoneNumber}</p>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  )
}

export default Checkout
