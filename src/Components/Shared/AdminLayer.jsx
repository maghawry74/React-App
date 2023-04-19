import { Navigate, Outlet } from 'react-router-dom'

export default function AdminLayer({ user }) {
  console.log(user)
  return user && user?.role === 'Admin' ? <Outlet /> : <Navigate to="/" />
}
