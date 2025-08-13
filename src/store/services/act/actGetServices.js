import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import axios from 'axios';

const actGetservices=createAsyncThunk('services/actGetservices',async(_,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const response=await axios.get('https://api.dubai-hotel-service.com/public/api/services');
        return response.data.data;
    }catch(error)
    {
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actGetservices;