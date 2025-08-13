
export default function Feedbackitem({el}) {
  
  return (
    <>
       

     <div className='border-[1px]  max-h-[350px]  border-[#4E4E4E] rounded-[5px]  md:max-w-[300px] md:px-[40px] py-[50px] flex flex-col items-center gap-[20px] '>
       <div className=''>
         <img src={el.user.profile_image}  className='rounded-[100%] max-w-[100px]' />
       </div>
       <div className='text-center mt-[10px]'>
         <h3 className='text-[#BC8D5E] mb-[10px] font-[500] text-[18px]'>{el.user.name}</h3>
         <p className='text-white'>{el.comment_ar || "ولا اروع"}</p>
       </div>
 </div>
    </>
)
}