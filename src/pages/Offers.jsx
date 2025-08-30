import React from 'react'
import Heading from "../components/common/Heading/Headind"
import ServiceItem from "../components/Items/offeritems"
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actGetOffer from "../store/offers/act/actGetOffers";
import Commonfaq from "../components/sections/commonfaq"
import ClientOpinin from "../components/sections/ClientOpininsSection"

export default function Offers() {
  const dispatch=useDispatch();
  const {loading,error,records}=useSelector((state)=>state.offer);
  const array=records.offers || [];
  console.log(array);
  
  useEffect(()=>{
    dispatch(actGetOffer())
  },[dispatch])
  return (
    <div>
      <Heading service={'عروضنا'}/>
      <div className='flex flex-wrap mt-[50px] lg:px-[100px]  m-auto max-md:justify-center'>
        {
          array.map((el,index)=>(
            <ServiceItem key={index} el={el}/>
          ))
        }
      </div>
      <Commonfaq/>
      <ClientOpinin/>
    </div>
  )
}
