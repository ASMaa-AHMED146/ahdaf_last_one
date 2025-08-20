import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ErrorHandler from "../../../utils/axiosErrorHandler"

const actGetFAQ=createAsyncThunk('faq/actGetFAQ',async (_,{rejectWithValue })=>{
    try{
        const response=await axios.get('https://api.dubai-hotel-service.com/public/api/faqs');
        return response.data
    }catch(error)
    {
        return (rejectWithValue(ErrorHandler(error)));
    }
})
export default actGetFAQ;