import { configureStore,combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import services from "./services/servicesSlice"
import feedback from "./feedback/feedbackSlice"
import packages from "./packages/packageSlice"
import offers from "./offers/offersSlice"
import Faq from "./commonquestion/commonSlice"
import sub from "../store/subservice/subserviceSlice";
import storage from "redux-persist/lib/storage";
import verfy from "./varfication/verfyrSlice";
import aboutus from "./aboutus/aboutSlice";
import categoriesReducer from "./categories/categoriesSlice"; 
import posts from "./posts/postsSlice";
import Password  from "./forgetpassword/passwordSlice"
import setPassword from "./setPassword/setPasswordSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootPersistConfig={
  key:"root",
   storage,
  whitelist: ["auth"]
}

const authPersistConfig={
  key:'auth',
  storage,
  whitelist:['user','accessToken']
}

const rootReducer=combineReducers({
      auth:persistReducer(authPersistConfig,auth)
    ,serv:services,feed:feedback,package:packages,offer:offers,faq:Faq,subservice:sub,
    verf:verfy,about:aboutus, categories: categoriesReducer,posts:posts,password:Password,setPassword: setPassword
})

const persistedReducer=persistReducer(rootPersistConfig,rootReducer)

const store = configureStore({
  reducer:persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor=persistStore(store)
export {store,persistor}