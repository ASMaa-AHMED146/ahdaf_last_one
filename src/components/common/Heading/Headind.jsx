import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../contexts/LanguageContext';

export default function Heading({ service, sub }) {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <div className="bg-orange-100/10 p-5">
      <p className="flex items-center gap-3 font-semibold text-xl lg:text-2xl">
        <span className="text-gray-400">
          {t('home')}
          <FaArrowLeftLong className={`inline mx-2 ${!isArabic ? 'scale-x-[-1]' : ''}`} />
        </span>
        <span className={`${sub ? 'text-gray-400' : 'text-orange-500'} font-semibold text-xl lg:text-2xl`}>
          {service}
        </span>
        {sub && (
          <>
            <span>
              <FaArrowLeftLong className={`inline mx-2 ${!isArabic ? 'scale-x-[-1]' : ''} text-gray-400`} style={{color:'text-gray-400'}} />
            <span className="text-orange-500 font-semibold text-xl lg:text-2xl">
              {sub}
            </span>
            </span>
          </>
        )}
      </p>
    </div>
  );
}