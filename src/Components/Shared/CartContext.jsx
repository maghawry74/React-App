import { useState } from 'react'
import { createContext } from 'react'
const cartCtx = createContext({
  cart: [],
  AddProduct: () => {},
  RemoveProduct: () => {},
  Price: 0,
  IncreaseQty: () => {},
  DecreaseQty: () => {},
})
export default function CartContext({ children }) {
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  function AddProduct(product) {
    if (!cart.some((e) => e._id === product._id)) {
      product.Quantity = 1
      setPrice((prev) => prev + product.Price)
      setCart((prev) => [...prev, product])
    }
  }
  function RemoveProduct(product) {
    setPrice((prev) => prev - product.Price)
    setCart((prev) => prev.filter((p) => p._id !== product._id))
  }
  function IncreaseQty(product) {
    cart.forEach((p) => {
      if (p._id === product._id && p.Quantity < 5) {
        p.Quantity += 1
        setPrice((prev) => prev + p.Price)
      }
    })
  }
  function DecreaseQty(product) {
    cart.forEach((p) => {
      if (p._id === product._id && p.Quantity > 1) {
        p.Quantity -= 1
        setPrice((prev) => prev - p.Price)
      }
    })
  }
  return (
    <cartCtx.Provider
      value={{
        cart: cart,
        AddProduct,
        RemoveProduct,
        Price: price,
        IncreaseQty,
        DecreaseQty,
      }}
    >
      {children}
    </cartCtx.Provider>
  )
}
export { cartCtx }
