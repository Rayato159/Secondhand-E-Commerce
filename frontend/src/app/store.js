import { configureStore } from '@reduxjs/toolkit'

import searchReducer from '../features/searchSlice'
import loginReducer from '../features/loginSlice'
import userReducer from '../features/userSlice'

export default configureStore({
  reducer: {
    search: searchReducer,
    login: loginReducer,
    user: userReducer,
  }
})