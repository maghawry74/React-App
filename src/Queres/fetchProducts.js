import axios from 'axios'
import { Api_Url } from './Constants'
export default async function fetchProducts(relativeURL) {
  return await axios(`${Api_Url}${relativeURL}`)
}
