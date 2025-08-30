import React from "react";
import Main from "./mainpage";
import Logo from "../assets/images/logo.png";
import Button from '../components/common/button/Button';
import actEmailVerfy from "../store/varfication/actEmailVerfy";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { resetUI } from "../store/varfication/verfyrSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailSchema from "../validtions/Emailverfy";
import CircularProgress from '@mui/material/CircularProgress';


export default function Forgetpassword() {

  const {loading,error}=useSelector((state)=>state.verf) ;
  const dispatch=useDispatch();
  const navigate=useNavigate();

   const {
      register,
      handleSubmit,
      getFieldState,
      trigger,
      formState: { errors },
    } = useForm({
      mode: "onBlur",
      resolver: zodResolver(emailSchema),
    });

     const submitForm =async(data)=>{
    console.log(data)
    dispatch(actEmailVerfy(data)).unwrap()
      .then(() => {
        navigate('/auth/codeverfy');});
  }
    


  useEffect(()=>{
    return()=>{
      dispatch(resetUI());
    }
  },[dispatch])

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
              الرجاء إدخال بريدك الإلكتروني  .
            </p>
          </div>
          <form onSubmit={handleSubmit(submitForm)} className="w-[95%]">
            <div className='md:my-[50px] my-[30px]'>
              <input {...register('email')}
                type="email"
                placeholder="البريد الإلكتروني"
                className='w-full p-3 border-b-2 outline-none  border-b-[#1A74741A]'
              />
              {errors?.email?.message&& <p className="text-red-500">{errors?.email?.message}</p>}
            </div>
            {
                  error && <p className="text-red-500 text-center text-[20px] ">{error}</p>
                }
            <Button 
                              text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : <p>ارسال</p>} 
                              color="#1A7474" 
                            />
          </form>
        </div>
      </Main>
    </div>
  );
}