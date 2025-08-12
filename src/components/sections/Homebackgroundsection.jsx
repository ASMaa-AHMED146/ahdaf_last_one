import { useNavigate } from "react-router-dom";
import img from "../../assets/images/Egyptflag.jpg";
// import img2 from "../../assets/images/Login.jpg";
import img2 from "../../assets/images/UKFlag.png"
import { IoSearchSharp } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useBackgroundimages from "../../hooks/useBackgroundimages";

function Homebackgroundsection() {
  // 👈 هنا قمنا بإعادة استخدام صور مختلفة
  // const images = [img,img2,img ]; 
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

  const {images,loading,error}=useBackgroundimages();
  console.log(images);
  


  const nav = useNavigate();
  return (
    <>
      <div className='px-[20px] py-[25px] md:pb-[40px] md:px-[40px] bg-[#FFF7F4]'>
        
        <div className=' relative rounded-[25px] text-white w-full h-[300px] md:h-[350px] lg:h-[650px]'>
          
          <Slider {...settings} className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden rounded-[25px]">
            {images&&images.map((el, index) => (
              <div key={index} className="overflow-hidden bg-yellow-300 ">
                <div 
                  className="w-full h-[300px] md:h-[350px] lg:h-[650px] bg-cover bg-center overflow-hidden rounded-[25px]" 
                  style={{ backgroundImage: `url(${el.image_url})` }} 
                ></div>
              </div>
            ))}
          </Slider>

          {/* Overlay and content section */}
          <div className='overlay w-full h-full bg-[#0000007D] absolute top-0 z-10 left-0 rounded-[25px]'></div>

          <div className='z-20 absolute top-0 left-0 w-full h-full flex flex-col gap-[10px] lg:gap-[15px] p-[20px] md:px-[100px] py-[50px] lg:pt-[150px]'>
            <h1 className='font-[500] text-[20px] md:font-[600] md:text-[25px] lg:text-[50px]'>خدمات تنظيف وتعقيم احترافية للشقق والفنادق</h1>
            <p className='text-[12px] w-[90%] md:font-[400] md:text-[15px] lg:text-[30px] lg:max-w-[75%]'>فريقنا المحترف يحول منزلك لمكان صحي ومريح بأحدث التقنيات. جربي الفرق اليوم</p>
            <div className='relative max-w-[60%]'>
              <input className='bg-[#8B8B8B61]/20 backdrop-blur-[5px] rounded-2xl md:rounded-[50px] shadow-lg outline-none px-[10px] py-[7px] text-[15px] w-full md:py-[10px] lg:py-[20px] lg:text-[25px]' type='text' placeholder='ابحث عن الخدمه' />
              <span className='absolute top-[5px] left-[5px] md:top-[6px] md:left-[10px] lg:top-[13px] lg:left-[17px] bg-[#8B8B8B61]/80 backdrop-blur-[10px] lg:backdrop-blur-[10px] lg:bg-[#8B8B8B61]/100 lg:p-[15px] rounded-[100%] p-[4px]'><IoSearchSharp className='md:text-[20px]' /></span>
            </div>
            <button
              className='bg-[#F36C35] text-white py-[5px] rounded-[25px] max-w-[30%] text-[13px] lg:mt-[20px] md:mt-[8px] lg:text-[22px] lg:py-[12px] lg:max-w-[20%] md:max-w-[25%] cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110 active:scale-95'
              onClick={() => nav('/booking')}
            >احجز خدمتك
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homebackgroundsection;