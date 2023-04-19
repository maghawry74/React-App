import { NavLink, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Dashboard() {
  return (
    <div className="my-5">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 bg-[rgb(245,248,250)] z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 text-center"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 dashboard">
          <NavLink to="/" className="flex items-center pl-2.5 mb-5 text-5xl">
            <span className="text-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              Depot Shop
            </span>
          </NavLink>
          <ul className="space-y-2 font-medium flex mt-10  flex-col text-2xl">
            <li>
              <NavLink
                to="/dashboard/products"
                className={` flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon="fa-solid fa-shop" className="text-base" />
                  <h1>Products</h1>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/orders"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon="fa-solid fa-receipt" />
                  <h1>Orders</h1>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 py-4 sm:ml-64 bg-[rgb(245,248,250)] w-4/5 mx-auto rounded-xl min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}
