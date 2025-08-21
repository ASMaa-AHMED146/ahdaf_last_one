import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import services from "./services/servicesSlice"
import feedback from "./feedback/feedbackSlice"
import packages from "./packages/packageSlice"
import offers from "./offers/offersSlice"
import Faq from "./commonquestion/commonSlice"
import sub from "../store/subservice/subserviceSlice";

const store = configureStore({
  reducer: {Auth:auth,serv:services,feed:feedback,package:packages,offer:offers,faq:Faq,subservice:sub}
});

export default store