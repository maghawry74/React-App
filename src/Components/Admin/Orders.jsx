import { useQuery } from 'react-query'
import { FetchOrders } from '../../Queres/DbHandler'
import Spinner from '../Shared/Spinner'
import Error from '../Shared/Error'
import DashboardOrder from './DashboardOrder'
import { useEffect, useState } from 'react'
export default function Orders() {
  const [sort, setsort] = useState(false)
  const { isLoading, isError, data, refetch } = useQuery('order', () => FetchOrders(sort))
  useEffect(() => {
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort])
  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <Error />
  }
  const Orders = data.data.data
  return (
    <div className="">
      <div className="flex justify-between mt-3 px-5 items-center relative">
        <h1 className="text-3xl">Orders</h1>
        <div className="flex text-base font-semibold gap-3 items-center">
          <h1>Sort By Status</h1>
          <select
            value={sort}
            id="countries"
            className="grow-0 font-semibold w-fit px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setsort(e.target.value)
            }}
          >
            <option value="false">Pending</option>
            <option value="true">Completed</option>
          </select>
        </div>
      </div>
      {Orders.length !== 0 ? (
        <div className="mt-10  mx-2 shadow-xl rounded-lg">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-base text-center text-left text-gray-500 dark:text-gray-400">
              <thead className="text-base border-spacing-2 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Order Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Customer name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Orders?.map((o) => (
                  <DashboardOrder key={o._id} order={o} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1 className="text-3xl absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2">
          There Are No Orders At the Moment
        </h1>
      )}
    </div>
  )
}
