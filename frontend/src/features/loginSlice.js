import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    isAuth: false,
    isLoginLoading: false,
    isLoginError: null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
    value: initialStateValue
    },
    reducers: {
        loginLoading: (state) => {
            state.isLoginLoading = true
        },

        loginSuccess: (state, { payload }) => {
            localStorage.setItem("accessToken", payload.accessToken)
            localStorage.setItem("user_id", payload.user_id)
            localStorage.setItem("first_name", payload.first_name)

            state.isLoginLoading = false
            state.isLoginError = null
            state.isAuth = true
        },

        loginFail: (state, { payload }) => {
            state.isLoginLoading = false
            state.isLoginError = payload
        },

        logout: (state) => {
            state.isAuth = false,
            localStorage.removeItem("accessToken")
            localStorage.removeItem("user_id")
            localStorage.removeItem("first_name")
        }
    }
})

// Action creators are generated for each case reducer function
export const { loginLoading, loginSuccess, loginFail, logout } = loginSlice.actions

export default loginSlice.reducer