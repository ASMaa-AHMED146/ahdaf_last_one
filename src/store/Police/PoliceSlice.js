import { createSlice } from "@reduxjs/toolkit";
import actGetPolice from "./actGetPolice"

const initialState = {
    items: [],
    loading: "idle",
    error: null
}

const PoliceSlice = createSlice({
    name: 'police',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actGetPolice.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(actGetPolice.fulfilled, (state, action) => {                
                state.loading = "succeeded";
                state.items=(action.payload)
            })
            .addCase(actGetPolice.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
            })
    }
});

export default PoliceSlice.reducer;