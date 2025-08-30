import { createSlice } from "@reduxjs/toolkit";
import actEmailVerfy from "./actEmailVerfy";
import actCdeverfy from "./actCodeVerfy";

const initialState = {
    error:null,
    loading:'idle'
}

const verfyrSlice = createSlice({
    name: 'verfy',
    initialState,
    reducers: {
         resetUI:(state)=>{
            state.loading='idle',
            state.error=null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(actEmailVerfy.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(actEmailVerfy.fulfilled, (state) => {                
                state.loading = "succeeded";
            })
            .addCase(actEmailVerfy.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
            }).addCase(actCdeverfy.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(actCdeverfy.fulfilled, (state) => {                
                state.loading = "succeeded";
            })
            .addCase(actCdeverfy.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
            })
    }
});

export default verfyrSlice.reducer;
export const {resetUI}=verfyrSlice.actions