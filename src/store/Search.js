import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name : 'search',
    initialState : {
        items : []
    },
    reducers : {
        addCache : (state,action) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export default SearchSlice.reducer;
export const {addCache} = SearchSlice.actions;  