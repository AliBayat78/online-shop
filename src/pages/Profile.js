import Layout from '../common/Layout/Layout'
import { useAuth } from '../Context/AuthProvider'

const Profile = () => {
  const auth = useAuth()

  return (
    <Layout>
      <div>
        name : {auth.name}, email: {auth.email}, phoneNumber: {auth.phoneNumber}
      </div>
    </Layout>
  )
}

export default Profile
