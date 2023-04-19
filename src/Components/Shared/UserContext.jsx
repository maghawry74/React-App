import { createContext, useEffect, useState } from 'react'

export const UserCtx = createContext({
  user: {},
  Signin: () => {},
  Logout: () => {},
})
export default function UserContext({ children }) {
  const [user, setUser] = useState(null)

  function Signin(user) {
    setUser(user)
  }
  function Logout() {
    localStorage.clear()
    setUser(null)
  }
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    Signin(user)
  }, [])
  return (
    <UserCtx.Provider
      value={{
        user,
        Signin,
        Logout,
      }}
    >
      {children}
    </UserCtx.Provider>
  )
}
