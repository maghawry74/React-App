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
import Login from './Components/Login/Login'

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
      <CartContext>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </CartContext>
    </>
  )
}

export default App
