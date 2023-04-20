import { useQuery } from 'react-query'
import { FetchProducts } from '../../Queres/DbHandler'
import ShopProduct from './ShopProduct'
import { useEffect, useRef, useState } from 'react'
import Spinner from '../Shared/Spinner'
export default function Shop() {
  const [Pages, setPages] = useState([])
  const numberOfProductsPerPage = 8
  let output
  const [products, setProducts] = useState(null)
  const [activePage, setActivePage] = useState(1)
  const [filter, setFilter] = useState({
    Category: 'All',
    Sort: false,
  })
  const { isLoading, error, data, refetch } = useQuery(
    [
      `Products ${activePage}`,
      numberOfProductsPerPage,
      (activePage - 1) * numberOfProductsPerPage,
      filter.Category,
    ],
    FetchProducts
  )
  useEffect(() => {
    const arr = []
    for (let i = 1; i <= Math.ceil(Data.current?.count / numberOfProductsPerPage); i++) {
      arr.push(i)
    }
    setPages(arr)
  }, [activePage, products])
  const Data = useRef()
  if (isLoading) {
    output = <Spinner className="my-20 col-span-3" />
  } else if (error) {
    output = (
      <h1 className="my-20 mx-auto w-fit col-span-3 text-3xl font-bold">Error Has Occured</h1>
    )
  } else {
    if (products === null) {
      setProducts(data.data.products)
      Data.current = data.data
    } else {
      output = products?.map((p) => <ShopProduct key={p._id} product={p} />)
    }
  }
  function changePage(e) {
    let page = e.target.innerText
    setActivePage(Number(page))
    refetch()
    setProducts(null)
  }
  function filterHandler(e) {
    let category = e.target.innerText
    setFilter((prev) => {
      return {
        Sort: prev.Sort,
        Category: category,
      }
    })
    refetch()
    setActivePage(1)
    setProducts(null)
  }
  function sortFilter(e) {
    const condition = e.target.value
    setFilter((prev) => {
      return {
        Sort: condition,
        Category: prev.Category,
      }
    })
    setProducts((prev) => SortArray(prev, condition))
  }

  function SortArray(arr, condition) {
    return condition === 'true'
      ? [...arr.sort((a, b) => b.Price - a.Price)]
      : [...arr.sort((a, b) => a.Price - b.Price)]
  }

  return (
    <div className="w-4/5 mx-auto min-h-screen my-10 mb-[19rem]">
      <div className="flex justify-between">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            onClick={filterHandler}
            type="button"
            className={`${
              filter.Category === 'All' ? 'bg-blue-700 text-white' : ''
            } text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700  focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
          >
            All
          </button>
          <button
            onClick={filterHandler}
            type="button"
            className={`${
              filter.Category === 'Home Decor' ? 'bg-blue-700 text-white' : ''
            } text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700   focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
          >
            Home Decor
          </button>
          <button
            onClick={filterHandler}
            type="button"
            className={`${
              filter.Category === 'Decoration' ? 'bg-blue-700 text-white' : ''
            } text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700   focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
          >
            Decoration
          </button>
          <button
            onClick={filterHandler}
            type="button"
            className={`${
              filter.Category === 'Furniture' ? 'bg-blue-700 text-white' : ''
            } text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700   focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
          >
            Furniture
          </button>
          <button
            onClick={filterHandler}
            type="button"
            className={`${
              filter.Category === 'Lighting' ? 'bg-blue-700 text-white' : ''
            } text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700   focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
          >
            Lighting
          </button>
        </div>
        <div className="flex text-xl font-semibold gap-3 items-center">
          <h1>Sort By Price</h1>
          <select
            value={filter.Sort}
            className="grow-0 font-semibold w-fit px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={sortFilter}
          >
            <option value="false">Low to High</option>
            <option value="true">High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid  my-5 md:grid-cols-4 gap-x-2 gap-y-1 min-h-screen relative justify-center items-center">
        {output}
      </div>
      <div className="flex justify-center gap-1">
        {Pages.map((Number) => (
          <button
            key={Number}
            onClick={changePage}
            className={`${
              activePage === Number ? 'bg-blue-600 text-white' : 'bg-gray-300'
            } py-2 px-5 rounded-md mx-2`}
          >
            {Number}
          </button>
        ))}
      </div>
    </div>
  )
}
