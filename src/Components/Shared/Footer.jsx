import { useLocation } from 'react-router-dom'

export default function Footer() {
  const { pathname } = useLocation()
  if (pathname.startsWith('/dashboard')) {
    return null
  } else {
    return (
      <div className="py-16  flex justify-around w-full bg-black text-white border-t-2 absolute bottom-0 left-0 right-0 h-[18rem]">
        <div>
          <h1 className="font-bold text-1xl mb-5">CUSTOMER SERVICE</h1>
          <ul>
            <li className="my-2">Help & Contact Us</li>
            <li className="my-2">Returns & Refunds</li>
            <li className="my-2">Online Stores</li>
            <li className="my-2">Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-1xl mb-5">COMPANY</h1>
          <ul>
            <li className="my-2">What We Do</li>
            <li className="my-2">Available Services</li>
            <li className="my-2">Latest Posts</li>
            <li className="my-2">FAQs</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-1xl mb-5">SOCIAL MEDIA</h1>
          <ul>
            <li className="my-2">Twitter</li>
            <li className="my-2">Instagram</li>
            <li className="my-2">Tumblr</li>
            <li className="my-2">Pinterest</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-1xl mb-5">PROFILE</h1>
          <ul>
            <li className="my-2">My Account</li>
            <li className="my-2">Checkout</li>
            <li className="my-2">Order Tracking</li>
            <li className="my-2">Help & Support</li>
          </ul>
        </div>
      </div>
    )
  }
}
