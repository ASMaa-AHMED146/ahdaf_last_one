
// export default function Feedbackitem({el}) {
  
//   return (
//     <>
       

//      <div className='border-[1px]  max-h-[350px]  border-[#4E4E4E] rounded-[5px]  md:max-w-[300px] md:px-[40px] py-[50px] flex flex-col items-center gap-[20px] '>
//        <div className=''>
//          <img src={el.user.profile_image}  className='rounded-[100%] max-w-[100px]' />
//        </div>
//        <div className='text-center mt-[10px]'>
//          <h3 className='text-[#BC8D5E] mb-[10px] font-[500] text-[18px]'>{el.user.name}</h3>
//          <p className='text-white'>{el.comment_ar || "ولا اروع"}</p>
//        </div>
//  </div>
//     </>
// )
// }
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../contexts/LanguageContext";

export default function Feedbackitem({el}) {
    const { t } = useTranslation();
    const { isArabic } = useLanguage();

    return (
        <>
            <div className={`border-[1px] max-h-[350px] border-[#4E4E4E] rounded-[5px] md:max-w-[300px] md:px-[40px] py-[50px] flex flex-col items-center gap-[20px] ${isArabic ? 'rtl' : 'ltr'}`}>
                <div className=''>
                    <img src={el.user.profile_image} className='rounded-[100%] max-w-[100px]' alt={el.user.name} />
                </div>
                <div className={`text-center mt-[10px] ${isArabic ? 'text-right' : 'text-left'}`}>
                    <h3 className='text-[#BC8D5E] mb-[10px] font-[500] text-[18px]'>{el.user.name}</h3>
                    <p className='text-white'>
                        {isArabic ? (el.comment_ar || t('feedback.defaultComment')) : (el.comment_en || t('feedback.defaultComment'))}
                    </p>
                </div>
            </div>
        </>
    )
}