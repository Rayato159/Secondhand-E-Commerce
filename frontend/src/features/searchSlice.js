import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    search: "",
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
    }
})

// Action creators are generated for each case reducer function
export const { setSearch } = searchSlice.actions

export default searchSlice.reducer