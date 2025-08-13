import { createSlice } from "@reduxjs/toolkit";
import actGetPacksges from "./act/actGetPackages";

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
            .addCase(actGetPacksges.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(actGetPacksges.fulfilled, (state, action) => {                
                state.loading = "succeeded";
                state.items.push(action.payload)
            })
            .addCase(actGetPacksges.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
            })
    }
});

export default feedSlice.reducer;