import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    search: "",
    category: "",
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: initialStateValue
    },
    reducers: {
        setSearch: (state, { payload }) => {
            state.search = payload
        },

        setCategory: (state, { payload }) => {
            state.category = payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setSearch, setCategory } = searchSlice.actions

export default searchSlice.reducer