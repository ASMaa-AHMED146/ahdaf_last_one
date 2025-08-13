import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "../../../utils/axiosErrorHandler"

const actGetOffers=createAsyncThunk('feed/actGetFeedback',async(_,thunkAPI)=>{
    
    const {rejectWithValue }=thunkAPI;
    try{
        const res=await axios.get("https://api.dubai-hotel-service.com/public/api/offers")        
        return res.data;
    }catch(error)
    {
        return rejectWithValue(axiosErrorHandler(error));
    }
})
export default actGetOffers;