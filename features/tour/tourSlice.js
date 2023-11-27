import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tourItem : {}
};

export const tourSlice = createSlice({
    name : 'tour',
    initialState,
    reducers : {
        addtourItem : (state, action) => {
            state.tourItem = action.payload
        }
    }
});

export const {addtourItem} = tourSlice.actions;
export default tourSlice.reducer;