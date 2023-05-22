import { createSlice } from '@reduxjs/toolkit'

function getInitialState() {
  console.log('Inside state of user')
  return JSON.parse(localStorage.getItem('user'))
}
export const UserSlice = createSlice({
  name: 'user',
  initialState: getInitialState(),
  reducers: {
    Signin: (state, action) => {
      return action.payload
    },
    SignOut: (state, action) => {
      return null
    },
  },
})

export const { SignOut, Signin } = UserSlice.actions

export default UserSlice.reducer
