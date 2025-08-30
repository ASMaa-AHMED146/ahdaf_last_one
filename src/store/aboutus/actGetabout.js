import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import axiosErrorHandler from "../../utils/axiosErrorHandler"

const actGetabout=createAsyncThunk("about/actGetabout",async (_,thunkAPI)=>{
  
    
    const {rejectWithValue }=thunkAPI;
    try{
        const res= await axios.get('https://api.dubai-hotel-service.com/public/api/about-us');
        return res.data.data;
    }catch(error){
        console.log(error);
        
        return rejectWithValue(axiosErrorHandler(error));
    }
})
export default actGetabout