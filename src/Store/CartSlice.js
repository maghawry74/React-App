import { createSlice } from '@reduxjs/toolkit'

const CartInitialState = {
  cart: [],
  Price: 0,
}

const CartSlice = createSlice({
  name: 'Cart',
  initialState: CartInitialState,
  reducers: {
    AddProduct: (state, action) => {
      if (!state.cart.some((e) => e._id === action.payload._id)) {
        let addedProduct = { ...action.payload, Quantity: 1 }
        state.cart.push(addedProduct)
        state.Price += action.payload.Price
        return state
      }
    },
    RemoveProduct: (state, action) => {
      state.cart = state.cart.filter((P) => P._id !== action.payload._id)
      state.Price -= action.payload.Price * action.payload.Quantity
      return state
    },
    IncreaseQty: (state, action) => {
      state.cart.forEach((p) => {
        if (p._id === action.payload._id && p.Quantity < 5) {
          p.Quantity += 1
          state.Price += p.Price
        }
      })
      return state
    },
    DecreaseQty: (state, action) => {
      state.cart.forEach((p) => {
        if (p._id === action.payload._id && p.Quantity > 1) {
          p.Quantity -= 1
          state.Price -= p.Price
        }
      })
      return state
    },
    ClearCart: (state, action) => {
      return []
    },
  },
})

export const { AddProduct, ClearCart, DecreaseQty, IncreaseQty, RemoveProduct } = CartSlice.actions

export default CartSlice.reducer
