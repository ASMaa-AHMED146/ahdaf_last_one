import React, { useState, useRef } from "react";
import Main from "./mainpage";
import Logo from "../assets/images/logo.png";
import Button from '../components/common/button/Button';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetUI } from "../store/varfication/verfyrSlice";
import actCdeverfy from "../store/varfication/actCodeVerfy";
import { useNavigate } from "react-router-dom"; // تأكد من استيراد useNavigate

export default function Forgetpassword() {
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // جلب الإيميل من الـRedux store
  const email = useSelector((state) => state.auth.user.email);

  const handleChange = (e, index) => {
    const { value } = e.target;
    // التأكد ان اللي دخل هو رقم واحد
    if (!/^\d*$/.test(value)) return;

    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    // لو المستخدم كتب رقم، ننقل المؤشر للخانة اللي بعدها على طول
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    // مسح رسالة الخطأ عند بداية الكتابة
    if (error) {
      setError('');
    }
  };

  const handleKeyDown = (e, index) => {
    // لو داس على backspace والمكان فاضي، يرجع لورا
    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = digits.join('');

    // التحقق يدويًا من طول الكود
    if (verificationCode.length !== 6) {
      setError('يجب إدخال 6 أرقام.');
      return;
    }
    
    // إنشاء الـdata object المطلوب
    const data = {
      email: email, // الإيميل من الـRedux state
      code: verificationCode // الكود المجمع من الـinputs
    };

    console.log(data); // عشان تتأكد من الداتا قبل الإرسال

    // إرسال الـdata object للـaction
    dispatch(actCdeverfy(data)).unwrap()
      .then(() => {
        navigate('/');
      });
    setError(''); // مسح الخطأ بعد النجاح
  };

  return (
    <div>
      <Main>
        <div className="lg:p-[50px] p-[20px] ">
          <div className="">
            <img src={Logo} alt="" className="h-[100px]" />
          </div>
          <div>
            <h1 className="text-[#2D2D2D] font-[700] text-[32px] pb-[10px] ">التحقق</h1>
            <p className="text-[#707070] font-[500] text-[17px] mb-[20px]">
              تم ارسال رمز التحقق على البريد الالكتروني تحقق من بريدك الالكتروني وقم بادخال الرمز المكون من 6 ارقام
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-[95%]">
            <div className='flex justify-between md:my-[50px] my-[30px]'>
              {digits.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className='md:w-[60px] w-[40px] lg:w-[100px] border-b-[2px] outline-none text-center border-b-[#1A74741A]'
                />
              ))}
            </div>
            {error && <p className="text-red-500 text-sm text-right mt-2">{error}</p>}
            <Button text={'ارسال'} color='#1A7474' />
          </form>
        </div>
      </Main>
    </div>
  );
}
