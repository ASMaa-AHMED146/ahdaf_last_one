import { createSlice } from "@reduxjs/toolkit";
import actSetPassword from "./actSetPassword";

const initialState = {
    error: null,
    loading: 'idle',
    message: null
}

const setPasswordSlice = createSlice({
    name: 'setPassword',
    initialState,
    reducers: {
        resetUI: (state) => {
            state.loading = 'idle';
            state.error = null;
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(actSetPassword.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
                state.message = null;
            })
            .addCase(actSetPassword.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.message = action.payload.message; // حفظ رسالة النجاح
                state.error = null;
            })
            .addCase(actSetPassword.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
                state.message = null;
            })
    }
});

export default setPasswordSlice.reducer;
export const { resetUI } = setPasswordSlice.actions