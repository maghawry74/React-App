import { useQuery } from 'react-query'
import { FetchProducts } from '../../Queres/DbHandler'
import Spinner from '../Shared/Spinner'
import Error from '../Shared/Error'
import DashboardProduct from './DashboardProduct'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
export default function Products() {
  const navigation = useNavigate()
  const numberOfProductsPerPage = 8
  const [Pages, setPages] = useState([])
  let content
  const Data = useRef()
  const [activePage, setActivePage] = useState(1)
  const [products, setProducts] = useState(null)
  const { isLoading, isError, isSuccess, data, refetch } = useQuery(
    ['DashboardProducts', numberOfProductsPerPage, (activePage - 1) * numberOfProductsPerPage],
    FetchProducts,
    {
      cacheTime: 0,
    }
  )
  if (isLoading) {
    content = <Spinner className="" />
  }
  if (isError) {
    content = <Error />
  }
  if (isSuccess) {
    if (products == null) {
      setProducts(data.data.products)
      Data.current = data.data.count
    }
    content = (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-base text-center  text-gray-500 dark:text-gray-400">
          <thead className="text-base border-spacing-2 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((p) => (
              <DashboardProduct key={p._id} refresh={Refresh} product={p} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  useEffect(() => {
    const numberOfPages = Math.ceil(Data.current / numberOfProductsPerPage)
    const arr = []
    for (let i = 1; i <= numberOfPages; i++) {
      arr.push(i)
    }
    setPages(arr)
  }, [activePage, products])
  function changePage(e) {
    let page = e.target.innerText
    setActivePage(Number(page))
    Refresh()
  }

  function Refresh() {
    refetch()
    setProducts(null)
  }
  return (
    <div>
      <div className="flex justify-between p-5">
        <h1 className="text-3xl">Products</h1>
        <button
          onClick={() => navigation('/dashboard/Product')}
          className="bg-green-500 text-white py-2 px-4 rounded-lg"
        >
          Create
        </button>
      </div>
      <div className="flex justify-start gap-1 my-5">
        {Pages.map((number) => (
          <button
            key={number}
            onClick={changePage}
            className={`${
              activePage === number ? 'bg-blue-600 text-white' : 'bg-gray-300'
            } py-2 px-5 rounded-md mx-2`}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="mt-10 relative mx-2 shadow-xl rounded-lg min-h-screen flex justify-start items-start">
        {content}
      </div>
    </div>
  )
}
