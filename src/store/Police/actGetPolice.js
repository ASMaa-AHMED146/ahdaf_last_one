import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "../../utils/axiosErrorHandler"

const actGetPolice=createAsyncThunk('police/actGetPolice',async(_,thunkAPI)=>{
    
    const {rejectWithValue,signal }=thunkAPI;
    try{
        const res=await axios.get("https://api.dubai-hotel-service.com/public/api/privacy-policies",{signal})    
        return res.data;
    }catch(error)
    {
        return rejectWithValue(axiosErrorHandler(error));
    }
})
export default actGetPolice;