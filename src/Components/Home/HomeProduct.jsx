import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeProduct({ product, classname = '' }) {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)
  function hover() {
    setIsHovered(true)
  }
  function unhover() {
    setIsHovered(false)
  }
  function addTocart() {}
  return (
    <div
      className={`${classname} flex flex-col justify-center items-center gap-5 `}
      onMouseEnter={hover}
      onMouseLeave={unhover}
    >
      <div className="text-center relative overflow-hidden">
        <img src={product.image} alt={product.ProductName} className="cursor-pointer" />
        <button
          onClick={() => navigate(`product/${product._id}`)}
          className={`py-2 px-4 text-sm bg-black text-white absolute left-[37%] transition-all duration-500 ${
            !isHovered ? '' : '-translate-y-full'
          }`}
        >
          Quick LOOK
        </button>
      </div>
      <h1 className="text-xl font-bold">{product.ProductName}</h1>
      <div className=" text-center relative overflow-hidden min-w-fit w-[6rem]">
        <a
          href="/"
          className={`transition-all duration-500 cursor-pointer absolute text-base block font-bold ${
            !isHovered ? '-translate-x-full' : ''
          }`}
          onClick={addTocart}
        >
          ADD To Cart
        </a>
        <h2
          className={`z-20 font-bold  duration-500 transition-all ${
            isHovered ? 'translate-x-full' : ''
          }`}
        >
          ${product.Price}
        </h2>
      </div>
    </div>
  )
}
