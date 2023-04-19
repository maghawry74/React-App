import axios from 'axios'
import { Api_Url } from './Constants'

const PostUser = (User) => {
  return axios.post(`${Api_Url}/register`, User)
}
const UserLogin = (credentail) => {
  console.log(credentail)
  return axios.post(`${Api_Url}/Login`, credentail)
}
const checkPhone = async (phone) => {
  const res = await axios(`${Api_Url}/register/${phone}`)
  if (res.data === null) {
    return true
  }
  return false
}
const checkEmail = async (Email) => {
  const res = await axios(`${Api_Url}/register/check/${Email}`)
  if (res.data === null) {
    return true
  }
  return false
}
const FetchProducts = async ({ queryKey }) => {
  const size = queryKey[1]
  const skip = queryKey[2]
  const filter = queryKey[3] ?? 'All'
  return await axios.get(`${Api_Url}/products?size=${size}&skip=${skip}&filter=${filter}`)
}
const AddProduct = async (data, token) => {
  console.log('Add Path')
  return await axios.post(`${Api_Url}/products`, data, {
    headers: {
      authorization: token,
      'Content-type': 'multipart/form-data',
    },
  })
}
const UpdateProduct = async (data, token) => {
  console.log('Update Path')
  console.log(token)
  return await axios.patch(`${Api_Url}/products`, data, {
    headers: {
      authorization: token,
      'Content-type': 'multipart/form-data',
    },
  })
}
const DeleteProduct = async (data, token) => {
  console.log(token)
  return await axios.delete(`${Api_Url}/products`, {
    headers: {
      authorization: token,
      'Content-type': 'application/json',
    },
    data: data,
  })
}

const GetProductById = async (id) => {
  return axios.get(`${Api_Url}/products/${id}`)
}
const FetchOrders = async (status) => {
  return await axios.get(`${Api_Url}/orders/${status}`)
}
const GetOrderById = async (id) => {
  return axios.get(`${Api_Url}/order/${id}`)
}

const MakeOrder = async (data, token) => {
  return await axios.post(`${Api_Url}/orders`, data, {
    headers: {
      authorization: token,
      'Content-type': 'application/json',
    },
  })
}
const CompleteOrder = async (id, token) => {
  console.log(token)
  return axios.patch(
    `${Api_Url}/orders`,
    { _id: id },
    {
      headers: {
        authorization: token,
        'Content-type': 'application/json',
      },
    }
  )
}
export {
  PostUser,
  checkEmail,
  checkPhone,
  UserLogin,
  FetchProducts,
  FetchOrders,
  AddProduct,
  UpdateProduct,
  GetProductById,
  DeleteProduct,
  MakeOrder,
  GetOrderById,
  CompleteOrder,
}
