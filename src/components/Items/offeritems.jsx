import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../contexts/LanguageContext";

export default function ServicesItem({ el }) {
    const { t } = useTranslation();
    const { isArabic } = useLanguage();
    
    console.log("el:", el);
    console.log("discount_percentage:", el?.discount_percentage);
    console.log("translated discount:", t('servicesItem.discount', { percentage: el?.discount_percentage }));
    
    // الحتة دي بتشوف التاريخ الحالي وبتقارنه بتاريخ انتهاء العرض
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expiryDate = new Date(el.expiry_date);
    expiryDate.setHours(0, 0, 0, 0);

    const isNotExpired = expiryDate >= today;

    const nav = useNavigate();
    
    // لو العرض منتهي، متعرضش حاجة
    if (!isNotExpired) {
        return null;
    }

    // التأكد من إن el.discount_percentage موجود وصحيح
    const discountPercentage = el.discount_percentage != null && !isNaN(el.discount_percentage) ? el.discount_percentage : 0;

    return (
        <div
            className='rounded-[10px] max-h-[500px] mx-[10px] lg:w-[420px] bg-[#8E8E8E29] cursor-pointer mt-[15px] relative'
            onClick={() => nav(`/offers/offerdetails/${el.id}`)}
        >
            {discountPercentage > 0 && (
                <div className="bg-[#F36C3575] absolute top-0 left-0 rounded-[10px] p-[10px] text-white">
                    {t('servicesItem.discount', { percentage: discountPercentage })}
                </div>
            )}
            <div className="">
                <img
                    className='rounded-[10px] bg-[#FFF7F4] w-full h-[350px] object-cover'
                    src={el?.image}
                    alt={t('servicesItem.imageAlt')}
                />
            </div>
            <div className='py-[30px] px-[30px] text-start'>
                <h3 className='text-[#2D2D2D] text-[22px] min-md:text-[25px] mb-[10px]'>
                    {isArabic ? el?.title_ar : el?.title_en}
                </h3>
                <p className='text-[#707070] text-[20px] mb-[15px]'>
                    {isArabic ? el?.subtitle_ar : el?.subtitle_en}
                </p>
            </div>
        </div>
    );
}