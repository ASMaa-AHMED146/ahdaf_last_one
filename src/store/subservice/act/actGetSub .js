import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetSubservices=createAsyncThunk('subservices/actGetSubservices',async(id,thunkAPI)=>{
    
    const {rejectWithValue,signal}=thunkAPI;  
    try{
        const res=await axios.get(`https://api.dubai-hotel-service.com/public/api/services/${id}`,{signal});
        
        return res.data
    }catch(error)
    {
       if(axios.isAxiosError(error))
       {
        return rejectWithValue(error.response?.data.message||error.message)
       }
       else
       {
        return rejectWithValue('an unexpected error')
       }
    }
    
})
export default actGetSubservices;