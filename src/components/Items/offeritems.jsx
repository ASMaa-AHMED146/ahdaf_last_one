import { useNavigate } from "react-router-dom";


export default function ServicesItem({ el }) {
    console.log(el);
    
    // Get the current date at midnight (00:00:00) for a fair comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get the expiry date from the data and convert it to a Date object
    const expiryDate = new Date(el.expiry_date);
    expiryDate.setHours(0, 0, 0, 0);

    // Check if the expiry date is in the future or is today
    const isNotExpired = expiryDate >= today;

    const nav = useNavigate();
    
    // Conditional rendering based on the expiry date
    if (!isNotExpired) {
        return null; // Don't render anything if the item has expired
    }

    return (
        <div
            className='rounded-[10px] max-h-[500px] mx-[10px] lg:w-[420px] bg-[#8E8E8E29] cursor-pointer mt-[15px] relative '
            
        >
            <div className="bg-[#F36C3575] absolute top-0 right-0 rounded-[10px] p-[10px] text-white" >{el.subtitle_ar}</div>
            <div className="">
                <img
                    className='rounded-[10px] bg-[#FFF7F4] w-full h-[350px] object-cover'
                    src={el?.image}
                    alt='services photo'
                />
            </div>
            <div className='py-[30px] px-[30px] text-start'>
                <h3 className='text-[#2D2D2D] text-[22px]  min-md:text-[25px] mb-[10px]'>{el?.title_ar}</h3>
                <p className='text-[#707070] text-[20px] mb-[15px]'>{el?.subtitle_ar}</p>
            </div>
        </div>
    );
}