import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../../contexts/LanguageContext";
import { useNavigate } from 'react-router-dom';
import img from "../../../assets/images/logo.png";
import icon from "../../../assets/images/Icon.svg";
import { useDispatch,useSelector } from 'react-redux';
import actGetservices from '../../../store/services/act/actGetServices';
import { useEffect } from 'react';

// Define the services list here or import it from another file


export default function Footer() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const navigate = useNavigate();

    const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(actGetservices())
  },[dispatch])

  const servicesList =useSelector((state)=>state.serv.records);
  const handleServiceClick = (serviceId) => {
    navigate(`/services/subservices/${serviceId}`);
  };

  return (
    <div className={isArabic ? 'rtl' : 'ltr'}>
      <div className={`pt-5 px-10 m-auto flex flex-col lg:flex-row text-[#707070] bg-[#FFF7F4] gap-5 lg:gap-[150px] justify-center pb-5 ${isArabic ? 'lg:flex-row-reverse' : ''}`}>
        <div className="lg:max-w-[250px] md:max-w-[500px]">
          <img src={img} alt={t('footer.logoAlt')} className="w-[190px] h-[190px]" />
          <p className={isArabic ? 'text-right' : 'text-left'}>
            {t('footer.description')}
          </p>
        </div>

        <div className={`flex gap-5 lg:gap-[50px] flex-col md:flex-wrap md:flex-row ${isArabic ? 'md:flex-row-reverse' : ''}`}>
          <div className="md:flex-1/3 lg:flex-1">
            <div>
              <h2 className={`text-[#2D2D2D] font-normal text-[29px] lg:mb-4 ${isArabic ? 'text-right' : 'text-left'}`}>
                {t('footer.services.title')}
              </h2>
              <ul className="flex flex-col gap-3">
                {servicesList.map((service) => (
                  <li 
                    key={service.id}
                    className={`flex items-center gap-2.5 cursor-pointer hover:text-[#F36C35] transition-colors ${isArabic ? 'flex-row-reverse' : ''}`}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <img className="w-3" src={icon} alt="" />
                    {t(service.name_ar)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:flex-1/3 lg:flex-1">
            <div>
              <h2 className={`text-[#2D2D2D] font-normal text-[29px] lg:mb-4 ${isArabic ? 'text-right' : 'text-left'}`}>
                {t('footer.links.title')}
              </h2>
              <ul className="flex flex-col gap-3">
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''} cursor-pointer hover:text-[#F36C35]`} onClick={() => navigate('/')}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.links.home')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''} cursor-pointer hover:text-[#F36C35]`} onClick={() => navigate('/services')}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.links.services')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''} cursor-pointer hover:text-[#F36C35]`} onClick={() => navigate('/callus')}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.links.contact')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''} cursor-pointer hover:text-[#F36C35]`} onClick={() => navigate('/packages')}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.links.packages')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''} cursor-pointer hover:text-[#F36C35]`} onClick={() => navigate('/aboutus')}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.links.about')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''} cursor-pointer hover:text-[#F36C35]`} onClick={() => navigate('/blog')}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.links.blog')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''} cursor-pointer hover:text-[#F36C35]`} onClick={() => navigate('/police')}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.links.privacy')}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h2 className={`text-[#2D2D2D] font-normal text-[29px] lg:mb-4 ${isArabic ? 'text-right' : 'text-left'}`}>
                {t('footer.contact.title')}
              </h2>
              <ul className="flex flex-col gap-3">
                <li className={`flex items-center gap-2.5 text-[#F36C35] font-medium ${isArabic ? 'flex-row-reverse text-right' : 'text-left'}`}>
                  {t('footer.contact.egyptOffice')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.contact.newCairo')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.contact.mansoura')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.contact.phone')}
                </li>
                <li className={`flex items-center gap-2.5 text-[#F36C35] font-medium ${isArabic ? 'flex-row-reverse text-right' : 'text-left'}`}>
                  {t('footer.contact.uaeOffice')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.contact.dubai')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.contact.mansoura')}
                </li>
                <li className={`flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <img className="w-3" src={icon} alt="" />
                  {t('footer.contact.phone')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Top />
    </div>
  );
}

function Top() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();

  return (
    <div className={`bg-[#F36C35] text-white md:pr-24 text-xs md:text-sm pr-5 py-3 ${isArabic ? 'text-right' : 'text-left'}`}>
      {t('footer.copyright')}
    </div>
  );
}

function Icon() {
  return (
    <span className="w-3 h-3 rounded-full border border-[#F36C35] block relative">
      <span className="w-2 h-2 rounded-full border border-[#F36C35] block absolute top-[1.2px] right-[1.2px]"></span>
    </span>
  );
}