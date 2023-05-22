import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AddProduct } from '../../Store/CartSlice'
import { useDispatch } from 'react-redux'
export default function ShopProduct({ product }) {
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false)
  const navigation = useNavigate()
  function clickEventHandler(e) {
    e.stopPropagation()
    dispatch(AddProduct(product))
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
