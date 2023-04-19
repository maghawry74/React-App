import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigation = useNavigate()
  return (
    <div className="w-full min-h-screen flex justify-center items-center mb-[18rem] NotFound__Main shadow-2xl  ">
      <div className="bg-white flex flex-col justify-center items-center text-center h-[35rem] shadow-2xl gap-3 px-10 py-16 rounded-2xl">
        <h1 className="text-5xl">Oops</h1>
        <p className="text-gray-400 w-1/2 text-base font-bold">We can't find that page.</p>
        <img className="object-cover w-3/5" src="assets/imgs/404-error.png" alt="" />
        <button
          onClick={() => navigation('/')}
          className="py-2 px-5 bg-indigo-600 text-white rounded-xl"
        >
          Home
        </button>
      </div>
    </div>
  )
}
