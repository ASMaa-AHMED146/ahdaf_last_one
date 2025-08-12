import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import axiosErrorHandler from "../../../utils/axiosErrorHandler"

const actAuthRegister=createAsyncThunk("auth/actAuthRegister",async (formdata,thunkAPI)=>{
    console.log(formdata);
    
    const {rejectWithValue }=thunkAPI;
    try{
        const res= await axios.post('https://dubai.high-digitall.com/public/api/register',formdata);
        console.log(res.data);
        return res.data;
    }catch(error){
        console.log(error);
        
        return rejectWithValue(axiosErrorHandler(error));
    }
})
export default actAuthRegister