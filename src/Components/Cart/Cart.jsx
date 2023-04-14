import { useContext, useState } from 'react'
import SuccessfullOrder from './SuccessfulOrder'
import { cartCtx } from '../Shared/CartContext'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'
export default function Cart() {
  const [success] = useState(false)
  const { cart, Price } = useContext(cartCtx)
  let output
  if (success) {
    return <SuccessfullOrder />
  }

  if (cart.length === 0) {
    output = (
      <div className="text-center min-h-fit mt-20 flex justify-center items-center flex-col gap-2">
        <h1 className="text-3xl"> Your Cart is Empty Add some Items ! </h1>
        <Link to="/shop" className="bg-black hover:bg-slate-400 text-white py-2 px-4 rounded-md">
          Shop Now
        </Link>
      </div>
    )
  } else {
    output = cart.map((product) => <CartProduct product={product} key={product._id} />)
  }
  return (
    <div className="w-3/4 mx-auto min-h-screen mb-[19rem]">
      <div className="flex justify-between items-center border-b-2 py-5 border-black transition-all duration-300">
        <div>
          <h1 className="lg:text-4xl sm:text-2xl">Shopping Cart</h1>
          <h1 className={`lg:text-4xl sm:text-2xl ${Price === 0 ? 'opacity-0' : 'opacity-100'}`}>
            Total: $ {Price}{' '}
          </h1>
        </div>
        <button className="bg-black text-white rounded-md hover:bg-gray-500 hover:text-white transition-all duration-200 py-2 px-4">
          CheckOut
        </button>
      </div>
      {output}
    </div>
  )
}
