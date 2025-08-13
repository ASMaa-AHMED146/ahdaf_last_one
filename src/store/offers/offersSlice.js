import { createSlice } from "@reduxjs/toolkit";
import actGetOffers from "./act/actGetOffers"

const initialState = {
    records: [],
    loading: "idle",
    error: null
}

const offersSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actGetOffers.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(actGetOffers.fulfilled, (state, action) => {                
                state.loading = "succeeded";
                state.records.push(action.payload)
            })
            .addCase(actGetOffers.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
            })
    }
});

export default offersSlice.reducer;