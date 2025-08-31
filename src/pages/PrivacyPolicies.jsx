import React from 'react'
import Heading from '../components/common/Heading/Headind'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import actGetPolice from "../store/Police/actGetPolice";
import { LuDot } from "react-icons/lu";

export default function PrivacyPolicies() {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(actGetPolice());
    },[dispatch])
    const {items,loading,error}=useSelector((state)=>state.police);
    const data=items.data || []
    console.log(data);
    

  return (
    <div>
      <Heading service={'السياسه و الخصوصيه'}/>
     <div>
        {
            data.map((el,index)=>(
                <div className='px-[50px] py-[25px]' key={index}>
            <h1 className='text-[28px] font-[400]'> {index>0?`${index}.`:''}{el?.title.ar}</h1>
            <p className='flex text-[#707070] text-[25px]  pt-[10px] items-center'><LuDot size={30}/>{el?.description.ar}</p>
            </div>
                    ))
        }
     </div>
    </div>
  )
}
