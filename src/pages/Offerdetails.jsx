import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actGetoffers from "../store/offers/act/actGetOffers"
import LottieHandler from '../components/feedback/LottieHandler/LottieHandler';
import CircularProgress from '@mui/material/CircularProgress';
import Heading from '../components/common/Heading/Headind';
import Packageservice from "../components/sections/packagesoffer";
import Commonfaq from "../components/sections/commonfaq";
import CommonSlider from '../components/sections/CommonSlider';

export default function Packagesdetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actGetoffers());
    }, [dispatch]);

    const { records, error, loading } = useSelector((state) => state.offer);
    
    // تأكد إن البيانات موجودة، وإلا اعتبرها مصفوفة فاضية
    const data = records?.offers || [];

    // هنا بتعمل الفلترة الصحيحة
    // 1. بتستبعد العرض الحالي (بتحول الـ id لرقم)
    // 2. بتستبعد العروض اللي انتهى تاريخ صلاحيتها
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const other = data.filter((el) => {
        const expiryDate = new Date(el.expiry_date);
        expiryDate.setHours(0, 0, 0, 0);
        return Number(el.id) !== Number(id) && expiryDate >= today;
    });
    
    const selecteditem = data.find((el) => Number(el.id) === Number(id));

    if (loading === 'pending') {
        return (
            <div className='h-[350px] w-full flex items-center justify-center flex-col gap-[20px]'>
                <CircularProgress />
                <p className='text-blue-500'>loading...</p>
            </div>
        );
    }

    // هنا بتعمل التحقق لو الـ selecteditem مش موجود، عشان تتجنب إيرور
    if (!selecteditem) {
        return <p className='w-[250px] text-red-500 flex items-center'>Item not found.</p>;
    }
    
    // تحويل البيانات للـ Array بشكل صحيح
    const packageservicedata = selecteditem.sub_services || [];
    const Array = packageservicedata.map((el) => el.description_ar);

    if (error) {
        return <p className='w-[250px] text-red-500 flex items-center'>{error}</p>;
    }
    
    return (
        <div>
            <Heading service={'الباقات'} sub={selecteditem?.title_ar || ''} />
            <div className='lg:px-[150px] px-[20px] pt-[50px]'>
                {records ? (
                    <div>
                        <img src={selecteditem?.image} alt="" className='rounded-[20px] h-[450px] w-full' />
                        <div className='p-[20px]'>
                            <p className='font-[400] text-[24px]'>{selecteditem?.title_ar || 'خدمة فرعية'}</p>
                            <p className='text-[24px] font-[400] mt-[12px] text-[#F36C35]'>{selecteditem?.subtitle_ar}</p>
                            <p className='text-[20px] font-[400] mt-[12px] text-[#707070]'>العرص ساري حتي {selecteditem?.expiry_date}</p>
                        </div>
                    </div>
                ) : <LottieHandler type={"empty"} />}
            </div>
            
            <Packageservice servicesArray={Array} /> 
            <Commonfaq /> 
            
            <CommonSlider array={other} titleKey={'خدمات اخري'} paragraph={''} />
        </div>
    );
}