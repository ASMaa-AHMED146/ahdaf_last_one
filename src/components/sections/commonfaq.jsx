import React, { useEffect, useState } from 'react';
import { CgAddR } from "react-icons/cg";
import { CiSquareMinus } from "react-icons/ci";
import img from "../../assets/images/qestionimg.jpg";
import { useSelector, useDispatch } from 'react-redux';
import actGetFAQ from '../../store/commonquestion/act/actGetFaq';
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../contexts/LanguageContext";

export default function Commenqestion() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const { error, loading, items } = useSelector((state) => state.faq);
  const dispatch = useDispatch();
  const [expandedItemId, setExpandedItemId] = useState(null);

  useEffect(() => {
    dispatch(actGetFAQ());
  }, [dispatch]);

  if (loading === "pending") {
    return <div>{t('commonQuestion.loading')}</div>;
  }
  
  if (error) {
    return <div>{t('commonQuestion.error', { error })}</div>;
  }

  const faqData = items?.[0]?.data || [];

  const toggleItem = (id) => {
    setExpandedItemId(prevId => prevId === id ? null : id);
  };

  return (
    <div className='py-[50px] lg:mx-[50px] px-[20px]'>
      <h2 className='text-[30px] font-[500] lg:mb-[20px]'>{t('commonQuestion.title')}</h2>
      <div className='lg:justify-between flex flex-col lg:flex-row'>
        <div className='lg:w-[52%]'>
          {faqData.length > 0 && faqData.slice(0, faqData.length - 2).map((el) => (
            <div key={el.id}>
              <div className='flex justify-between my-[20px] lg:my-[35px] cursor-pointer'>
                <p className='text-[17px] lg:text-[25px] md:text-[26px]'>
                  {isArabic ? el?.question_ar : el?.question_en}
                </p>
                {expandedItemId === el.id ? 
                  <CiSquareMinus 
                    onClick={() => toggleItem(el.id)} 
                    className='lg:text-[30px] md:text-[27px] text-[20px]' 
                    style={{ color: '#707070' }} 
                  /> : 
                  <CgAddR 
                    onClick={() => toggleItem(el.id)} 
                    className='lg:text-[30px] md:text-[27px] text-[20px]' 
                    style={{ color: '#707070' }} 
                  />
                }
              </div>
              {expandedItemId === el.id && (
                <div className='mb-5 text-[#707070] text-[16px] lg:text-[18px] pr-3 border-[1px] border-[#F36C35] p-[7px]'>
                  {isArabic ? el?.answer_ar : el?.answer_en}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='flex flex-col items-center gap-[30px] lg:pt-[50px]'>
          <div>
            <img src={img} alt={t('commonQuestion.imageAlt')} className='w-[200px]' />
          </div>
          <form className='text-center flex flex-col md:gap-[20px] gap-[10px] items-center'>
            <h3 className='font-[400] md:text-[25px] text-[22px]'>{t('commonQuestion.formTitle')}</h3>
            <p className='text-[#707070] lg:text-[25px] text-[22px]'>{t('commonQuestion.formDescription')}</p>
            <input type="text" placeholder={t('commonQuestion.inputPlaceholder')} className='w-[300px] p-[10px] border-[1px] border-[#C5C5C5]' />
            <button type='submit' className='text-[#1A7474] border-[1px] border-[#1A7474] w-[300px] p-[10px]'>{t('commonQuestion.submitButton')}</button>
          </form>
        </div>
      </div>
    </div>
  );
}