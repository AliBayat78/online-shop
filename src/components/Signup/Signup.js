import Input from '../../common/Input/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './signup.css'
import { NavLink } from 'react-router-dom'

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirmation: '',
}

const onSubmit = (values) => {
  console.log(values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is Required').min(6, 'Name length is not valid'),
  email: Yup.string().email('Invalid email format').required('Email is Required'),
  phoneNumber: Yup.string()
    .required('Phone Number is Required')
    .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
    .nullable(),
  password: Yup.string()
    .required('Password is Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain Minimum eight characters, at least one letter, one number and one special character',
    ),
  passwordConfirm: Yup.string()
    .required('Password Confirmation is Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

const SignupForm = () => {
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
          onSubmit="submit"
          disabled={!formik.isValid}
        >
          Register
        </button>
        <NavLink to="/login">
          <p style={{ marginTop: '15px' }}>Already Registered?</p>
        </NavLink>
      </form>
    </div>
  )
}

export default SignupForm
