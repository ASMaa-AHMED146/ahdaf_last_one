
// import { FaArrowLeft } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export default function Item({ el, id }) {
//   const nav = useNavigate();
  
//   return (
//     <div 
//       className="px-2 pb-2.5 cursor-pointer group mt-5"
//       onClick={() => nav(`/services/subservices/${id}`)}
//     >
//       <div className="relative rounded-3xl overflow-hidden w-full h-[450px] transition-transform duration-300 ease-in-out group-hover:scale-[1.03] group-hover:z-10">
//         <div 
//           className="absolute inset-0 rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${el.images[0]})` }}
//         ></div>
//         <div className="absolute inset-0 bg-black/50 rounded-3xl group-hover:bg-black/60 transition-all duration-300"></div>
//         <div className="absolute bottom-0 mb-5 px-5 z-10 w-full" dir="rtl">
//           <h3 className="text-white text-xl mb-2.5 group-hover:text-[21px] transition-all duration-300">
//             {el.title_ar}
//           </h3>
//           <div className="text-white flex items-center justify-between bg-gray-600/20 backdrop-blur-sm rounded-2xl md:rounded-full px-2.5 py-1.5 text-sm w-full md:py-2.5 md:text-base group-hover:bg-gray-600/40 transition-all duration-300">
//             <p>ابحث عن خدمه</p>
//             <span className="bg-gray-600 p-2.5 rounded-full">
//               <FaArrowLeft />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../contexts/LanguageContext";

export default function Item({ el, id }) {
  const nav = useNavigate();
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <div 
      className="px-2 pb-2.5 cursor-pointer group mt-5"
      onClick={() => nav(`/services/subservices/${id}`)}
    >
      <div className="relative rounded-3xl overflow-hidden w-full h-[450px] transition-transform duration-300 ease-in-out group-hover:scale-[1.03] group-hover:z-10">
        <div 
          className="absolute inset-0 rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${el.images[0]})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 rounded-3xl group-hover:bg-black/60 transition-all duration-300"></div>
        <div 
          className="absolute bottom-0 mb-5 px-5 z-10 w-full"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <h3 className={`text-white text-xl mb-2.5 group-hover:text-[21px] transition-all duration-300 ${isArabic ? 'text-right' : 'text-left'}`}>
            {isArabic ? el.title_ar : el.title_en}
          </h3>
          <div className={`text-white flex items-center justify-between bg-gray-600/20 backdrop-blur-sm rounded-2xl md:rounded-full px-2.5 py-1.5 text-sm w-full md:py-2.5 md:text-base group-hover:bg-gray-600/40 transition-all duration-300 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <p>{t('searchService.text')}</p>
            <span className="bg-gray-600 p-2.5 rounded-full">
              {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}