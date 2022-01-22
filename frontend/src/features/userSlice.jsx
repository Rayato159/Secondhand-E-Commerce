import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
      isUser: null,
      isuserLoading: false,
      isuserErrors: [],
  },

  reducers: {
      userLoading: (state) => {
          state.isuserLoading = true
      },

      userSuccess: (state, { payload }) => {
          state.isUser = payload
          state.isuserLoading = false
          state.isuserErrors = []
      },

      userFail: (state, { payload }) => {
          state.isuserErrors = payload
          state.isuserLoading = false
      },
  }
})

export const { userLoading, userSuccess, userFail, userLogout } = userSlice.actions

export default userSlice.reducer