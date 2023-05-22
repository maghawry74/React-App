import { useDispatch } from 'react-redux'
import { RemoveProduct, DecreaseQty, IncreaseQty } from '../../Store/CartSlice'
export default function CartProduct({ product }) {
  const dispatch = useDispatch()
  return (
    <div
      className="grid grid-cols-[repeat(4,minmax(20%,auto))_100px]
      justify-around  border-b-[1px] py-5 border-gray-500 items-center text-center  my-5"
    >
      <img src={product.image} className="w-28 rounded-md flex-shrink-0" alt="" />
      <h1 className="lg:text-2xl sm:text-xl ">{product.ProductName}</h1>
      <h1 className="lg:text-2xl sm:text-xl  ">${product.Price}</h1>
      <div className="flex justify-center gap-5 items-center ">
        <img
          onClick={() => dispatch(DecreaseQty(product))}
          src="assets/icons/minus.png"
          alt=""
          className="cursor-pointer  lg:w-[14px] sm:w-[12px] lg:h-4 sm:h-3 z-10 rotate-180 shadow-lg"
        />
        <p className="font-bold text-xl">{product.Quantity}</p>
        <img
          onClick={() => dispatch(IncreaseQty(product))}
          src="assets/icons/plus.png"
          alt=""
          className="cursor-pointer  lg:w-[14px] sm:w-[12px] lg:h-4 sm:h-3  z-10 rotate-0"
        />
      </div>
      <img
        src="assets/icons/close.png"
        onClick={() => dispatch(RemoveProduct(product))}
        className="w-3 cursor-pointer"
        alt=""
      />
    </div>
  )
}
