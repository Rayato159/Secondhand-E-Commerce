import { configureStore } from '@reduxjs/toolkit'

// Slice
import loginReducer from '../features/loginSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
  }
})