import React, { useState, useRef } from "react";
import Main from "./mainpage";
import Logo from "../assets/images/logo.png";
import Button from '../components/common/button/Button';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetUI } from "../store/varfication/verfyrSlice";
import actCdeverfy from "../store/varfication/actCodeVerfy";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export default function Forgetpassword() {
    const [digits, setDigits] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // جلب حالة التحميل والخطأ من الـRedux store
    const { loading, error: reduxError } = useSelector((state) => state.verf);
    const email = useSelector((state) => state.auth.user.email);
    
    // حالة الخطأ المحلية
    const [localError, setLocalError] = useState('');

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (!/^\d*$/.test(value)) return;

        const newDigits = [...digits];
        newDigits[index] = value;
        setDigits(newDigits);

        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
        
        // مسح الأخطاء عند بداية الكتابة
        if (localError || reduxError) {
            setLocalError('');
            dispatch(resetUI());
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const verificationCode = digits.join('');

        if (verificationCode.length !== 6) {
            setLocalError('يجب إدخال 6 أرقام.');
            return;
        }
        
        const data = {
            email: email,
            code: verificationCode
        };

        console.log(data);

        dispatch(actCdeverfy(data)).unwrap()
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                // الخطأ من الـRedux هيظهر تلقائي
            });
    };

    // رسالة الخطأ اللي هتظهر
    const displayError = localError || reduxError;

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
                        {displayError && <p className="text-red-500 text-sm text-right mt-2">{displayError}</p>}
                        
                        <Button 
                            text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : <p>ارسال</p>} 
                            color='#1A7474' 
                            disabled={loading === 'pending'}
                        />
                    </form>
                </div>
            </Main>
        </div>
    );
}