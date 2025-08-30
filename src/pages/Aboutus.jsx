import React from 'react'
import Heading from "../components/common/Heading/Headind"
import main from "../assets/images/Aboutas.jpg"
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import sec from "../assets/images/section2aboutus.jpg"
import { useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
import actGetabout from '../store/aboutus/actGetabout';

export default function Aboutus() {
  const dispatch=useDispatch();
  const {items,loading,error}=useSelector((state)=>state.about);
  console.log(items[0]);
  useEffect(()=>{
    dispatch(actGetabout())
  },[dispatch])
  
  const nav=useNavigate();
  return (
    <div>
      <Heading service={"من نحن"}/>
      <div className='lg:px-[70px] lg:pt-[70px] px-[30px] pt-[20px] '>
        <div className='rounded-[10px] overflow-hidden lg:h-[550px] h-[220px]  lg:py-[50px] lg:px-[100px] relative lg:mb-[50px]'><img className=' w-full absolute top-[-110px] right-[0px]' src={main} alt='about img'/></div>
        <div className=''>
          <p className='border-b-[3px] border-b-[#F36C35] font-[400] text-[32px] w-fit mb-[15px]'>من نحن</p>
          <p className='font-[300] lg:text-[29px] text-[25px] '>{items[0]?.title_ar}</p>
        </div>
        <div className='mt-[15px]'>
          <Item paragraph={'نحن نواكب أحدث التقنيات في عالم التنظيف. سواء كانت الأدوات أو المواد، نحن نستخدم كل جديد لضمان نظافة صحية وآمنة'} head={'التقنيات المتقدمة'}/>
          <Item paragraph={'بدأنا في تقديم خدمات التنظيف بهدف واحد تقديم أعلى مستوى من الجودة. نحن نستخدم أفضل الأدوات والمواد لضمان نتائج مبهرة تدوم طويلاً'} head={'التركيز على الجودة'}/>
          <Item paragraph={'نحن نهتم بالبيئة، لذلك نستخدم مواد تنظيف صديقة للبيئة وتكون آمنة لك ولعائلتك'} head={'الاستدامة'}/>
        </div>
        <div className='py-[30px]'>
          <p className='flex items-center gap-[5px] text-[22px]'>اتصل بنا :<FaPhoneAlt className='text-[#707070]' style={{color:'#F36C35'}}/> <span className='text-[#707070]'>01090009330</span></p>
          <button className='border-[1px] rounded-[8px] px-[15px] py-[10px] text-[#707070] mt-[15px] transform transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer' onClick={()=>nav('/booking')}>احجز خدمتك الان</button>
        </div>
        <Company/>
      </div>
    </div>
  )
}

function Item({paragraph ,head})
{
  return(
    <>
        <div className='border-[1px] border-[#EFEFEF] rounded-[5px] p-[20px] mt-[10px]'>
            <div className='flex items-center gap-[10px]'>
              <FaRegCircleCheck className='text-[20px]' style={{color:'#F36C35'}}/>
              <h2 className='text-[#1A7474] lg:text-[25px]'>{head}</h2>
            </div>
            <p className='font-[400] lg:text-[24px] text-[#707070]'>{paragraph}</p>
        </div>
    </>
  )
}

function Company({data})
{
  return(
    <>
      <div className='flex gap-[20px]'>
        <div className='border-[1px] border-[#F36C35] rounded-[5px] overflow-hidden max-w-[50%] '>
          <img className='' src={data?.image || sec}/>
        </div>
        <div className='max-w-[50%]'>
          <h1 className='border-b-[3px] border-b-[#1A7474] font-[450] text-[32px] w-fit '>عن شركتنا</h1>
          <p className='my-[15px] text-[24px] font-[400]'>{data?.title_ar}</p>
          <p className='flex items-center gap-[5px] text-[#F36C35] text-[25px]'><FaRegCircleCheck className='text-[20px]' style={{color:'#F36C35'}}/>
              {data?.subtitles_ar[0]}</p>
                      <p className='text-[#707070] text-[23px] leading-[40px]'>{data?.descriptions_ar[0]}</p>
        </div>

      </div>
    </>
  )
}