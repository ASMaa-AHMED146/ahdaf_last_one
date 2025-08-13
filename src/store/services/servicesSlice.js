import { createSlice } from "@reduxjs/toolkit";
import actGetservices from "./act/actGetServices";

const initialState={
    loading:'idle',
    error:null,
    records:[]
}

const servicesSlice=createSlice({
    name:'services',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(actGetservices.pending,(state)=>{
            state.loading='pending';
            state.error=null;
        }).addCase(actGetservices.fulfilled,(state,action)=>{
            state.loading='succeed';
            state.records=action.payload;
        }).addCase(actGetservices.rejected,(state,action)=>{
            state.loading='failed';
            if(isString(error))
            {
                state.error=action.payload;
            }
        })
    }
})
export default servicesSlice.reducer;