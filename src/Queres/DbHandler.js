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
export { PostUser, checkEmail, checkPhone, UserLogin }
