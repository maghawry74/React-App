import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cartCtx } from '../Shared/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function ShopProduct({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { AddProduct } = useContext(cartCtx)
  const navigation = useNavigate()
  function clickEventHandler(e) {
    console.log(e)
    e.stopPropagation()
    AddProduct(product)
  }
  return (
    <div className="cursor-pointer" onClick={() => navigation(`/product/${product._id}`)}>
      <div
        className="relative transition-none duration-500"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden ">
          <img
            src={product.image}
            alt={product.ProductName}
            className="hover:opacity-30  shadow-xl rounded-lg"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-cart-plus"
            className={`absolute top-5 right-0 text-2xl ${
              isHovered ? '-translate-x-7' : 'translate-x-7'
            } transition-all duration-500 cursor-pointer`}
            onClick={clickEventHandler}
          />
        </div>
        <div
          className={`${
            isHovered ? 'opacity-100' : 'opacity-0'
          } absolute text-3xl whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-semibold transition-all duration-500 text-center `}
        >
          <h1 className=" text-lg">{product.ProductName}</h1>
          <h1 className="text-lg">${product.Price}</h1>
        </div>
      </div>
    </div>
  )
}
