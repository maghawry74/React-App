import { useQuery } from 'react-query'
import fetchProducts from '../../Queres/fetchProducts'
import ShopProduct from './ShopProduct'
import { useRef, useState } from 'react'
import Spinner from '../Shared/Spinner'
export default function Shop() {
  let output
  const [category, setCategory] = useState('All')
  const { isLoading, error, data } = useQuery('products', () => fetchProducts('/products'))
  const [products, setProducts] = useState(null)
  const AllProducts = useRef()
  function filterHandler(e) {
    let category = e.target.innerText
    setCategory(category)
    if (category !== 'All') {
      setProducts(AllProducts.current.filter((p) => p.Category === category))
    } else {
      setProducts(AllProducts.current)
    }
  }

  if (isLoading) {
    output = <Spinner className="my-20 col-span-3" />
  } else if (error) {
    output = (
      <h1 className="my-20 mx-auto w-fit col-span-3 text-3xl font-bold">Error Has Occured</h1>
    )
  } else {
    if (products === null) {
      setProducts(data.data)
      AllProducts.current = data.data
    }
    output = products?.map((p) => <ShopProduct key={p._id} product={p} />)
  }
  return (
    <div className="w-4/5 mx-auto min-h-screen my-10">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          onClick={filterHandler}
          type="button"
          className={`${
            category === 'All' ? 'bg-blue-700 text-white' : ''
          } text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
        >
          All
        </button>
        <button
          onClick={filterHandler}
          type="button"
          className={`${
            category === 'Home Decor' ? 'bg-blue-700 text-white' : ''
          } text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
        >
          Home Decor
        </button>
        <button
          onClick={filterHandler}
          type="button"
          className={`${
            category === 'Decoration' ? 'bg-blue-700 text-white' : ''
          } text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
        >
          Decoration
        </button>
        <button
          onClick={filterHandler}
          type="button"
          className={`${
            category === 'Furniture' ? 'bg-blue-700 text-white' : ''
          } text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
        >
          Furniture
        </button>
        <button
          onClick={filterHandler}
          type="button"
          className={`${
            category === 'Lighting' ? 'bg-blue-700 text-white' : ''
          } text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
        >
          Lighting
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 min-h-screen relative justify-center items-center">
        {output}
      </div>
    </div>
  )
}
