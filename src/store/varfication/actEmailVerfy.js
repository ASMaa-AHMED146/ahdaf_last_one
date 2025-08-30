import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import axiosErrorHandler from "../../utils/axiosErrorHandler"

const actEmailVerfy=createAsyncThunk("verfy/actEmailVerfy",async (formdata,thunkAPI)=>{
    console.log(formdata);
    
    const {rejectWithValue }=thunkAPI;
    try{
        const res= await axios.post('https://api.dubai-hotel-service.com/public/api/send-verification-code',formdata);
        console.log(res.data);
        return res.data;
    }catch(error){
        console.log(error);
        
        return rejectWithValue(axiosErrorHandler(error));
    }
})
export default actEmailVerfy