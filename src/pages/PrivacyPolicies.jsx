import React from 'react'
import Heading from '../components/common/Heading/Headind'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import actGetPolice from "../store/Police/actGetPolice"

export default function PrivacyPolicies() {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(actGetPolice());
    },[dispatch])
    const {items,loading,error}=useSelector((state)=>state.police);
    const data=items.data || []
    console.log(data);
    
    console.log(data[0]?.title.ar );
    
  return (
    <div>
      <Heading service={'السياسه و الخصوصيه'}/>
     <div>
        <div>
            <h1>{data[0]?.title.ar}</h1>
            <p>{data[0]?.description.ar}</p>
        </div>
        <div>
            <h1>1.{}</h1>
        </div>
     </div>
    </div>
  )
}
