import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    isLoginLoading: false,
    isLoginError: null,
    isToken: localStorage.getItem("accessToken")
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
            state.isToken = localStorage.getItem("accessToken")
        },

        loginFail: (state, { payload }) => {
            state.isLoginLoading = false
            state.isLoginError = payload
        },

        logout: (state) => {
            if(window.confirm("ต้องการออกจากระบบใช่หรือไม่?")) {
                state.isToken = null

                localStorage.removeItem("accessToken")
                localStorage.removeItem("user_id")
                localStorage.removeItem("first_name")
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { loginLoading, loginSuccess, loginFail, logout } = loginSlice.actions

export default loginSlice.reducer