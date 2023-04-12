import { useState } from 'react'
import { createContext } from 'react'
const cartCtx = createContext({
  cart: [],
  AddProduct: () => {},
  RemoveProduct: () => {},
})
export default function CartContext({ children }) {
  const [cart, setCart] = useState([])
  function AddProduct(product) {
    if (!cart.some((e) => e._id === product._id)) {
      setCart((prev) => [...prev, product])
    }
  }
  function RemoveProduct(product) {
    setCart((prev) => prev.filter((p) => p._id !== product._id))
  }
  return (
    <cartCtx.Provider
      value={{
        cart: cart,
        AddProduct,
        RemoveProduct,
      }}
    >
      {children}
    </cartCtx.Provider>
  )
}
export { cartCtx }
