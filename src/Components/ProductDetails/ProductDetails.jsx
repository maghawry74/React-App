import { useParams } from 'react-router-dom'
import fetchProducts from '../../Queres/fetchProducts'
import { useQuery } from 'react-query'
import { cartCtx } from '../Shared/CartContext'
import { useContext } from 'react'
export default function ProductDetails() {
  let output
  const { id } = useParams()
  const { AddProduct } = useContext(cartCtx)
  const { isLoading, data, error } = useQuery('product', () => {
    return fetchProducts(`/products/${id}`)
  })
  if (isLoading) {
    output = <div className="spinner my-20 mx-auto w-fit"></div>
  } else if (error) {
    output = <h1 className="my-20 mx-auto w-fit text-3xl font-bold">Error Has Occured</h1>
  } else {
    const product = data.data
    output = (
      <>
        <div className=" col-start-1 col-end-4 col-span-4 my-16">
          <img src={product?.image} className="w-[36rem] rounded-md shadow-lg" alt="" />
        </div>
        <div className="col-start-5 col-end-6 col-span-2 ">
          <div className="mb-5">
            <h1 className="text-bold lg:text-3xl sm:text-xl">{product?.ProductName}</h1>
            <h3 className="text-bold text-2xl">
              <span className="fs-3 fw-light">${product?.Price}</span>
            </h3>
          </div>
          <p className="text-secondary mt-3">{product?.Description}</p>
          <div className="mt-5  flex gap-5 items-center justify-start">
            <button
              onClick={() => AddProduct(product)}
              className=" bg-black hover:bg-gray-400 hover:text-yellow-50 transition-all duration-300 text-white font-semibold  py-2 w-40 px-5"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="w-3/4 min-h-screen mb-[19rem]  mx-auto grid grid-col-6 sm:grid-col-1 md:grid-col-3 lg:grid-col-6 items-center lg:gap-20 sm:gap-5">
      {output}
    </div>
  )
}
