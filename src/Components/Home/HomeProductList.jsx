import { useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import HomeProduct from './HomeProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@splidejs/react-splide/css'
import { useQuery } from 'react-query'
import Spinner from '../Shared/Spinner'
import { FetchProducts } from '../../Queres/DbHandler'

export default function HomeProductList() {
  const { isLoading, error, data } = useQuery(['products', 10, 0], FetchProducts)
  let output
  const ref = useRef()
  if (isLoading) {
    output = <Spinner className="my-20" />
  } else if (error) {
    output = <h1 className="my-20 mx-auto w-fit text-3xl font-bold">Error Has Occured</h1>
  } else {
    const products = data.data.products
    output = (
      <Splide
        ref={ref}
        className="w-3/4 mx-auto"
        options={{
          perPage: 3,
          perMove: 3,
          gap: '1rem',
          arrows: false,
          drag: true,
          classes: {
            page: 'hidden',
          },
        }}
      >
        {products?.map((p) => (
          <SplideSlide key={p._id} about={p.ProductName}>
            <HomeProduct key={p._id} product={p} classname="mb-10 " />
          </SplideSlide>
        ))}
      </Splide>
    )
  }
  return (
    <>
      <div className="flex justify-between w-3/4 mx-auto my-10">
        <h1 className="text-2xl font-bold">FEATURED ITEMS</h1>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            onClick={() => ref.current?.splide?.go('<')}
            className="mx-2 cursor-pointer  hover:text-blue-500 text-base"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-right"
            className="mx-2 cursor-pointer hover:text-blue-500 text-base"
            onClick={() => ref.current?.splide?.go('>')}
          />
        </div>
      </div>
      <div className="relative">{output}</div>
    </>
  )
}
