import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { PiQuotesThin } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../contexts/LanguageContext";

function Opinin({ feedback }) {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <div className="border-[1px] h-[350px] rounded-[10px] border-[#EEEEEE] p-[20px] flex flex-col hover:shadow-md transition-shadow duration-300" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="flex-grow flex flex-col gap-[15px] overflow-hidden">
        <PiQuotesThin className="text-[60px]" style={{ color: '#1A747442' }} />
        <p className="text-[22px] font-[400] leading-[1.8] overflow-hidden text-ellipsis">
          {isArabic 
            ? (feedback?.comment_ar || t('clientOpinions.defaultComment'))
            : (feedback?.comment_en || t('clientOpinions.defaultComment'))
          }
        </p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < (feedback?.rating || 4) ? 
                <FaStar style={{ color: '#EAC910' }} /> : 
                <CiStar style={{ color: '#EAC910' }} />}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto px-[15px] py-[10px] bg-[#1A74740A] flex justify-between items-center rounded-[10px] h-[70px]">
        <p className="font-[500] text-[20px] truncate max-w-[70%]">
          {isArabic 
            ? (feedback?.user?.name_ar || feedback?.user?.name || t('clientOpinions.defaultUser'))
            : (feedback?.user?.name_en || feedback?.user?.name || t('clientOpinions.defaultUser'))
          }
        </p>
        <div className="w-[50px] h-[50px] rounded-full bg-gray-200 overflow-hidden">
          <img 
            src={feedback?.user?.profile_image} 
            alt={t('clientOpinions.userImageAlt')} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Opinin;