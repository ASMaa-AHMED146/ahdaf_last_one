import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin"

const initialState={
    user:null,
    accessToken:null,
    loading:'idle',
    error:null
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        resetUI:(state)=>{
            state.loading='idle',
            state.error=null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(actAuthRegister.pending,(state)=>{
            state.loading='pending';
            state.error=null
        }).addCase(actAuthRegister.fulfilled,(state,action)=>{
            state.loading='succeeded';
           state.user=action.payload.user;
           state.accessToken=action.payload.token;
        }).addCase(actAuthRegister.rejected,(state,action)=>{
                state.loading='failed'; 
                console.log(action.payload);
                state.error = action.payload;
            
        }).addCase(actAuthLogin.pending,(state)=>{
            state.loading='pending';
            state.error=null
        }).addCase(actAuthLogin.fulfilled,(state,action)=>{
            state.loading='succeeded';
           state.user=action.payload.user;
           state.accessToken=action.payload.token;
        }).addCase(actAuthLogin.rejected,(state,action)=>{
                state.loading='failed'; 
                console.log(action.payload);
                state.error = action.payload;
            
        })
    }
})
export default authSlice.reducer;
export const {resetUI}=authSlice.actions;