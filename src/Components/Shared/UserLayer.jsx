import { Navigate } from 'react-router-dom'

export default function UserLayer({ user, children }) {
  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}
