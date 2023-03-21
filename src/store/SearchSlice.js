import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name : 'SearchSlice',
    initialState : {},
    reducers : {
        addCache : (state,action) => {
            console.log('action',action.payload);
            state = Object.assign(state, action.payload)
        }
    }
})

export default SearchSlice.reducer;
export const {addCache} = SearchSlice.actions;  