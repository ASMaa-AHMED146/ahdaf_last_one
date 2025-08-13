import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import services from "./services/servicesSlice"
import feedback from "./feedback/feedbackSlice"

const store = configureStore({
  reducer: {Auth:auth,serv:services,feed:feedback}
});

export default store