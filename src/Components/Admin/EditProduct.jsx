import { useQuery } from 'react-query'
import ProductForm from './ProductForm'
import Spinner from '../Shared/Spinner'
import Error from '../Shared/Error'
import { useParams } from 'react-router-dom'
import { GetProductById } from '../../Queres/DbHandler'
export default function EditProduct() {
  const { id } = useParams()
  const { isLoading, isError, data } = useQuery(`Product ${id}`, () => GetProductById(id))
  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <Error />
  }
  return <ProductForm product={data.data} />
}
