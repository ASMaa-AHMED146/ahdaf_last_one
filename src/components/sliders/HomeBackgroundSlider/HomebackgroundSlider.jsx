import "./HomebackfroundSlider.css"
import img from "../../../assets/images/Login.png"

export default function HomebackgroundSlider() {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // لتشغيل الحركة التلقائية
    autoplaySpeed: 3000, // سرعة الانتقال بين الشرائح (3 ثواني)
    arrows: false, // لإخفاء الأسهم
  };

  const images=[
    img,img,img,img
  ]



  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={img} alt="Slide 1" />
        </div>
        <div>
          <img src={img} alt="Slide 2" />
        </div>
        <div>
          <img src={img} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  )
}
