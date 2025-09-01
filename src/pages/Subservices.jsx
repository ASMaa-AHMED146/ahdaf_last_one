import React, { useEffect, useState } from 'react';

import { FaArrowLeft } from "react-icons/fa";

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import actGetSubservice from "../store/subservice/act/actGetSub ";

import Heading from '../components/common/Heading/Headind';

import ClientOpininsSection from '../components/sections/ClientOpininsSection';

import CommonSlider from "../components/sections/CommonSlider"

import actGetservices from '../store/services/act/actGetServices';

import Ourprojects from "../components/sections/OurProject"

export default function Subservices() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [selecteditem, setselected] = useState(null);
  const [selectedphoto, setselectedphoto] = useState(0);

  const { subservice, serv } = useSelector((state) => ({
    subservice: state.subservice,
    serv: state.serv,
  }));

  const subServices = subservice?.records?.data?.sub_services || [];
  const nameserviceData = serv?.records || [];

  // جمع الصور الأساسية لـ OurProjects
  const mainServiceImages = nameserviceData.map(service => service.image);
  

  const Selectitem = nameserviceData.find((el) => el.id === parseInt(id));

  useEffect(() => {
    const promise = dispatch(actGetSubservice(id));
    dispatch(actGetservices());
    return () => {
      promise.abort();
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (subServices.length > 0 && !selecteditem) {
      setselected(subServices[0].id);
    }
  }, [subServices, selecteditem]);

  function catchselecteditem(subServiceId) {
    setselected(subServiceId);
    setselectedphoto(0);
  }

  const imgarray = selecteditem ? subServices.find((el) => el.id === selecteditem) : null;
  const images = imgarray?.images || [];

  const isLoading = subservice.loading;
  const error = subservice.error;

  if (isLoading === "pending") return <div className="text-center py-10">جاري التحميل...</div>;
  if (error) return <div className="text-center py-10">حدث خطأ: {error}</div>;

  return (
    <div className='bg-[#FFF7F4] w-[100%]'>
      <Heading service={'الخدمات'} sub={Selectitem?.name_ar || 'خدمة فرعية'} />
      <div className='flex lg:gap-[50px] flex-col lg:flex-row mx-[20px] lg:mx-[80px] lg:p-[20px]'>
        <div className='lg:w-[75%] w-[100%] '>
          <div>
            <img 
              src={images[selectedphoto]} 
              className='rounded-[20px] mt-[10px] h-[420px] w-full object-cover' 
              alt="Subservices" 
            />
          </div>
          <div className='flex mt-[20px] justify-between'>
            {images.map((image, index) => (
              <img 
                src={image} 
                onClick={() => setselectedphoto(index)} 
                key={index} 
                className='rounded-[20px] w-[115px] md:w-[250px] lg:w-[270px] h-[130px] cursor-pointer' 
                alt={`Subservice ${index + 1}`} 
              />
            ))}
          </div>
          <div className='mt-[20px]'>
            <p className='font-[500] text-[24px] mb-[10px]'>{imgarray?.title_ar || 'استديو - شقة - فيلا'}</p>
            <p className='font-[500] text-[20px] text-[#707070]'>
              {imgarray?.description_ar || 'استمتع بالإقامة في شقة أو استوديو مريح، مثالي للإقامات القصيرة...'}
            </p>
          </div>
        </div>
        
        <div className='border-[1px] border-[#F36C3542] rounded-[20px] max-lg:mt-[30px] lg:w-[35%] p-[20px]'>
          <h3 className='font-[500] text-[24px] mb-[10px]'>اختر خدمتك</h3>
          {subServices.length > 0 ? (
            subServices.map((el) => (
              <Subitem 
                key={el.id} 
                el={el} 
                catchselecteditem={catchselecteditem}
                isSelected={selecteditem === el.id}
              />
            ))
          ) : (
            <p>لا توجد خدمات فرعية متاحة</p>
          )}
        </div>
      </div> 

      <div className='text-center '>
        <Link 
          to='/booking' 
          className='text-[#F36C35] border-[1px] mt-[50px] border-[#F36C35] py-[12px] w-[90%] max-lg:mt-[20px] text-[20px] lg:w-[35%] rounded-[15px] block m-auto'
        >
          احجز الان
        </Link>
      </div> 
      <ClientOpininsSection/>
      <Ourprojects images={mainServiceImages}/>
      <CommonSlider array={nameserviceData} title={'خدمات اخري'}/>
    </div>
  );
}

function Subitem({ el, catchselecteditem, isSelected }) {
  return (
    <div 
      onClick={() => catchselecteditem(el.id)}
      className={`bg-[#1A74740A] cursor-pointer flex p-[10px] my-[15px] justify-between items-center rounded-[10px] hover:text-white hover:bg-[#F36C35] ${
        isSelected ? 'bg-[#F36C35] text-white' : ''
      }`}
    >
      <p className='font-[400] text-[20px]'>{el.title_ar || 'خدمات منزلية'}</p>
      <FaArrowLeft />
    </div>
  );
}