import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import actGetOffer from '../store/offers/act/actGetOffers';
import Heading from '../components/common/Heading/Headind';
import ServiceItem from '../components/Items/offeritems';
import Commonfaq from '../components/sections/commonfaq';
import ClientOpinin from '../components/sections/ClientOpininsSection';

export default function Offers() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const { loading, error, records } = useSelector((state) => state.offer);
  const array = records?.offers || [];

  useEffect(() => {
    dispatch(actGetOffer());
  }, [dispatch]);

  if (loading === 'pending') {
    return (
      <div className="h-[350px] w-full flex items-center justify-center flex-col gap-5">
        <p className="text-blue-500">{t('offersPage.loading')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="w-64 text-red-500 flex items-center">
        {t('offersPage.error', { error })}
      </p>
    );
  }

  return (
    <div>
      <Heading service={t('offersPage.title')} />
      <div className="flex flex-wrap mt-12 lg:px-24 px-4 max-md:justify-center m-auto">
        {array.length > 0 ? (
          array.map((el, index) => (
            <ServiceItem
              key={index}
              el={{
                ...el,
                title: isArabic ? el.title_ar : el.title_en,
                subtitle: isArabic ? el.subtitle_ar : el.subtitle_en,
              }}
            />
          ))
        ) : (
          <p className="text-gray-500">{t('offersPage.noOffers')}</p>
        )}
      </div>
      <Commonfaq />
      <ClientOpinin />
    </div>
  );
}