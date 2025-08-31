import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import Sendmessage from '../components/Items/Sendmessage';
import Heading from '../components/common/Heading/Headind';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

export default function Callus() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <div>
      <Heading service={t('callus.pageTitle')} />
      <div className="py-12 lg:px-20 px-5 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/5 space-y-12">
            <div>
              <h1 className="font-bold text-2xl mb-4">{t('callus.contactUs')}</h1>
              <p className="text-gray-500 text-xl mb-4">
                {t('callus.contactDescription')}
              </p>
            </div>

            <div className="my-10 px-8">
              <Item title={t('callus.addressTitle')} data={t('callus.address')} />
              <Item title={t('callus.phoneTitle')} data={t('callus.phone')} />
              <Item title={t('callus.emailTitle')} data={t('callus.email')} />
            </div>
          </div>

          <div className="lg:w-2/5 lg:p-12">
            <Sendmessage />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7225.473505439694!2d55.200687!3d25.110771!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA2JzM4LjgiTiA1NcKwMTInMTEuNyJF!5e0!3m2!1sen!2seg!4v1752661912734!5m2!1sen!2seg"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('callus.mapTitle')}
          />
        </div>
      </div>
    </div>
  );
}

function Item({ title, data }) {
  return (
    <div className="flex items-center gap-5 my-5">
      <div className="bg-orange-500 w-9 h-9 rounded-full flex items-center justify-center">
        <SlLocationPin className="text-white" />
      </div>
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-500">{data}</p>
      </div>
    </div>
  );
}