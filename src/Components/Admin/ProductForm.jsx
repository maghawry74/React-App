import { useContext, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { AddProduct, UpdateProduct } from '../../Queres/DbHandler'
import { useNavigate } from 'react-router-dom'
import { UserCtx } from '../Shared/UserContext'
import Spinner from '../Shared/Spinner'
import Toast from '../Shared/Toast'
export default function ProductForm({ product }) {
  const { user } = useContext(UserCtx)
  const ImageFile = useRef()
  let Message = ''
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
      ProductName: product?.ProductName,
      Description: product?.Description,
      Amount: product?.Amount,
      Price: product?.Price,
      Category: product?.Category,
      image: product?.image,
    },
  })
  const [hero, setHero] = useState(product?.image ?? '/assets/imgs/Hero.jpg')
  const mutation = useMutation(({ data, token }) =>
    product === undefined ? AddProduct(data, token) : UpdateProduct(data, token)
  )
  const navigation = useNavigate()
  function FormSubmit(e) {
    const data = new FormData()
    if (product !== undefined) {
      data.append('_id', product._id)
      data.append('oldImage', product.image)
    }
    console.log(e)
    data.append('image', ImageFile.current ?? product?.image)
    data.append('ProductName', e.ProductName)
    data.append('Description', e.Description)
    data.append('Amount', e.Amount)
    data.append('Price', e.Price)
    data.append('Category', e.Category)
    mutation.mutate({ data, token: `Bearer ${user.token}` })
  }

  if (mutation.isError) {
    Message = <Toast type="error" Message="An Error Occured. Try Again Later" />
    setTimeout(() => {
      Message = ''
    }, 5000)
  }
  if (mutation.isLoading) {
    Message = <Toast type="error" Message={<Spinner></Spinner>} />
  }
  if (mutation.isSuccess) {
    Message = (
      <Toast
        Message={`Product Has Been ${product === undefined ? 'Added' : 'Updated'} Successfully`}
      />
    )
    setTimeout(() => {
      Message = ''
    }, 5000)
  }
  return (
    <div className="px-10 py-5">
      <h1 className="text-3xl font-bold">{product === undefined ? 'Add New' : 'Edit'} Product</h1>
      <div className="grid grid-col-12 items-center min-h-screen mx-10">
        <img
          src={hero}
          alt=""
          className="w-[30rem]  col-start-1 col-end-3 rounded-xl shadow-2xl rounded-md"
        />
        <form
          encType="multipart/form-data"
          className=" rounded-xl col-start-4 col-end-12 w-full text-black transition-all duration-300 flex flex-col gap-5 px-10 py-2"
          onSubmit={handleSubmit(FormSubmit)}
        >
          <input
            required
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Product Name"
            {...register('ProductName')}
          />
          <input
            required
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            {...register('Description')}
          />
          <input
            min="1"
            required
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Price"
            {...register('Price')}
          />
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('Category')}
          >
            <option value="Home Decor">Home Decor</option>
            <option value="Decoration">Decoration</option>
            <option value="Furniture">Furniture</option>
            <option value="Lighting">Lighting</option>
          </select>
          <input
            min="1"
            required
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Amount"
            {...register('Amount')}
          />
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
              </div>
              <input
                id="dropzone-file"
                {...register('image')}
                onChange={(e) => {
                  setHero(URL.createObjectURL(e.target.files[0]))
                  ImageFile.current = e.target.files[0]
                }}
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                className="hidden"
              />
            </label>
          </div>
          <div className="flex gap-5 justify-center">
            <button
              onClick={() => navigation('/dashboard/products')}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Close
            </button>
            <button
              disabled={isSubmitting}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {product === undefined ? 'Add' : 'Edit'} Product
            </button>
          </div>
        </form>
      </div>
      {Message !== '' && Message}
    </div>
  )
}
