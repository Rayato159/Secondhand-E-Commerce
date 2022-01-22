import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
      keyword: "",
      isSearchLoading: false,
  },

  reducers: {
      searchLoading: (state) => {
          state.isSearchLoading = true
      },

      searchSuccess: (state, { payload }) => {
          state.keyword = payload
          state.isSearchLoading = false
      },

  }
})

export const { searchLoading, searchSuccess } = searchSlice.actions

export default searchSlice.reducer