// import Main from "./mainpage"
// import React from "react"
// import Logo from "../assets/images/logo.png"
// import Input from '../Auth/Input'
// import  Button from '../components/common/button/Button'
// import { useNavigate } from "react-router-dom"
// import userLogin from "../hooks/useLogin"
// import CircularProgress from '@mui/material/CircularProgress';

// export default function Login() {
//   const nav=useNavigate();
//   const { loading, error, errors, submitForm, register, handleSubmit } = userLogin();

//   return (
//     <div>
//       <Main>
//         <div className="md:pr-[40px] pr-[20px] ">
//             <div className="">
//                 <img src={Logo} alt="" className="h-[100px]" />
//             </div>
//             <div>
//                 <h1 className="text-[#2D2D2D] font-[700] text-[32px] pb-[10px] ">تسجيل الدخول!</h1>
//                 <p className="text-[#707070] font-[500] text-[17px] mb-[20px]">مرحبًا بك! سجّل الدخول للوصول بسهولة إلى خدماتنا وإدارة حسابك بكل أمان. فقط أدخل بياناتك وابدأ تجربتك معنا.</p>
//             </div>
//             {/* The form has been updated to pass the register and errors props correctly. */}
//             <form onSubmit={handleSubmit(submitForm)} action="" className="w-[95%]">
//                 <Input 
//                   errors={errors.email?.message} 
//                   register={register} 
//                   label='البريد الالكتروني' 
//                   type={"email"} 
//                   name={'email'}
//                 />
//                 <Input 
//                   errors={errors.password?.message} 
//                   register={register} 
//                   label='كلمة المرور' 
//                   type={"password"} 
//                   name={'password'}
//                 />
//                 <p className="text-[14px] font-[400] text-[#AFAFAF] cursor-pointer" onClick={()=>nav('ForgetPassword')}>نسيت كلمة المرور؟</p>
//                 {
//                   error && <p className="text-red-500 text-center text-[20px] ">{error}</p>
//                 }
//                 <Button 
//                   text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : <p>تسجيل الدخول</p>} 
//                   color="#1A7474" 
//                 />
//             </form>
//         </div>
//       </Main>
//     </div>
//   )
// }
import Main from "./mainpage"
import React from "react"
import Logo from "../assets/images/logo.png"
import Input from '../Auth/Input'
import Button from '../components/common/button/Button'
import { useNavigate } from "react-router-dom"
import userLogin from "../hooks/useLogin"
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const nav=useNavigate();
  const { loading, error, errors, submitForm, register, handleSubmit } = userLogin();

  return (
    <div>
      <Main>
        <div className="md:pr-[40px] pr-[20px] ">
            <div className="">
                <img src={Logo} alt="" className="h-[100px]" />
            </div>
            <div>
                <h1 className="text-[#2D2D2D] font-[700] text-[32px] pb-[10px] ">تسجيل الدخول!</h1>
                <p className="text-[#707070] font-[500] text-[17px] mb-[20px]">مرحبًا بك! سجّل الدخول للوصول بسهولة إلى خدماتنا وإدارة حسابك بكل أمان. فقط أدخل بياناتك وابدأ تجربتك معنا.</p>
            </div>
            <form onSubmit={handleSubmit(submitForm)} action="" className="w-[95%]">
                <Input 
                  errors={errors.email?.message} 
                  register={register} 
                  label='البريد الالكتروني' 
                  type={"email"} 
                  name={'email'}
                />
                <Input 
                  errors={errors.password?.message} 
                  register={register} 
                  label='كلمة المرور' 
                  type={"password"} 
                  name={'password'}
                />
                <p 
                  className="text-[14px] font-[400] text-[#AFAFAF] cursor-pointer" 
                  // هنا تم تعديل المسار ليتطابق مع ما في الـrouter
                  onClick={()=>nav('forgetPassword')}
                >
                  نسيت كلمة المرور؟
                </p>
                {
                  error && <p className="text-red-500 text-center text-[20px] ">{error}</p>
                }
                <Button 
                  text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : <p>تسجيل الدخول</p>} 
                  color="#1A7474" 
                />
            </form>
        </div>
      </Main>
    </div>
  )
}