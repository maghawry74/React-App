import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import NavBar from './Components/Shared/NavBar'
import Footer from './Components/Shared/Footer'
import AboutUs from './Components/About Us/AboutUs'
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'
import CartContext from './Components/Shared/CartContext'
import Register from './Components/Account/Register'
import Dashboard from './Components/Admin/Dashboard'
import Orders from './Components/Admin/Orders'
import Products from './Components/Admin/Products'
import NotFound from './Components/Shared/NotFound'
import NewProduct from './Components/Admin/NewProduct'
import EditProduct from './Components/Admin/EditProduct'
import Login from './Components/Account/Login'
import OrderDetails from './Components/Admin/OrderDetails'
import AuthLayer from './Components/Shared/AuthLayer'
import { useContext, useEffect, useState } from 'react'
import AdminLayer from './Components/Shared/AdminLayer'
import { UserCtx } from './Components/Shared/UserContext'
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon])
library.add(...iconList)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
})
function App() {
  const { user } = useContext(UserCtx)
  return (
    <>
      <CartContext>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route element={<AuthLayer user={user} />}>
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="register" element={<Register />} />
              <Route element={<AdminLayer user={user} />}>
                <Route path="dashboard" element={<Dashboard />}>
                  <Route index element={<Products />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="products" element={<Products />} />
                  <Route path="Product" element={<NewProduct />} />
                  <Route path="Product/:id?" element={<EditProduct />} />
                  <Route path="Order/:id" element={<OrderDetails />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </CartContext>
    </>
  )
}

export default App
