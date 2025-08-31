import { createSlice } from "@reduxjs/toolkit";
import actGetPosts from "./actGetPosts";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        clearPostsError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(actGetPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(actGetPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.error = null;
            })
            .addCase(actGetPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { clearPostsError } = postsSlice.actions;
export default postsSlice.reducer;