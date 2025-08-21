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
    reducers:{
        resetServices:(state)=>{
            state.records=[];
            state.loading='idle';
        }
    },
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
export const {resetServices}=servicesSlice.actions;