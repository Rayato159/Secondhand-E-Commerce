import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    isProductsLoading: false,
    isProductsError: null,
    productsArray: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: initialStateValue
    },
    reducers: {
        productsLoading: (state) => {
            state.isProductsLoading = true
        },

        productsSuccess: (state, { payload }) => {
            state.productsArray = payload
            state.isProductsError = null
            state.isProductsLoading = false
        },

        productsFail: (state, { payload }) => {
            state.isProductsError = payload
            state.isProductsLoading = false
        },
    }
})

// Action creators are generated for each case reducer function
export const { productsLoading, productsSuccess, productsFail } = productsSlice.actions

export default productsSlice.reducer