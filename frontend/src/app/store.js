import { configureStore } from '@reduxjs/toolkit'

// Slice
import loginReducer from '../features/loginSlice'
import productsReducer from '../features/productsSlice'
import searchReducer from '../features/searchSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    products: productsReducer,
    search: searchReducer,
  }
})