import Input from '../../common/Input/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './login.css'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loginUser } from '../../services/loginService'
import { toastComponent } from '../../common/toast/toast'
import { useAuth, useAuthActions } from '../../Context/AuthProvider'

const initialValues = {
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
})

const LoginForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const setAuth = useAuthActions()
  const redirect = searchParams.get('redirect') || '/'
  const auth = useAuth()

  useEffect(() => {
    if (auth) navigate(redirect)
  }, [redirect, auth])

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values)
      setAuth(data)
      localStorage.setItem('authState', JSON.stringify(data))
      toastComponent('success', 'Login Succeed', setError)
      navigate(redirect, { replace: true })
    } catch (error) {
      if (error.response && error.response.data.message) setError(error.response.data.message)
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
    enableReinitialize: true,
  })

  return (
    <div className="formContainer">
      <form className="form-control" onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="Email" />
        <Input formik={formik} name="password" label="Password" type="password" />
        <button
          style={{ width: '400px', margin: '20px 0px' }}
          type="submit"
          className="btn primary"
          disabled={!formik.isValid}
        >
          Login
        </button>
        {error && toastComponent('error', error, setError)}
        <NavLink to={`/register?redirect=${redirect}`}>
          <p style={{ marginTop: '15px' }}>Register Here</p>
        </NavLink>
      </form>
    </div>
  )
}

export default LoginForm
