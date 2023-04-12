import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function ShopProduct({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link to={`/product/${product._id}`} className="">
      <div
        className="relative transition-none duration-500"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={product.image} alt={product.ProductName} className="hover:opacity-30 " />
        <div
          className={`${
            isHovered ? 'opacity-100' : 'opacity-0'
          } absolute text-3xl whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-semibold transition-all duration-500 text-center `}
        >
          <h1 className="my-2 ">{product.ProductName}</h1>
          <h1 className="my-2 ">${product.Price}</h1>
        </div>
      </div>
    </Link>
  )
}
