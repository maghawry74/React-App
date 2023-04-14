import { createContext, useState } from 'react'

export const UserCtx = createContext({
  user: {},
  Login: () => {},
  Logout: () => {},
})
export default function UserContext({ children }) {
  const [user, setUser] = useState(null)

  function Login(user) {
    setUser(user)
  }
  function Logout() {
    setUser(null)
  }
  return (
    <UserCtx.Provider
      value={{
        user,
        Login,
        Logout,
      }}
    >
      {children}
    </UserCtx.Provider>
  )
}
