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
import UserContext from './Components/Shared/UserContext'
import Login from './Components/Account/Login'
import Register from './Components/Account/Register'
import Dashboard from './Components/Admin/Dashboard'
import Orders from './Components/Admin/Orders'
import Products from './Components/Admin/Products'
import NotFound from './Components/Shared/NotFound'

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
  return (
    <>
      <UserContext>
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
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="dashboard" element={<Dashboard />}>
                  <Route index element={<Products />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="products" element={<Products />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </QueryClientProvider>
        </CartContext>
      </UserContext>
    </>
  )
}

export default App
