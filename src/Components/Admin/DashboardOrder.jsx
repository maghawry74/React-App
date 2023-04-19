import { NavLink } from 'react-router-dom'
export default function DashboardOrder({ order }) {
  return (
    <tr className="bg-white my-2 py-10 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td>{order._id.slice(0, 8)}</td>
      <th
        scope="row"
        className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {order.user?.FirstName ?? 'Na'}
      </th>
      <td className="px-6 py-10">{order.Delivered ? 'Completed' : 'Pending'}</td>
      <td className="px-6 py-10">${order.Price}</td>
      <td className="px-6 py-10">{new Date(order.createdAt).toDateString()}</td>
      <td className="px-6 py-10">
        <div className="flex gap-5 justify-center items-center">
          <NavLink
            className="py-2 px-5 rounded-md bg-blue-200 text-black"
            to={`/dashboard/order/${order._id}`}
          >
            Details
          </NavLink>
        </div>
      </td>
    </tr>
  )
}
