import Input from '../../common/Input/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './login.css'
import { NavLink } from 'react-router-dom'

const initialValues = {
  email: '',
  password: '',
}

const onSubmit = (values) => {
  console.log(values)
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
})

const LoginForm = () => {
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
        <Input formik={formik} name="email" label="Email" />
        <Input formik={formik} name="password" label="Password" type="password" />
        <button
          style={{ width: '400px', margin: '20px 0px' }}
          type="submit"
          className="btn primary"
          onSubmit="submit"
          disabled={!formik.isValid}
        >
          Login
        </button>
        <NavLink to="/register">
          <p style={{ marginTop: '15px' }}>Register Here</p>
        </NavLink>
      </form>
    </div>
  )
}

export default LoginForm
