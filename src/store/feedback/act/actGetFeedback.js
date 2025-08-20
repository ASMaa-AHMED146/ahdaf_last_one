import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "../../../utils/axiosErrorHandler"

const actGetFeedback=createAsyncThunk('feed/actGetFeedback',async(_,thunkAPI)=>{
    
    const {rejectWithValue,signal }=thunkAPI;
    try{
        const res=await axios.get("https://api.dubai-hotel-service.com/public/api/reviews",{signal})        
        return res.data;
    }catch(error)
    {
        return rejectWithValue(axiosErrorHandler(error));
    }
})
export default actGetFeedback;