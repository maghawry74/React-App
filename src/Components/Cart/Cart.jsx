import { useState } from 'react'
import SuccessfullOrder from './SuccessfulOrder'
import { Link, useNavigate } from 'react-router-dom'
import CartProduct from './CartProduct'
import Spinner from '../Shared/Spinner'
import { MakeOrder } from '../../Queres/DbHandler'
import { useMutation } from 'react-query'
import Modal from '../Shared/Modal'
import Error from '../Shared/Error'
import { useDispatch, useSelector } from 'react-redux'
import { ClearCart } from '../../Store/CartSlice'
export default function Cart() {
  const mutataion = useMutation(({ data, token }) => MakeOrder(data, token))
  const [success, setSuccess] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { cart, Price } = useSelector((state) => state.Cart)
  console.log(useSelector((s) => s.Cart))
  const dispatch = useDispatch()
  const user = useSelector((state) => state.User)
  const navigation = useNavigate()
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
  function OrderHandler() {
    if (user == null) {
      navigation('/login')
      return
    }
    const order = {
      Price: Price,
      user: user.id,
      Products: cart.map((P) => {
        return { Product: P._id, Quantity: P.Quantity }
      }),
    }
    const token = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    mutataion.mutate({ data: order, token })
  }

  if (mutataion.error) {
    return <Error />
  }
  if (mutataion.isLoading) {
    return <Spinner />
  }
  if (mutataion.isSuccess) {
    setSuccess(true)
    dispatch(ClearCart())
  }
  return (
    <div className="w-3/4 mx-auto min-h-screen mb-[19rem]">
      <div className="flex justify-between items-center border-b-2 py-5 border-black transition-all duration-300">
        <div>
          <h1 className="lg:text-4xl sm:text-2xl">Shopping Cart</h1>
          <h1 className={`lg:text-4xl sm:text-2xl ${Price === 0 ? 'opacity-0' : 'opacity-100'}`}>
            Total: $ {Price}
          </h1>
        </div>
        <button
          disabled={cart.length === 0}
          onClick={() => setShowModal(true)}
          className={`${
            cart.length === 0 ? 'bg-gray-500 text-white' : 'bg-black text-white'
          } rounded-md hover:bg-gray-500 hover:text-white transition-all duration-200 py-2 px-4`}
        >
          CheckOut
        </button>
      </div>
      {output}
      {showModal && (
        <Modal closeModal={() => setShowModal(false)} continueAction={OrderHandler}>
          Are You Sure To Continue Purchasing This Order
        </Modal>
      )}
    </div>
  )
}
