import { createSlice } from "@reduxjs/toolkit";
import actGetpassword from "./actGetpassword";

const initialState = {
    error:null,
    loading:'idle'
}

const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
         resetUI:(state)=>{
            state.loading='idle',
            state.error=null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(actGetpassword.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(actGetpassword.fulfilled, (state) => {                
                state.loading = "succeeded";
            })
            .addCase(actGetpassword.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
            })
    }
});

export default passwordSlice.reducer;
export const {resetUI}=passwordSlice.actions