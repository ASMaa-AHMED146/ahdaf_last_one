import { createSlice } from "@reduxjs/toolkit";
import actGetFeedback from "./act/actGetFeedback"

const initialState = {
    items: [],
    loading: "idle",
    error: null
}

const feedSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actGetFeedback.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(actGetFeedback.fulfilled, (state, action) => {                
                state.loading = "succeeded";
                state.items.push(action.payload)
            })
            .addCase(actGetFeedback.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
            })
    }
});

export default feedSlice.reducer;