import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SignOut } from '../../Store/UserSlice'
import { useSelector, useDispatch } from 'react-redux'
export default function NavBar() {
  const user = useSelector((state) => state.User)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { cart } = useSelector((state) => state.Cart)
  // const { cart } = useContext(cartCtx)
  if (pathname.startsWith('/dashboard')) {
    return null
  } else {
    return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900 mt-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-2xl font-bold">
          <h1 className="flex items-center text-2xl cursor-pointer">
            <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
              Depot
            </span>
          </h1>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto text-2xl" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/home"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className="block relative py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <h1
                    className={`absolute top-[-1rem] right-[-1rem] ${
                      cart.length === 0 ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    {cart.length}
                  </h1>
                  <div className="relative">
                    Cart
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="ml-2" />
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About Us
                </NavLink>
              </li>
              {user === null && (
                <li>
                  <NavLink
                    to="/login"
                    className={`$ block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"`}
                  >
                    Login
                  </NavLink>
                </li>
              )}
              {user !== null && user?.role === 'Admin' && (
                <li>
                  <NavLink
                    to="/dashboard/products"
                    className="block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    <FontAwesomeIcon className="mr-2" icon="fa-solid fa-shop" />
                    Dashboard
                  </NavLink>
                </li>
              )}
              {user !== null && (
                <>
                  <li
                    className={`$ flex gap-1 items-center cursor-pointer  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                  >
                    <h1 className="block  py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      {user?.Name}
                    </h1>
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                  </li>
                  <li
                    onClick={() => {
                      localStorage.removeItem('user')
                      dispatch(SignOut())
                    }}
                  >
                    <h1 className="block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Logout
                    </h1>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
