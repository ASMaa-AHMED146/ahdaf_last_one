import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./actGetCategories";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(actGetCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(actGetCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // تأكد أن البيانات بتتحفظ هنا
      })
      .addCase(actGetCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { clearCategoriesError } = categoriesSlice.actions;
export default categoriesSlice.reducer;