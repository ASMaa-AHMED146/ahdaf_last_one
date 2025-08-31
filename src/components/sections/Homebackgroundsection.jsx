import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../contexts/LanguageContext";
import useBackgroundimages from "../../hooks/useBackgroundimages";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import actGetservices from '../../store/services/act/actGetServices';



// Your array of services data
// const servicesData = [
//   { id: 2, name_ar: 'خدمات تأجير مفروش', name_en: 'Furnished Rental Services', description_ar: 'خدمات تأجير مفروشة بالكامل لإقامة مريحة.', description_en: 'Start Date 20 Jan, Departure Date 30 Jan. Fully furnished rental services for a comfortable stay.', sub_services: [] },
//   { id: 3, name_ar: 'خدمات منزلية', name_en: 'Home Services', description_ar: 'خدمات تنظيف شاملة تتناسب مع احتياجات منزلك', description_en: 'Comprehensive cleaning services tailored to your home needs', sub_services: [] },
//   { id: 10, name_ar: 'خدمات التشطيب والديكور', name_en: 'Finishing and Decor Renovation Services', description_ar: 'حول مساحتك مع خدمات التشطيب والديكور عالية الجودة', description_en: 'Transform your space with high-quality finishing and decor services', sub_services: [] },
//   { id: 12, name_ar: 'خدمات تصليح وصيانة', name_en: 'Repair and Maintenance Services', description_ar: 'خدمات إصلاح وصيانة احترافية لمنزلك', description_en: 'Professional repair and maintenance services for your home', sub_services: [] },
//   { id: 13, name_ar: 'خدمات اخري', name_en: 'Other services', description_ar: 'لا تحرم عائلتك من النظافة والرفاهية الغير محدودة', description_en: "Don't deprive your family of unlimited cleanliness and luxury", sub_services: [] },
// ];



function Homebackgroundsection() {
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const nav = useNavigate();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(actGetservices())
  },[dispatch])

  const state =useSelector((state)=>state.serv.records);


  // State for search input and filtered results
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const { images } = useBackgroundimages();

  // Function to handle changes in the search input
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredResults = state.filter(service => {
        const serviceName = isArabic ? service.name_ar : service.name_en;
        return serviceName.toLowerCase().includes(value.toLowerCase());
      });
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  // Function to handle a click on a search result
  const handleSelectService = (id) => {

    nav(`/services/subservices/${id}`); // Adjust this path if your service page has a different URL
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <>
      <div className='px-[20px] py-[25px] md:pb-[40px] md:px-[40px] bg-[#FFF7F4]'>
        <div className='relative rounded-[25px] text-white w-full h-[300px] md:h-[350px] lg:h-[650px]'>
          <Slider {...settings} className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden rounded-[25px]">
            {images && images.map((el, index) => (
              <div key={index} className="overflow-hidden bg-yellow-300">
                <div
                  className="w-full h-[300px] md:h-[350px] lg:h-[650px] bg-cover bg-center overflow-hidden rounded-[25px]"
                  style={{ backgroundImage: `url(${el.image_url})` }}
                ></div>
              </div>
            ))}
          </Slider>

          {/* Overlay and content section */}
          <div className='overlay w-full h-full bg-[#0000007D] absolute top-0 z-10 left-0 rounded-[25px]'></div>

          <div className={`z-20 absolute top-0 left-0 w-full h-full flex flex-col gap-[10px] lg:gap-[15px] p-[20px] md:px-[100px] py-[50px] lg:pt-[150px] ${isArabic ? 'text-right' : 'text-left'}`}>
            <h1 className='font-[500] text-[20px] md:font-[600] md:text-[25px] lg:text-[50px]'>
              {t('homeBackground.title')}
            </h1>
            
            <p className='text-[12px] w-[90%] md:font-[400] md:text-[15px] lg:text-[30px] lg:max-w-[75%]'>
              {t('homeBackground.description')}
            </p>
            
            <div className='relative max-w-[60%]'>
              <input 
                className={`bg-[#8B8B8B61]/20 backdrop-blur-[5px] rounded-2xl md:rounded-[50px] shadow-lg outline-none px-[10px] py-[7px] text-[15px] w-full md:py-[10px] lg:py-[20px] lg:text-[25px] ${isArabic ? 'pr-[50px] md:pr-[60px] lg:pr-[80px] text-right' : 'pl-[50px] md:pl-[60px] lg:pl-[80px] text-left'}`}
                type='text' 
                placeholder={t('homeBackground.searchPlaceholder')}
                value={searchTerm}
                onChange={handleSearch}
              />
              <span className={`absolute top-[5px] md:top-[6px] lg:top-[13px] bg-[#8B8B8B61]/80 backdrop-blur-[10px] lg:backdrop-blur-[10px] lg:bg-[#8B8B8B61]/100 lg:p-[15px] rounded-[100%] p-[4px] ${isArabic ? 'right-[5px] md:right-[10px] lg:right-[17px]' : 'left-[5px] md:left-[10px] lg:left-[17px]'}`}>
                <IoSearchSharp className='md:text-[20px]' />
              </span>
              
              {/* Search results dropdown menu */}
              {searchResults.length > 0 && (
                <div className="absolute top-[100%] mt-2 w-full bg-white rounded-lg shadow-lg z-50 text-black">
                  {searchResults.map((service) => (
                    <div 
                      key={service.id}
                      className="p-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSelectService(service.id)}
                    >
                      {isArabic ? service.name_ar : service.name_en}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <button
              className='bg-[#F36C35] text-white py-[5px] rounded-[25px] max-w-[30%] text-[13px] lg:mt-[20px] md:mt-[8px] lg:text-[22px] lg:py-[12px] lg:max-w-[20%] md:max-w-[25%] cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110 active:scale-95'
              onClick={() => nav('/booking')}
            >
              {t('homeBackground.bookButton')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homebackgroundsection;