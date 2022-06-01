import { toast } from 'react-toastify'

export const toastComponent = (value, message, setError) => {
  toast[value](message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: 'toast-test',
  })

  setError(null)
}
