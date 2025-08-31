import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../contexts/LanguageContext";
import actGetoffers from '../store/offers/act/actGetOffers';
import LottieHandler from '../components/feedback/LottieHandler/LottieHandler';
import CircularProgress from '@mui/material/CircularProgress';
import Heading from '../components/common/Heading/Headind';
import Packageservice from '../components/sections/packagesoffer';
import Commonfaq from '../components/sections/commonfaq';
import CommonSlider from '../components/sections/CommonSlider';

export default function Packagesdetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  useEffect(() => {
    dispatch(actGetoffers());
  }, [dispatch]);

  const { records, error, loading } = useSelector((state) => state.offer);

  const data = records?.offers || [];

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
      <div className="h-[350px] w-full flex items-center justify-center flex-col gap-5">
        <CircularProgress />
        <p className="text-blue-500">{t('packagesDetails.loading')}</p>
      </div>
    );
  }

  if (!selecteditem) {
    return (
      <p className="w-64 text-red-500 flex items-center">
        {t('packagesDetails.itemNotFound')}
      </p>
    );
  }

  const packageservicedata = selecteditem.sub_services || [];
  const descriptions = packageservicedata.map((el) =>
    isArabic ? el.description_ar : el.description_en
  );

  if (error) {
    return (
      <p className="w-64 text-red-500 flex items-center">
        {t('packagesDetails.error', { error })}
      </p>
    );
  }

  return (
    <div>
      <Heading
        service={t('packagesDetails.packages')}
        sub={isArabic ? selecteditem?.title_ar : selecteditem?.title_en}
      />
      <div className="px-5 lg:px-36 pt-12">
        {records ? (
          <div>
            <img
              src={selecteditem?.image}
              alt={t('packagesDetails.imageAlt')}
              className="rounded-2xl h-[450px] w-full object-cover"
            />
            <div className="p-5">
              <p className="font-normal text-2xl">
                {isArabic ? selecteditem?.title_ar : selecteditem?.title_en || t('packagesDetails.defaultTitle')}
              </p>
              <p className="text-2xl font-normal mt-3 text-orange-500">
                {isArabic ? selecteditem?.subtitle_ar : selecteditem?.subtitle_en}
              </p>
              <p className="text-xl font-normal mt-3 text-gray-500">
                {t('packagesDetails.offerValidUntil')} {selecteditem?.expiry_date}
              </p>
            </div>
          </div>
        ) : (
          <LottieHandler type="empty" />
        )}
      </div>

      <Packageservice servicesArray={descriptions} />
      <Commonfaq />
      <CommonSlider
        array={other}
        titleKey={t('packagesDetails.otherServices')}
        paragraph=""
      />
    </div>
  );
}