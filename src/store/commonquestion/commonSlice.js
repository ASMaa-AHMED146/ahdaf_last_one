import { createSlice } from "@reduxjs/toolkit";
import actGetFAQ from "./act/actgetFaq";



 const faqSlice=createSlice({
    name:'faq',
    initialState:{
        items:[],
        error:null,
        loading:"idle",
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(actGetFAQ.pending,(state)=>{
            state.error=null;
            state.loading='pending'
        }).addCase(actGetFAQ.fulfilled,(state,action)=>{
            state.loading='succeeded';
            state.items.push(action.payload);
        }).addCase(actGetFAQ.rejected,(state,action)=>{
             state.loading='failed';
             if(action.payload && typeof action.payload==='string')
             {
                action.error=action.payload
             }
           
        })
    }
})

export default faqSlice.reducer;
