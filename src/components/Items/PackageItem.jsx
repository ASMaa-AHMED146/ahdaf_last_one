import { useNavigate } from "react-router-dom";

export default function ServicesItem({ el }) {

  const nav = useNavigate();
  return (
    <div
      className='rounded-[10px] max-h-[500px] mx-[10px] lg:w-[420px] bg-[#8E8E8E29] cursor-pointer'
      onClick={() => nav(`/packages/packagesdetails/${el.id}`)}
    >
      <div className="">
        <img
          className='rounded-[10px] bg-[#FFF7F4] w-full h-[350px] object-cover'
          src={el?.image}
          alt='services photo'
        />
      </div>
      <div className='py-[30px]  px-[30px] text-start'>
        <h3 className='text-[#2D2D2D] text-[25px] mb-[10px]'>{el?.title_ar}</h3>
        <p className='text-[#707070] text-[20px] mb-[15px]'>{el?.subtitle_ar}</p>
      </div>
    </div>
  );
}