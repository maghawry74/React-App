import { NavLink, useNavigate } from 'react-router-dom'
import Alert from '../Shared/Alert'
import { useMutation } from 'react-query'
import { UserLogin } from '../../Queres/DbHandler'
import { useEffect } from 'react'
import { Signin } from '../../Store/UserSlice'
import { useDispatch } from 'react-redux'
export default function Login() {
  const dispatch = useDispatch()
  const mutation = useMutation((e) => {
    return UserLogin(e)
  })
  const navigation = useNavigate()
  function FormSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const cred = {
      Email: formData.get('Email'),
      Password: formData.get('Password'),
    }
    mutation.mutate(cred)
  }
  useEffect(() => {
    if (mutation.isSuccess) {
      const user = mutation.data.data
      const loggedUser = {
        role: user.role,
        token: user.token,
        Name: user?.user?.FirstName ?? 'Admin',
        id: user?.user?._id,
      }
      localStorage.setItem('user', JSON.stringify(loggedUser))
      dispatch(Signin(loggedUser))
      if (user.role === 'Admin') {
        navigation('/dashboard/products')
      } else {
        navigation('/shop')
      }
    }
  })

  return (
    <>
      <div className="relative flex mt-10 justify-center items-center">
        <img src="assets/imgs/Dash.png" className="h-80 w-full object-cover" alt="" />
        <h1 className="text-5xl text-white font-bold absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          DEPOT
        </h1>
      </div>
      <form className="h-screen mt-16 container mx-auto" onSubmit={FormSubmit}>
        <h1 className="text-5xl text-center mt-10">LOGIN</h1>
        <div className="w-1/2 mx-auto my-10 flex flex-col items-center gap-5">
          <div>
            <div className="flex w-[30rem]">
              <span className="inline-flex items-center font-bold px-6 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Email
              </span>
              <input
                name="Email"
                required
                type="text"
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
              />
            </div>
          </div>
          <div>
            <div className="flex  w-[30rem]">
              <span className="inline-flex items-center font-bold px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Password
              </span>
              <input
                name="Password"
                required
                type="password"
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="************"
              />
            </div>
          </div>
          {mutation.error?.response?.status === 401 && (
            <Alert type="Alert">Wrong User Name Or Pawword</Alert>
          )}
          {mutation.error?.response?.status === 500 && (
            <Alert type="Alert">An Error Occured Try Again Later</Alert>
          )}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <NavLink to="/register" className="text-xl font-bold">
            Register Now !
          </NavLink>
        </div>
      </form>
    </>
  )
}
