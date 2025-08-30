// import React from 'react'
// import img from "../../../assets/images/logo.png"
// import icon from "../../../assets/images/Icon.svg"
// export default function Footer() {
//   return (
//     <div>
//         <div className='pt-[20px] px-[40px] m-auto flex flex-col lg:flex-row text-[#707070] bg-[#FFF7F4] gap-[20px] lg:gap-[150px]  justify-center pb-[20px]'>
//           <div className=' lg:max-w-[250px] md:max-w-[500px] '>
//             <img src={img} alt='footer img' className='w-[190px] h-[190px]'/>
//             <p >مع خدماتنا الاحترافية، راحة بالك تبدأ من هنا. نقدم حلول تنظيف وتعقيم متكاملة لضمان بيئة صحية لك ولعائلتك.</p>
//           </div>

//           <div className='flex gap-[20px]  lg:gap-[50px] flex-col md:flex-wrap md:flex-row'>
//             <div className='md:flex-1/3 lg:flex-1 '>            
//             <div>
//               <h2 className='text-[#2D2D2D] font-[400] text-[29px] lg:mb-[15px]'>خدماتنا</h2>
//               <ul className='flex flex-col gap-[12px]'>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/>خدمات تاجير مفروش</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/>خدمات منزلية</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/>  خدمات التشطيب والديكور</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/> خدمات تصليح وصيانة</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/> خدمات اخرى</li>
//               </ul>
//             </div>
//           </div>

//           <div className='md:flex-1/3 lg:flex-1 '>
//             <div>
//               <h2 className='text-[#2D2D2D] font-[400] text-[29px] lg:mb-[15px]'>لينكات</h2>
//               <ul className='flex flex-col gap-[12px]'>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/> الرئيسية </li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/> الخدمات</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/> اتصل بنا</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/>  الباقات </li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/>  من نحن</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/>  المدونة</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/>  سياسة الخصوصية </li>
//               </ul>
//             </div>
//           </div>

//           <div className=''>            
//             <div>
//               <h2 className='text-[#2D2D2D] font-[400] text-[29px] lg:mb-[15px]'>اتصل بنا</h2>
//               <ul className='flex flex-col gap-[12px]' >
//                 <li className='flex items-center gap-[10px] text-[#F36C35] font-[500]'> مكتب حجز جمهوريه مصر العربيه </li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/> القاهره الجديده 270 عماره الاندلس امام هايد بارك</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/> المنصوره - 20 شارع احمد ماهر </li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/> 01090009330</li>
//                 <li className='flex items-center gap-[10px] text-[#F36C35] font-[500]'>مكتب حجز الامارات العربيه</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/> 15 شارع البرشاء 1 دبي الإمارات العربية المتحدة</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/> المنصوره - 20 شارع احمد ماهر</li>
//                 <li className='flex items-center gap-[10px]'><img className='w-[12px]' src={icon}/> 01090009330</li>
//               </ul>
//             </div>
//           </div>
//           </div>

//         </div>
//       <Top/>
//     </div>
//   )
// }
// function Top()
// {
//   return(
//     <>
//       <div className='bg-[#F36C35] text-white md:pr-[100px] text-[12px] md:text-[15px] pr-[20px] py-[12px]  '>جميع الحقوق محفوظة لشركة Dubai-Hotel-Service . تصميم بواسطة Ahdaf Web</div>
//     </>
//   )
// }

// function Icon()
// {
//   return(
//     <>
//       <span className='w-[12px] h-[12px] rounded-[50%] border-[1px] border-[#F36C35] block relative'><span className='w-[8px] h-[8px] rounded-[50%] border-[1px] border-[#F36C35] block absolute top-[1.2px] right-[1.2px]'></span></span>
//     </>
//   )
// }
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../../contexts/LanguageContext";
import img from "../../../assets/images/logo.png"
import icon from "../../../assets/images/Icon.svg"

export default function Footer() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <div className={isArabic ? 'rtl' : 'ltr'}>
      <div className={`pt-[20px] px-[40px] m-auto flex flex-col lg:flex-row text-[#707070] bg-[#FFF7F4] gap-[20px] lg:gap-[150px] justify-center pb-[20px] ${isArabic ? 'lg:flex-row-reverse' : ''}`}>
        <div className='lg:max-w-[250px] md:max-w-[500px]'>
          <img src={img} alt={t('footer.logoAlt')} className='w-[190px] h-[190px]'/>
          <p className={isArabic ? 'text-right' : 'text-left'}>
            {t('footer.description')}
          </p>
        </div>

        <div className={`flex gap-[20px] lg:gap-[50px] flex-col md:flex-wrap md:flex-row ${isArabic ? 'md:flex-row-reverse' : ''}`}>
          <div className='md:flex-1/3 lg:flex-1'>            
            <div>
              <h2 className={`text-[#2D2D2D] font-[400] text-[29px] lg:mb-[15px] ${isArabic ? 'text-right' : 'text-left'}`}>
                {t('footer.services.title')}
              </h2>
              <ul className='flex flex-col gap-[12px]'>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.services.furnished')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.services.home')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.services.finishing')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.services.maintenance')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.services.other')}
                </li>
              </ul>
            </div>
          </div>

          <div className='md:flex-1/3 lg:flex-1'>
            <div>
              <h2 className={`text-[#2D2D2D] font-[400] text-[29px] lg:mb-[15px] ${isArabic ? 'text-right' : 'text-left'}`}>
                {t('footer.links.title')}
              </h2>
              <ul className='flex flex-col gap-[12px]'>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.links.home')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.links.services')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.links.contact')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.links.packages')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.links.about')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.links.blog')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.links.privacy')}
                </li>
              </ul>
            </div>
          </div>

          <div className=''>            
            <div>
              <h2 className={`text-[#2D2D2D] font-[400] text-[29px] lg:mb-[15px] ${isArabic ? 'text-right' : 'text-left'}`}>
                {t('footer.contact.title')}
              </h2>
              <ul className='flex flex-col gap-[12px]'>
                <li className={`flex items-center gap-[10px] text-[#F36C35] font-[500] ${isArabic ? 'flex-row-reverse text-right' : 'text-left'}`}>
                  {t('footer.contact.egyptOffice')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.contact.newCairo')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.contact.mansoura')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.contact.phone')}
                </li>
                <li className={`flex items-center gap-[10px] text-[#F36C35] font-[500] ${isArabic ? 'flex-row-reverse text-right' : 'text-left'}`}>
                  {t('footer.contact.uaeOffice')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.contact.dubai')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.contact.mansoura')}
                </li>
                <li className={`flex items-center gap-[10px] ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className='w-[12px]' src={icon} alt=""/>
                  {t('footer.contact.phone')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Top/>
    </div>
  )
}

function Top() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <>
      <div className={`bg-[#F36C35] text-white md:pr-[100px] text-[12px] md:text-[15px] pr-[20px] py-[12px] ${isArabic ? 'text-right' : 'text-left'}`}>
        {t('footer.copyright')}
      </div>
    </>
  )
}

function Icon() {
  return (
    <>
      <span className='w-[12px] h-[12px] rounded-[50%] border-[1px] border-[#F36C35] block relative'>
        <span className='w-[8px] h-[8px] rounded-[50%] border-[1px] border-[#F36C35] block absolute top-[1.2px] right-[1.2px]'></span>
      </span>
    </>
  )
}