import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import services from "./services/servicesSlice"
import feedback from "./feedback/feedbackSlice"
import packages from "./packages/packageSlice"
import offers from "./offers/offersSlice"

const store = configureStore({
  reducer: {Auth:auth,serv:services,feed:feedback,package:packages,offer:offers}
});

export default store