import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { DeleteProduct } from '../../Queres/DbHandler'
import Modal from '../Shared/Modal'
import { useState } from 'react'
export default function DashboardProduct({ product, refresh }) {
  const navigation = useNavigate()
  const mutation = useMutation(({ data, token }) => DeleteProduct(data, token))
  const [showModal, setShowModal] = useState(false)
  function DeleteHandler() {
    const token = JSON.parse(localStorage.getItem('user')).token
    mutation.mutate({
      data: {
        id: product._id,
        image: product.image,
      },
      token: `Bearer ${token}`,
    })
    setShowModal(false)
    console.log(refresh)
  }

  if (mutation.isError) {
    console.log(mutation.error.response.data.message)
  }

  if (mutation.isLoading) {
    console.log('Loading')
  }
  if (mutation.isSuccess) {
    refresh()
  }
  return (
    <>
      <tr className="bg-white my-2 py-10 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td>
          <img className="w-20 ml-3 rounded-full" src={product.image} alt={product.ProductName} />
        </td>
        <th
          scope="row"
          className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {product.ProductName}
        </th>
        <td className="px-6 py-10">{product.Category}</td>
        <td className="px-6 py-10">${product.Price}</td>
        <td className="px-6 py-10">{product.Amount}</td>
        <td className="px-6 py-10">
          <div className="flex gap-5 justify-center items-center">
            <FontAwesomeIcon
              onClick={() => navigation(`/dashboard/product/${product._id}`)}
              className="text-yellow-600 cursor-pointer"
              icon="fa-solid fa-pen-to-square"
            />
            <FontAwesomeIcon
              onClick={() => setShowModal(true)}
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              className="text-red-600 cursor-pointer"
              icon="fa-solid fa-trash"
            />
          </div>
        </td>
      </tr>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)} continueAction={DeleteHandler}>
          Are You Sure To Delete This Product
        </Modal>
      )}
    </>
  )
}
