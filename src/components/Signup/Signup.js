import Input from '../../common/Input/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './signup.css'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { signupUser } from '../../services/signupService'
import { useEffect, useState } from 'react'
import { toastComponent } from '../../common/toast/toast'
import { useAuth, useAuthActions } from '../../Context/AuthProvider'

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirm: '',
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is Required').min(6, 'Name length is not valid'),
  email: Yup.string().email('Invalid email format').required('Email is Required'),
  phoneNumber: Yup.string()
    .required('Phone Number is Required')
    .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
    .nullable(),
  password: Yup.string().required('Password is Required'),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   'Must Contain Minimum eight characters, at least one letter, one number and one special character',
  // )
  passwordConfirm: Yup.string()
    .required('Password Confirmation is Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

const SignupForm = () => {
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
    const { name, email, phoneNumber, password } = values
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    }

    try {
      const { data } = await signupUser(userData)
      setAuth(data)
      localStorage.setItem('authState', JSON.stringify(data))
      console.log(data)
      navigate(redirect, { replace: true })
    } catch (error) {
      if (error.response && error.response.data.message) setError(error.response.data.message)
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  })

  return (
    <div className="formContainer">
      <form className="form-control" onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="email" label="Email" />
        <Input formik={formik} name="phoneNumber" label="Phone Number" type="tel" />
        <Input formik={formik} name="password" label="Password" type="password" />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="Password confirmation"
          type="password"
        />
        <button
          style={{ width: '400px', margin: '20px 0px' }}
          type="submit"
          className="btn primary"
          disabled={!formik.isValid}
        >
          Register
        </button>
        {error && toastComponent('error', error, setError)}
        <NavLink to={`/login?redirect=${redirect}`}>
          <p style={{ marginTop: '15px' }}>Already Registered?</p>
        </NavLink>
      </form>
    </div>
  )
}

export default SignupForm
