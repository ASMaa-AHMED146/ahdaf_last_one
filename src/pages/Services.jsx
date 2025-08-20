import React from 'react'
import { useSelector } from 'react-redux'
import Heading from "../components/common/Heading/Headind"
import Item from "../components/Items/ServicePage"
import actGetservices from "../store/services/act/actGetServices" 
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Commenqestion from '../components/sections/commonfaq'


export default function Services() {

  const {records,loading,error}=useSelector((state)=>state.serv);
  const dispatch = useDispatch();

  useEffect(() => {
    if (records.length === 0) {
      dispatch(actGetservices());
    }
  }, [dispatch, records.length])
  const servicesdata=records ;
  if (loading === 'pending') return <div className='h-full flex flex-col justify-center items-center pt-[50px]'>
    <CircularProgress/>
    جاري التحميل...</div>;
  if (error) return <div>حدث خطأ: {error}</div>;
  return (
    <div>
      <Heading service={'الخدمات'}/>
      <div className='flex gap-[20px] md:gap-[20px] lg:gap-[50px] pt-[50px] flex-wrap justify-center '>
          {servicesdata.map((el) => (
            <Item key={el.id} el={el} id={el.id}/>
          ))}
        </div>
      <Commenqestion/>
    </div>
  )
}
