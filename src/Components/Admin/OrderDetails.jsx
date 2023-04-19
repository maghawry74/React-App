import { useMutation } from 'react-query'
import { GetOrderById, CompleteOrder } from '../../Queres/DbHandler'
import { useParams } from 'react-router-dom'
import Error from '../Shared/Error'
import Spinner from '../Shared/Spinner'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function OrderDetails() {
  const { id } = useParams()
  const GetOrder = useMutation((id) => GetOrderById(id))
  const FinishOrder = useMutation(({ id, token }) => CompleteOrder(id, token))
  useEffect(() => {
    GetOrder.mutate(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  let content
  let completeOrderMSG = 'Complete Order'

  function CompleteOrderHandler() {
    const token = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    FinishOrder.mutate({ id, token })
  }
  if (FinishOrder.isError) {
    completeOrderMSG = <Error />
  }
  if (FinishOrder.isLoading) {
    completeOrderMSG = 'Loading ... '
  }
  if (FinishOrder.isSuccess) {
    completeOrderMSG = <h1 className="text-center">Order Has Been Completed Successfully</h1>
  }
  if (GetOrder.error) {
    content = <Error />
  }
  if (GetOrder.isLoading) {
    content = <Spinner />
  }
  if (GetOrder.isSuccess) {
    const order = GetOrder.data.data
    content = (
      <div className="w-[90%] min-h-screen mx-auto">
        <h1 className="text-3xl my-5 pt-5 font-bold">Customer Details</h1>
        <div className="flex justify-start w-fit rounded-3xl shadow-lg">
          <div className="bg-white py-4 px-6  text-xl w-fit flex flex-col justify-center gap-5">
            <h1>
              <FontAwesomeIcon className="mr-2" icon="fa-solid fa-circle-user" />
              Name
            </h1>
            <h1>
              <FontAwesomeIcon className="mr-2" icon="fa-solid fa-at" /> Email
            </h1>
            <h1>
              <FontAwesomeIcon className="mr-2" icon="fa-solid fa-phone" />
              Phone
            </h1>
            <h1>
              <FontAwesomeIcon className="mr-2" icon="fa-solid fa-location-dot" />
              Address
            </h1>
          </div>
          <div className="bg-white p-10 text-xl w-fit flex flex-col gap-5">
            <h1>{`${order.user.FirstName}  ${order.user.LastName}`}</h1>
            <h1>{order.user.Email}</h1>
            <h1>{order.user.Phone}</h1>
            <h1>{`${order.user.Address.governorate}, ${order.user.Address.City}`}</h1>
          </div>
        </div>
        <div className="mt-10  mx-2 shadow-xl rounded-lg">
          <div className="relative flex flex-col overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-base text-start  text-gray-500 dark:text-gray-400">
              <thead className="text-base border-spacing-2 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.Products.map(({ Product, Quantity }) => {
                  return (
                    <tr className="bg-white my-2 py-10 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td>
                        <img
                          className="w-20 ml-3 rounded-full"
                          src={Product.image}
                          alt={Product.ProductName}
                        />
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {Product.ProductName}
                      </th>
                      <td className="px-6 py-10">{Quantity}</td>
                      <td className="px-6 py-10">${Product.Price}</td>
                      <td className="px-6 py-10">${Quantity * Product.Price}</td>
                    </tr>
                  )
                })}
                <tr className="bg-white my-2 py-5 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4  text-black"></td>
                  <td className="px-6 py-4  text-black"></td>
                  <td className="px-6 py-4  text-black"></td>
                  <td className="px-6 py-4">
                    <h1 className="text-2xl font-bold">Grand Total</h1>
                  </td>
                  <td className="px-6 py-4">
                    <h1 className="text-2xl font-bold">${order.Price}</h1>
                  </td>
                  <td colSpan="2" className=""></td>
                </tr>
              </tbody>
            </table>
            <div className={` ${order.Delivered ? 'hidden' : ''} flex justify-end my-2  mx-auto`}>
              <button
                disabled={FinishOrder.isLoading || FinishOrder.isSuccess}
                onClick={CompleteOrderHandler}
                className=" bg-green-700 py-3 px-5  rounded-md text-white w-fit"
              >
                {completeOrderMSG}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <div className="min-h-screen">{content}</div>
}
