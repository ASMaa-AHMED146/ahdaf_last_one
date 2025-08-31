import Main from "./mainpage"
import React from "react"
import Logo from "../assets/images/logo.png"
import Input from '../Auth/Input'
import Button from '../components/common/button/Button'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { resetUI } from "../store/varfication/verfyrSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import actGetpassword from "../store/forgetpassword/actGetpassword"
import setPasswordSchema from "../validtions/setnewpassword"

export default function Setpassword() {
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const [codeError, setCodeError] = useState('');
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error: reduxError } = useSelector((state) => state.password);
  const state=useSelector((state)=>state);

  console.log(state)

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(setPasswordSchema),
  });

  const submitForm = (data) => {

     console.log(data);
  };

  // useEffect(() => {
  //   dispatch(resetUI());
  //   return () => {
  //     dispatch(resetUI());
  //   };
  // }, [dispatch]);

  return (
    <div>
      <Main>
        <div className="p-5 lg:p-12">
          <div className="mb-5">
            <img src={Logo} alt="Logo" className="h-[100px]" />
          </div>
          <div>
            <h1 className="text-[#2D2D2D] font-bold text-3xl lg:text-4xl pb-2.5">تعيين كلمة المرور</h1>
            <p className="text-[#707070] font-medium text-base lg:text-lg mb-5">
              يجب ان تكون كلمة المرور الجديدة مختلفة عن كلمة المرور المستخدمة سابقا
            </p>
          </div>
          <form className="w-full max-w-[95%]" onSubmit={handleSubmit(submitForm)}>
            
            <Input
              errors={errors.code?.message}
              register={register}
              label="الكود"
              type="text"
              name="code"
            />
            <Input
              errors={errors.password?.message}
              register={register}
              label="كلمه المرور"
              type="password"
              name="password"
            />
            <Input
              errors={errors.confpassword?.message}
              register={register}
              label="تاكيد كلمه المرور"
              type="password"
              name="confpassword"
            />
            {reduxError && (
              <p className="text-red-500 text-center text-lg mb-4">{reduxError}</p>
            )}
            <Button
              text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : <p>ارسال</p>}
              color="#1A7474"
              disabled={loading === 'pending'}
            />
          </form>
        </div>
      </Main>
    </div>
  );
}