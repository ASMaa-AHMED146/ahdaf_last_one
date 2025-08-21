import { createSlice } from "@reduxjs/toolkit";
import actGetSubservices from "./act/actGetSub ";

const getservices=createSlice({
    name:'subservices',
    initialState:{
        records:[],
        loading:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
         builder
      .addCase(actGetSubservices.pending, (state) => {
        state.loading='pending';
        state.error=null;
      }).addCase(actGetSubservices.fulfilled,(state,action)=>{
       state.loading='succeeded';
       state.records=action.payload;
       
      }).addCase(actGetSubservices.rejected,(state,action)=>{
        state.loading='failed';
        if(action.payload && typeof action.payload === 'string')
        {
            state.error=action.payload;
        }
      })
    }
})
export default getservices.reducer;
