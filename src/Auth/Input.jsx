import React from 'react'

function Input({ label, type, name, register, errors }) {
  // هذه الكلاسات هي التي تقوم بإزالة الأسهم
  const noArrowsClasses = type === "number" ? "[appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 " : "";

  return (
    <div className="my-[10px]">
      <label htmlFor={name} className="text-[19px] text-[#2D2D2D] ">
        {label}
      </label>
      <br />
      <input
        {...register(name)}
        id={name}
        type={type}
        className={`border-[1px] border-[#DDDDDD] w-full mt-[5px] p-[8px] rounded-[8px] ${noArrowsClasses} ${errors?'border-[1px] border-red-500':""} `}
      />
      {errors && <p className="text-red-500">{errors}</p>}
    </div>
  );
}
export default Input