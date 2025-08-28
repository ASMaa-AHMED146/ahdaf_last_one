import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import actGetpakage from '../store/packages/act/actGetPackages';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Heading from '../components/common/Heading/Headind';
import Packageitem from "../components/Items/PackageItem";
import Commonfaq from "../components/sections/commonfaq";
import ClientOpininsSection from "../components/sections/ClientOpininsSection"

export default function Packages() {
  const dispatch=useDispatch();

  useEffect(()=>{
    const promise=dispatch(actGetpakage());
    return()=>{
      promise.abort();
    }
  },[dispatch])

  const {loading,error,items}=useSelector((state)=>state.package);
  console.log(items.packages);
  const packagearray=items?.packages || [];

  if(loading==='pending')
  {
    return <div className='h-[350px] w-full flex items-center justify-center flex-col gap-[20px]'>
      <CircularProgress/>
      <p className='text-blue-500'>loading...</p>
    </div>
  }

  if(error)
  {
    return <p className='w-[250px] text-red-500 flex items-center'>{error}</p>
  }

  return (
    <div>
       <Heading service={'الباقات'}/>
       <div className='flex px-[20px] lg:px-[50px] flex-wrap gap-[30px] pt-[50px] pb-[30px] items-center justify-center'>
               {packagearray.length > 0 ? (
                 packagearray.map((el, index) => (
                   <Packageitem key={index} el={el} />
                 ))
               ) : (
                 <div className='text-center text-red-500 w-full'>
                   لا توجد حزم متاحة حاليًا
                 </div>
               )}
        </div>
        <Commonfaq/>
        <ClientOpininsSection/>
    </div>
  )
}
