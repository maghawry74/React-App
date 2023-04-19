import { Navigate, Outlet } from 'react-router-dom'
export default function AuthLayer({ user }) {
  return user === null ? <Outlet /> : <Navigate to="/" />
}
