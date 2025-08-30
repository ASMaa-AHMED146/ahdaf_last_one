import { createSlice } from "@reduxjs/toolkit";
import actGetabout from "./actGetabout"

const initialState = {
    items: [],
    loading: "idle",
    error: null
}

const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actGetabout.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(actGetabout.fulfilled, (state, action) => {              
                state.loading = "succeeded";
                state.items.push(action.payload)
            })
            .addCase(actGetabout.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
            })
    }
});

export default aboutSlice.reducer;