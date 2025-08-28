import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "../../../utils/axiosErrorHandler"

const actGetPacksges=createAsyncThunk('package/actGetPacksges',async(_,thunkAPI)=>{
    
    const {rejectWithValue,signal }=thunkAPI;
    try{
        const res=await axios.get("https://api.dubai-hotel-service.com/public/api/packages",{signal})    
        return res.data;
    }catch(error)
    {
        return rejectWithValue(axiosErrorHandler(error));
    }
})
export default actGetPacksges;