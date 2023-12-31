import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bokunScriptUrl : "",
    currentPageUrl : "",
};

export const bokunSlice = createSlice({
    name : 'bokun',
    initialState,
    reducers : {
        addBokunScriptUrl : (state, action) => {
            state.bokunScriptUrl = action.payload
        },
        addCurrentPageUrl : (state, action) => {
            state.currentPageUrl = action.payload
        }
    }
});

export const {addBokunScriptUrl, addCurrentPageUrl} = bokunSlice.actions;
export default bokunSlice.reducer;