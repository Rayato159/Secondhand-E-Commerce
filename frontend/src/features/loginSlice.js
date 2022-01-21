import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
      isAuth: false,
      isLoginLoading: false,
      isLoginErrors: [],
  },

  reducers: {
      loginLoading: (state) => {
          state.isLoginLoading = true
      },

      loginSuccess: (state) => {
          state.isAuth = true
          state.isLoginLoading = false
          state.isLoginErrors = []
      },

      loginFail: (state, { payload }) => {
          state.isLoginErrors = payload
          state.isLoginLoading = false
      },
      
      logout: (state) => {
          sessionStorage.removeItem("accessToken")
          state.isAuth = false
          window.location.reload()
      }
  }
})

export const { loginLoading, loginSuccess, loginFail, logout } = loginSlice.actions

export default loginSlice.reducer