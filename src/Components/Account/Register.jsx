import { useForm } from 'react-hook-form'
import ValidationError from '../Shared/ValidationError'
import Alert from '../Shared/Alert'
import { useMutation } from 'react-query'
import { PostUser, checkEmail, checkPhone } from '../../Queres/DbHandler'
import { useNavigate } from 'react-router-dom'
export default function Register() {
  const navigate = useNavigate()
  const mutation = useMutation((e) => PostUser(e), {
    onError: (e) => console.log(e),
    retry: 2,
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onBlur',
    defaultValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      Phone: '',
      Address: {
        governorate: '',
        City: '',
      },
    },
  })

  if (mutation.isSuccess) {
    setTimeout(() => navigate('/login'), 3000)
  }
  function FormSubmit(e) {
    mutation.mutate(e)
  }
  return (
    <div className="mb-[19rem] mt-5 min-h-screen">
      <div className="flex gap-x-10 justify-around items-center mt-5 w-4/5 mx-auto ">
        <img src="assets/imgs/1.jpg" alt="" className="w-1/2 object-contain lg:block sm:hidden" />
        <form className="  px-10 max-h-[35rem]" method="POST" onSubmit={handleSubmit(FormSubmit)}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="FirstName"
                {...register('FirstName', {
                  required: 'First Name is Required',
                  minLength: {
                    value: 3,
                    message: 'Min Length is 3 Letters',
                  },
                  maxLength: {
                    value: 12,
                    message: 'Max Length is 12 Letters',
                  },
                })}
              />
              <ValidationError field={errors.FirstName} />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Last Name"
                {...register('LastName', {
                  required: 'Last Name is Required',
                  minLength: {
                    value: 3,
                    message: 'Min Length is 3 Letters',
                  },
                  maxLength: {
                    value: 12,
                    message: 'Max Length is 12 Letters',
                  },
                })}
              />
              <ValidationError field={errors.LastName} />
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Email"
              {...register('Email', {
                required: 'Email is Required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  message: 'Invalid Email',
                },
                validate: async (value) => (await checkEmail(value)) || 'Email is taken',
              })}
            />
            <ValidationError field={errors.Email} />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Password"
              {...register('Password', {
                required: 'Password is Required',
                pattern: {
                  value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&?"])[a-zA-Z0-9!#$%&?]/,
                  message:
                    'Password Must be min 8 charachers with at least one lowercase, Uppercase, special characher,Number and one Symbol',
                },
                deps: ['ConfirmPassword'],
              })}
            />
            <ValidationError field={errors.Password} />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="Password"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Confirm Password"
              {...register('ConfirmPassword', {
                required: 'Password is Required',
                validate: {
                  PasswordMustBeEqul: (value, formdata) =>
                    value === formdata.Password || "Password Doesn't Match",
                },
                deps: ['Password'],
              })}
            />
            <ValidationError field={errors.ConfirmPassword} />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Phone"
              {...register('Phone', {
                required: 'Phone is Required',
                pattern: {
                  value: /01[0125]\d{8}/,
                  message: 'Invalid Phone Number',
                },
                validate: {
                  phone: async (value) => (await checkPhone(value)) || 'Phone is Used Before',
                },
              })}
            />
            <ValidationError field={errors.Phone} />
          </div>
          <div className="w-full">
            <label htmlFor="governorate">governorate</label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('Address.governorate', {
                required: 'governorate is Required',
              })}
            >
              <option value="">Select Governorate</option>
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
              <option value="Menofia">Menofia</option>
              <option value="Qalubia">Qalubia</option>
            </select>
            <ValidationError field={errors.Address?.governorate} />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="City"
              {...register('Address.City', {
                required: 'City is Required',
              })}
            />
            <ValidationError field={errors.Address?.City} />
          </div>

          <div className="relative z-0 w-full mb-5 group">
            {mutation.isLoading && (
              <div className="flex justify-center items-center gap-2">
                <h1 className="text-xl">Please Wait </h1>
                <div className="dots"></div>
              </div>
            )}
            {!mutation.isLoading && !mutation.isSuccess && (
              <button
                disabled={isSubmitting}
                type="submit"
                class={`${
                  mutation.isSuccess ? 'bg-green-500' : ''
                } "mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"`}
              >
                Submit
              </button>
            )}
            {mutation.isSuccess && (
              <Alert type="success">Registred Successfully Redirecting to Login</Alert>
            )}
            {mutation.isError && <Alert>Error Has Occured Try Again Later</Alert>}
          </div>
        </form>
      </div>
    </div>
  )
}
