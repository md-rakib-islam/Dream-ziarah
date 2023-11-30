import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCategory :  { id: 1, name: "Hajj", number: 0 }
};

export const blogSlice = createSlice({
    name : 'blog',
    initialState,
    reducers : {
        addCategory : (state, action) => {
            state.currentCategory = action.payload
        }
    }
});

export const {addCategory} = blogSlice.actions;
export default blogSlice.reducer;