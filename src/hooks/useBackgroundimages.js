import React, { useState } from 'react'
import axios from 'axios'
import axiosErrorHandler from '../utils/axiosErrorHandler'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actGetservices from '../store/services/act/actGetServices';
export default function useBackgroundimages() {
    const [images,setimages]=useState(null);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState(null);
    const dispatch=useDispatch();
    useEffect(()=>{
        const getBackgroundImages=async ()=>{
            try{
                const response = await axios.get('https://api.dubai-hotel-service.com/public/api/sliders');
                setimages(response.data.data)
            }catch(error){
                seterror(axiosErrorHandler(error))
            }finally{
                setloading(false)
            }
        }
        getBackgroundImages();
    },[])
    
  return {images,loading,error}
}
