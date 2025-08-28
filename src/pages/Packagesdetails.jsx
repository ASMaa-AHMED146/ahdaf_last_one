import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actGetPacksges from '../store/packages/act/actGetPackages';
import LottieHandler from '../components/feedback/LottieHandler/LottieHandler';
import CircularProgress from '@mui/material/CircularProgress';
import Heading from '../components/common/Heading/Headind';
import Packageservice from "../components/sections/packagesoffer"
import Commonfaq from "../components/sections/commonfaq"
import CommonSlider from '../components/sections/CommonSlider';

export default function Packagesdetails() {
  const { id } = useParams();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(actGetPacksges());
  },[dispatch])

  const {items,error,loading}=useSelector((state)=>state.package);
  const data=items?.packages || [];
  console.log(data);
  
  const selecteditem=data.filter((el)=>(
    el.id==id
  )) 
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
      <Heading service={'الباقات'} sub={selecteditem[0]?.title_ar|| 'خدمة فرعية'}/>
       <div className='px-[150px] py-[50px]  '>
                 {
        selecteditem?(
          <div>
                  <img src={selecteditem[0]?.image} alt="" className='rounded-[20px] h-[450px] w-full' />
                  <div className='p-[20px]'>
                    <p className='font-[500] text-[24px] '>{selecteditem[0]?.title_ar|| 'خدمة فرعية'}</p>
                    {/* <p className='text-[#707070] font-[500] mt-[12px]'>باقة شاملة للتصليح والصيانة لضمان أفضل أداء لممتلكاتك</p> */}
                  </div>
                </div>
        ):<LottieHandler type={"empty"}/>
      } 
      <Packageservice/>
      <Commonfaq/>
              </div>

      <CommonSlider array={data}/>
    </div>
  )
}
