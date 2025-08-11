import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";

const store = configureStore({
  reducer: {Auth:auth},
});

export default store