// // // // // import Main from "./mainpage"
// // // // // import React from "react"
// // // // // import Logo from "../assets/images/logo.png"
// // // // // import Input from '../Auth/Input'
// // // // // import Button from '../components/common/button/Button'
// // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { useEffect, useState, useRef } from "react";
// // // // // import { resetUI } from "../store/varfication/verfyrSlice";
// // // // // import { useForm } from "react-hook-form";
// // // // // import { zodResolver } from "@hookform/resolvers/zod";
// // // // // import actGetpassword from "../store/forgetpassword/actGetpassword"
// // // // // import setPasswordSchema from "../validtions/setnewpassword"

// // // // // export default function Setpassword() {
// // // // //   const [digits, setDigits] = useState(['', '', '', '', '', '']);
// // // // //   const [codeError, setCodeError] = useState('');
// // // // //   const inputRefs = useRef([]);
// // // // //   const dispatch = useDispatch();
// // // // //   const navigate = useNavigate();
// // // // //   const { loading, error: reduxError } = useSelector((state) => state.password);
// // // // //   const state=useSelector((state)=>state);

// // // // //   console.log(state)

  

// // // // //   const {
// // // // //     register,
// // // // //     handleSubmit,
// // // // //     formState: { errors },
// // // // //   } = useForm({
// // // // //     mode: "onBlur",
// // // // //     resolver: zodResolver(setPasswordSchema),
// // // // //   });

// // // // //   const submitForm = (data) => {

// // // // //      console.log(data);
// // // // //   };

// // // // //   // useEffect(() => {
// // // // //   //   dispatch(resetUI());
// // // // //   //   return () => {
// // // // //   //     dispatch(resetUI());
// // // // //   //   };
// // // // //   // }, [dispatch]);

// // // // //   return (
// // // // //     <div>
// // // // //       <Main>
// // // // //         <div className="p-5 lg:p-12">
// // // // //           <div className="mb-5">
// // // // //             <img src={Logo} alt="Logo" className="h-[100px]" />
// // // // //           </div>
// // // // //           <div>
// // // // //             <h1 className="text-[#2D2D2D] font-bold text-3xl lg:text-4xl pb-2.5">تعيين كلمة المرور</h1>
// // // // //             <p className="text-[#707070] font-medium text-base lg:text-lg mb-5">
// // // // //               يجب ان تكون كلمة المرور الجديدة مختلفة عن كلمة المرور المستخدمة سابقا
// // // // //             </p>
// // // // //           </div>
// // // // //           <form className="w-full max-w-[95%]" onSubmit={handleSubmit(submitForm)}>
            
// // // // //             <Input
// // // // //               errors={errors.code?.message}
// // // // //               register={register}
// // // // //               label="الكود"
// // // // //               type="text"
// // // // //               name="code"
// // // // //             />
// // // // //             <Input
// // // // //               errors={errors.password?.message}
// // // // //               register={register}
// // // // //               label="كلمه المرور"
// // // // //               type="password"
// // // // //               name="password"
// // // // //             />
// // // // //             <Input
// // // // //               errors={errors.confpassword?.message}
// // // // //               register={register}
// // // // //               label="تاكيد كلمه المرور"
// // // // //               type="password"
// // // // //               name="confpassword"
// // // // //             />
// // // // //             {reduxError && (
// // // // //               <p className="text-red-500 text-center text-lg mb-4">{reduxError}</p>
// // // // //             )}
// // // // //             <Button
// // // // //               text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : <p>ارسال</p>}
// // // // //               color="#1A7474"
// // // // //               disabled={loading === 'pending'}
// // // // //             />
// // // // //           </form>
// // // // //         </div>
// // // // //       </Main>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import Main from "./mainpage"
// // // // import React from "react"
// // // // import Logo from "../assets/images/logo.png"
// // // // import Input from '../Auth/Input'
// // // // import Button from '../components/common/button/Button'
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { useEffect, useState } from "react";
// // // // import { resetUI } from "../store/setPassword/setPasswordSlice"; // تغيير المسار
// // // // import { useForm } from "react-hook-form";
// // // // import { zodResolver } from "@hookform/resolvers/zod";
// // // // import actSetPassword from "../store/setPassword/actSetPassword" // استيراد الأكشن الجديد
// // // // import setPasswordSchema from "../validtions/setnewpassword"
// // // // import CircularProgress from '@mui/material/CircularProgress'; // إضافة الاستيراد

// // // // export default function Setpassword() {
// // // //   const dispatch = useDispatch();
// // // //   const navigate = useNavigate();
// // // //   const { loading, error: reduxError, message } = useSelector((state) => state.setPassword); // تغيير اسم ال slice
  
// // // //   // هنحتاج الإيميل من مكان ما - ممكن نجيبه من الـ route params أو من Redux state
// // // //   const [userEmail, setUserEmail] = useState(''); // هنا ممكن تجيبي الإيميل من المكان المناسب

// // // //   const {
// // // //     register,
// // // //     handleSubmit,
// // // //     formState: { errors },
// // // //     reset
// // // //   } = useForm({
// // // //     mode: "onBlur",
// // // //     resolver: zodResolver(setPasswordSchema),
// // // //   });

// // // //   const submitForm = async (data) => {
// // // //     console.log(data);
    
// // // //     // إضافة الإيميل للبيانات المرسلة
// // // //     const formDataWithEmail = {
// // // //       ...data,
// // // //       email: userEmail // تأكدي إن الإيميل متوفر هنا
// // // //     };
    
// // // //     try {
// // // //       const result = await dispatch(actSetPassword(formDataWithEmail));
      
// // // //       // التحقق من نجاح العملية
// // // //       if (actSetPassword.fulfilled.match(result)) {
// // // //         // في حالة النجاح، الانتقال لصفحة اللوجين
// // // //         console.log('Password reset successful:', result.payload.message);
// // // //         reset(); // مسح الفورم
// // // //         navigate('/login'); // الانتقال لصفحة اللوجين
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error resetting password:', error);
// // // //     }
// // // //   };

// // // //   // تنظيف الـ UI عند تحميل الكومبوننت
// // // //   useEffect(() => {
// // // //     dispatch(resetUI());
// // // //     return () => {
// // // //       dispatch(resetUI());
// // // //     };
// // // //   }, [dispatch]);

// // // //   // في حالة النجاح، الانتقال لصفحة اللوجين
// // // //   useEffect(() => {
// // // //     if (message && message === "Password has been reset successfully.") {
// // // //       setTimeout(() => {
// // // //         navigate('/login');
// // // //       }, 2000); // انتظار ثانيتين قبل الانتقال
// // // //     }
// // // //   }, [message, navigate]);

// // // //   return (
// // // //     <div>
// // // //       <Main>
// // // //         <div className="p-5 lg:p-12">
// // // //           <div className="mb-5">
// // // //             <img src={Logo} alt="Logo" className="h-[100px]" />
// // // //           </div>
// // // //           <div>
// // // //             <h1 className="text-[#2D2D2D] font-bold text-3xl lg:text-4xl pb-2.5">تعيين كلمة المرور</h1>
// // // //             <p className="text-[#707070] font-medium text-base lg:text-lg mb-5">
// // // //               يجب ان تكون كلمة المرور الجديدة مختلفة عن كلمة المرور المستخدمة سابقا
// // // //             </p>
// // // //           </div>
          
// // // //           {/* إضافة input للإيميل - أو يمكن إخفاؤه إذا كان متوفر من مكان آخر */}
// // // //           <div className="mb-4">
// // // //             <input
// // // //               type="email"
// // // //               placeholder="أدخل الإيميل"
// // // //               value={userEmail}
// // // //               onChange={(e) => setUserEmail(e.target.value)}
// // // //               className="w-full p-3 border border-gray-300 rounded-md"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <form className="w-full max-w-[95%]" onSubmit={handleSubmit(submitForm)}>
// // // //             <Input
// // // //               errors={errors.code?.message}
// // // //               register={register}
// // // //               label="الكود"
// // // //               type="text"
// // // //               name="code"
// // // //             />
// // // //             <Input
// // // //               errors={errors.password?.message}
// // // //               register={register}
// // // //               label="كلمه المرور"
// // // //               type="password"
// // // //               name="password"
// // // //             />
// // // //             <Input
// // // //               errors={errors.confpassword?.message}
// // // //               register={register}
// // // //               label="تاكيد كلمه المرور"
// // // //               type="password"
// // // //               name="confpassword"
// // // //             />
            
// // // //             {/* عرض رسالة الخطأ */}
// // // //             {reduxError && (
// // // //               <p className="text-red-500 text-center text-lg mb-4">
// // // //                 {typeof reduxError === 'string' ? reduxError : 'حدث خطأ، يرجى المحاولة مرة أخرى'}
// // // //               </p>
// // // //             )}
            
// // // //             {/* عرض رسالة النجاح */}
// // // //             {message && (
// // // //               <p className="text-green-500 text-center text-lg mb-4">
// // // //                 {message === "Password has been reset successfully." 
// // // //                   ? "تم تعيين كلمة المرور بنجاح! سيتم تحويلك لصفحة تسجيل الدخول..."
// // // //                   : message
// // // //                 }
// // // //               </p>
// // // //             )}
            
// // // //             <Button
// // // //               text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : <p>ارسال</p>}
// // // //               color="#1A7474"
// // // //               disabled={loading === 'pending' || !userEmail} // تعطيل الزر إذا لم يكن الإيميل متوفر
// // // //             />
// // // //           </form>
// // // //         </div>
// // // //       </Main>
// // // //     </div>
// // // //   );
// // // // }
// // // import Main from "./mainpage"
// // // import React from "react"
// // // import Logo from "../assets/images/logo.png"
// // // import Input from '../Auth/Input'
// // // import Button from '../components/common/button/Button'
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import { useEffect } from "react";
// // // import { resetUI } from "../store/setPassword/setPasswordSlice"; // تغيير المسار
// // // import { useForm } from "react-hook-form";
// // // import { zodResolver } from "@hookform/resolvers/zod";
// // // import actSetPassword from "../store/setPassword/actSetPassword" // استيراد الأكشن الجديد
// // // import setPasswordSchema from "../validtions/setnewpassword"
// // // import CircularProgress from '@mui/material/CircularProgress'; // إضافة الاستيراد

// // // export default function Setpassword() {
// // //   const dispatch = useDispatch();
// // //   const navigate = useNavigate();
// // //   const location = useLocation();
// // //   const { loading, error: reduxError, message } = useSelector((state) => state.setPassword); // تغيير اسم ال slice
  
// // //   // جلب الإيميل من الـ location state
// // //   const userEmail = location.state?.email || '';

// // //   const {
// // //     register,
// // //     handleSubmit,
// // //     formState: { errors },
// // //     reset
// // //   } = useForm({
// // //     mode: "onBlur",
// // //     resolver: zodResolver(setPasswordSchema),
// // //   });

// // //   const submitForm = async (data) => {
// // //     console.log(data);
    
// // //     // إضافة الإيميل للبيانات المرسلة
// // //     const formDataWithEmail = {
// // //       ...data,
// // //       email: userEmail // استخدام الإيميل المرسل من صفحة forget password
// // //     };
    
// // //     try {
// // //       const result = await dispatch(actSetPassword(formDataWithEmail));
      
// // //       // التحقق من نجاح العملية
// // //       if (actSetPassword.fulfilled.match(result)) {
// // //         // في حالة النجاح، الانتقال لصفحة اللوجين
// // //         console.log('Password reset successful:', result.payload.message);
// // //         reset(); // مسح الفورم
// // //         navigate('/login'); // الانتقال لصفحة اللوجين
// // //       }
// // //     } catch (error) {
// // //       console.error('Error resetting password:', error);
// // //     }
// // //   };

// // //   // تنظيف الـ UI عند تحميل الكومبوننت
// // //   useEffect(() => {
// // //     dispatch(resetUI());
// // //     return () => {
// // //       dispatch(resetUI());
// // //     };
// // //   }, [dispatch]);

// // //   // في حالة النجاح، الانتقال لصفحة اللوجين
// // //   useEffect(() => {
// // //     if (message && message === "Password has been reset successfully.") {
// // //       setTimeout(() => {
// // //         navigate('/login');
// // //       }, 2000); // انتظار ثانيتين قبل الانتقال
// // //     }
// // //   }, [message, navigate]);

// // //   return (
// // //     <div>
// // //       <Main>
// // //         <div className="p-5 lg:p-12">
// // //           <div className="mb-5">
// // //             <img src={Logo} alt="Logo" className="h-[100px]" />
// // //           </div>
// // //           <div>
// // //             <h1 className="text-[#2D2D2D] font-bold text-3xl lg:text-4xl pb-2.5">تعيين كلمة المرور</h1>
// // //             <p className="text-[#707070] font-medium text-base lg:text-lg mb-5">
// // //               يجب ان تكون كلمة المرور الجديدة مختلفة عن كلمة المرور المستخدمة سابقا
// // //             </p>
// // //           </div>

// // //           <form className="w-full max-w-[95%]" onSubmit={handleSubmit(submitForm)}>
// // //             <Input
// // //               errors={errors.code?.message}
// // //               register={register}
// // //               label="الكود"
// // //               type="text"
// // //               name="code"
// // //             />
// // //             <Input
// // //               errors={errors.password?.message}
// // //               register={register}
// // //               label="كلمه المرور"
// // //               type="password"
// // //               name="password"
// // //             />
// // //             <Input
// // //               errors={errors.confpassword?.message}
// // //               register={register}
// // //               label="تاكيد كلمه المرور"
// // //               type="password"
// // //               name="confpassword"
// // //             />
            
// // //             {/* عرض رسالة الخطأ */}
// // //             {reduxError && (
// // //               <p className="text-red-500 text-center text-lg mb-4">
// // //                 {typeof reduxError === 'string' ? reduxError : 'حدث خطأ، يرجى المحاولة مرة أخرى'}
// // //               </p>
// // //             )}
            
// // //             {/* عرض رسالة النجاح */}
// // //             {message && (
// // //               <p className="text-green-500 text-center text-lg mb-4">
// // //                 {message === "Password has been reset successfully." 
// // //                   ? "تم تعيين كلمة المرور بنجاح! سيتم تحويلك لصفحة تسجيل الدخول..."
// // //                   : message
// // //                 }
// // //               </p>
// // //             )}
            
// // //             <Button
// // //               text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : <p>ارسال</p>}
// // //               color="#1A7474"
// // //               disabled={loading === 'pending'}
// // //             />
// // //           </form>
// // //         </div>
// // //       </Main>
// // //     </div>
// // //   );
// // // }
// // import Main from "./mainpage"
// // import React from "react"
// // import Logo from "../assets/images/logo.png"
// // import Input from '../Auth/Input'
// // import Button from '../components/common/button/Button'
// // import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { useEffect } from "react";
// // import { resetUI } from "../store/setPassword/setPasswordSlice"; // تغيير المسار
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import actSetPassword from "../store/setPassword/actSetPassword" // استيراد الأكشن الجديد
// // import setPasswordSchema from "../validtions/setnewpassword"
// // import CircularProgress from '@mui/material/CircularProgress'; // إضافة الاستيراد

// // export default function Setpassword() {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const { loading, error: reduxError, message } = useSelector((state) => state.setPassword); // تغيير اسم ال slice
  
// //   // جلب الإيميل من الـ location state
// //   const userEmail = location.state?.email || '';

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //     reset
// //   } = useForm({
// //     mode: "onBlur",
// //     resolver: zodResolver(setPasswordSchema),
// //   });

// //   const submitForm = async (data) => {
// //     console.log(data);
// //     console.log('User email:', userEmail); // للتأكد من وجود الإيميل
    
// //     // التأكد من وجود الإيميل
// //     if (!userEmail) {
// //       console.error('Email is missing');
// //       return;
// //     }
    
// //     // إضافة الإيميل للبيانات المرسلة
// //     const formDataWithEmail = {
// //       ...data,
// //       email: userEmail
// //     };
    
// //     console.log('Sending data:', formDataWithEmail);
    
// //     try {
// //       // استخدام unwrap() للتعامل مع النتيجة صح
// //       const result = await dispatch(actSetPassword(formDataWithEmail)).unwrap();
      
// //       // في حالة النجاح
// //       console.log('Password reset successful:', result.message);
// //       reset(); // مسح الفورم
// //       navigate('/login'); // الانتقال لصفحة اللوجين
      
// //     } catch (error) {
// //       console.error('Error resetting password:', error);
// //       // الخطأ هيظهر تلقائياً من Redux state
// //     }
// //   };

// //   // تنظيف الـ UI عند تحميل الكومبوننت
// //   useEffect(() => {
// //     dispatch(resetUI());
    
// //     // التحقق من وجود الإيميل
// //     if (!userEmail) {
// //       console.warn('No email found, redirecting to forget password page');
// //       // إذا لم يكن هناك إيميل، ارجع لصفحة forget password
// //       navigate('/auth/forgetpassword');
// //     }
    
// //     return () => {
// //       dispatch(resetUI());
// //     };
// //   }, [dispatch, userEmail, navigate]);

// //   // في حالة النجاح، عرض رسالة ثم الانتقال
// //   useEffect(() => {
// //     if (message && message === "Password has been reset successfully.") {
// //       const timer = setTimeout(() => {
// //         navigate('/login');
// //       }, 2000); // انتظار ثانيتين قبل الانتقال
      
// //       return () => clearTimeout(timer); // تنظيف الـ timer
// //     }
// //   }, [message, navigate]);

// //   return (
// //     <div>
// //       <Main>
// //         <div className="p-5 lg:p-12">
// //           <div className="mb-5">
// //             <img src={Logo} alt="Logo" className="h-[100px]" />
// //           </div>
// //           <div>
// //             <h1 className="text-[#2D2D2D] font-bold text-3xl lg:text-4xl pb-2.5">تعيين كلمة المرور</h1>
// //             <p className="text-[#707070] font-medium text-base lg:text-lg mb-5">
// //               يجب ان تكون كلمة المرور الجديدة مختلفة عن كلمة المرور المستخدمة سابقا
// //             </p>
// //           </div>

// //           <form className="w-full max-w-[95%]" onSubmit={handleSubmit(submitForm)}>
// //             <Input
// //               errors={errors.code?.message}
// //               register={register}
// //               label="الكود"
// //               type="text"
// //               name="code"
// //             />
// //             <Input
// //               errors={errors.password?.message}
// //               register={register}
// //               label="كلمه المرور"
// //               type="password"
// //               name="password"
// //             />
// //             <Input
// //               errors={errors.confpassword?.message}
// //               register={register}
// //               label="تاكيد كلمه المرور"
// //               type="password"
// //               name="confpassword"
// //             />
            
// //             {/* عرض رسالة الخطأ */}
// //             {reduxError && (
// //               <p className="text-red-500 text-center text-lg mb-4">
// //                 {typeof reduxError === 'string' ? reduxError : 'حدث خطأ، يرجى المحاولة مرة أخرى'}
// //               </p>
// //             )}
            
// //             {/* عرض رسالة النجاح */}
// //             {message && (
// //               <p className="text-green-500 text-center text-lg mb-4">
// //                 {message === "Password has been reset successfully." 
// //                   ? "تم تعيين كلمة المرور بنجاح! سيتم تحويلك لصفحة تسجيل الدخول..."
// //                   : message
// //                 }
// //               </p>
// //             )}
            
// //             <Button
// //               text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : <p>ارسال</p>}
// //               color="#1A7474"
// //               disabled={loading === 'pending'}
// //             />
// //           </form>
// //         </div>
// //       </Main>
// //     </div>
// //   );
// // }
// import Main from "./mainpage"
// import React from "react"
// import Logo from "../assets/images/logo.png"
// import Input from '../Auth/Input'
// import Button from '../components/common/button/Button'
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { resetUI } from "../store/setPassword/setPasswordSlice"; // تغيير المسار
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import actSetPassword from "../store/setPassword/actSetPassword" // استيراد الأكشن الجديد
// import setPasswordSchema from "../validtions/setnewpassword"
// import CircularProgress from '@mui/material/CircularProgress'; // إضافة الاستيراد

// export default function Setpassword() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { loading, error: reduxError, message } = useSelector((state) => state.setPassword);
  
//   // جلب الإيميل من الـ location state
//   const userEmail = location.state?.email || '';
  
//   // إضافة console.log للتشخيص
//   console.log('Component rendered');
//   console.log('Loading state:', loading);
//   console.log('Error state:', reduxError);
//   console.log('Message state:', message);
//   console.log('User email from location:', userEmail);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset
//   } = useForm({
//     mode: "onBlur",
//     resolver: zodResolver(setPasswordSchema),
//   });

//   const submitForm = async (data) => {
//     console.log('Submit form called'); // للتأكد إن الدالة بتتنادى
//     console.log('Form data:', data);
//     console.log('User email:', userEmail);
    
//     // التأكد من وجود الإيميل
//     if (!userEmail) {
//       console.error('Email is missing');
//       alert('الإيميل غير متوفر، يرجى العودة لصفحة نسيان كلمة المرور');
//       navigate('/auth/forgetpassword');
//       return;
//     }
    
//     // إضافة الإيميل للبيانات المرسلة
//     const formDataWithEmail = {
//       ...data,
//       email: userEmail
//     };
    
//     console.log('Sending data to API:', formDataWithEmail);
    
//     try {
//       // استخدام unwrap() للتعامل مع النتيجة صح
//       const result = await dispatch(actSetPassword(formDataWithEmail)).unwrap();
      
//       // في حالة النجاح
//       console.log('Password reset successful:', result.message);
//       reset(); // مسح الفورم
//       navigate('/login'); // الانتقال لصفحة اللوجين
      
//     } catch (error) {
//       console.error('Error resetting password:', error);
//       // الخطأ هيظهر تلقائياً من Redux state
//     }
//   };

//   // تنظيف الـ UI عند تحميل الكومبوننت
//   useEffect(() => {
//     dispatch(resetUI());
    
//     // التحقق من وجود الإيميل
//     if (!userEmail) {
//       console.warn('No email found, redirecting to forget password page');
//       // إذا لم يكن هناك إيميل، ارجع لصفحة forget password
//       navigate('/auth/forgetpassword');
//     }
    
//     return () => {
//       dispatch(resetUI());
//     };
//   }, [dispatch, userEmail, navigate]);

//   // في حالة النجاح، عرض رسالة ثم الانتقال
//   useEffect(() => {
//     if (message && message === "Password has been reset successfully.") {
//       const timer = setTimeout(() => {
//         navigate('/auth');
//       }, 2000); // انتظار ثانيتين قبل الانتقال
      
//       return () => clearTimeout(timer); // تنظيف الـ timer
//     }
//   }, [message, navigate]);

//   return (
//     <div>
//       <Main>
//         <div className="p-5 lg:p-12">
//           <div className="mb-5">
//             <img src={Logo} alt="Logo" className="h-[100px]" />
//           </div>
//           <div>
//             <h1 className="text-[#2D2D2D] font-bold text-3xl lg:text-4xl pb-2.5">تعيين كلمة المرور</h1>
//             <p className="text-[#707070] font-medium text-base lg:text-lg mb-5">
//               يجب ان تكون كلمة المرور الجديدة مختلفة عن كلمة المرور المستخدمة سابقا
//             </p>
//           </div>

//           <form className="w-full max-w-[95%]" onSubmit={(e) => {
//             console.log('Form submit event triggered'); // للتأكد إن الـ event بيتطلق
//             handleSubmit(submitForm)(e);
//           }}>
//             <Input
//               errors={errors.code?.message}
//               register={register}
//               label="الكود"
//               type="text"
//               name="code"
//             />
//             <Input
//               errors={errors.password?.message}
//               register={register}
//               label="كلمه المرور"
//               type="password"
//               name="password"
//             />
//             <Input
//               errors={errors.confpassword?.message}
//               register={register}
//               label="تاكيد كلمه المرور"
//               type="password"
//               name="confpassword"
//             />
            
//             {/* عرض رسالة الخطأ */}
//             {reduxError && (
//               <p className="text-red-500 text-center text-lg mb-4">
//                 {typeof reduxError === 'string' ? reduxError : 'حدث خطأ، يرجى المحاولة مرة أخرى'}
//               </p>
//             )}
            
//             {/* عرض رسالة النجاح */}
//             {message && (
//               <p className="text-green-500 text-center text-lg mb-4">
//                 {message === "Password has been reset successfully." 
//                   ? "تم تعيين كلمة المرور بنجاح! سيتم تحويلك لصفحة تسجيل الدخول..."
//                   : message
//                 }
//               </p>
//             )}
            
//             <Button
//               text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : "ارسال"}
//               color="#1A7474"
//               disabled={loading === 'pending'}
//               type="submit" // إضافة type للتأكد من الـ submission
//             />
//           </form>
//         </div>
//       </Main>
//     </div>
//   );
// }
import Main from "./mainpage"
import React from "react"
import Logo from "../assets/images/logo.png"
import Input from '../Auth/Input'
import Button from '../components/common/button/Button'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { resetUI } from "../store/setPassword/setPasswordSlice"; // تغيير المسار
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import actSetPassword from "../store/setPassword/actSetPassword"
// import setPasswordSchema from "../validtions/setnewpassword" // شيل الـ schema المعقد
import { z } from "zod"; // استخدم zod مباشرة
import CircularProgress from '@mui/material/CircularProgress';

// schema جديد بدون email validation
const resetPasswordSchema = z.object({
  code: z.string().min(1, "الكود مطلوب"),
  password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
  confpassword: z.string().min(6, "تأكيد كلمة المرور مطلوب")
}).refine((data) => data.password === data.confpassword, {
  message: "كلمة المرور وتأكيدها غير متطابقين",
  path: ["confpassword"],
});

export default function Setpassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error: reduxError, message } = useSelector((state) => state.setPassword);
  
  // جلب الإيميل من الـ location state
  const userEmail = location.state?.email || '';
  
  // // إضافة console.log للتشخيص
  // console.log('Component rendered');
  // console.log('Loading state:', loading);
  // console.log('Error state:', reduxError);
  // console.log('Message state:', message);
  // console.log('User email from location:', userEmail);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    mode: "onBlur",
    // resolver: zodResolver(resetPasswordSchema), // شيل الـ validation مؤقتاً
  });

  // مراقبة قيم الفورم
  const watchedValues = watch();
  
  // console.log('Form errors:', errors);
  // console.log('Watched values:', watchedValues);

  const submitForm = async (data) => {
    // console.log('=== SUBMIT FORM DEBUG ===');
    // console.log('Form is submitting...');
    // console.log('Form data received:', data);
    // console.log('User email:', userEmail);
    
    // validation بسيط
    if (!data.code || !data.password || !data.confpassword) {
      alert('يرجى ملء جميع الحقول');
      return;
    }
    
    if (data.password !== data.confpassword) {
      alert('كلمة المرور وتأكيدها غير متطابقين');
      return;
    }
    
    // التأكد من وجود الإيميل
    if (!userEmail) {
      console.error('Email is missing');
      alert('الإيميل غير متوفر، يرجى العودة لصفحة نسيان كلمة المرور');
      navigate('/auth/forgetpassword');
      return;
    }
    
    // إضافة الإيميل للبيانات المرسلة
    const formDataWithEmail = {
      ...data,
      email: userEmail
    };
    
    console.log('Sending data to API:', formDataWithEmail);
    
    try {
      // استخدام unwrap() للتعامل مع النتيجة صح
      const result = await dispatch(actSetPassword(formDataWithEmail)).unwrap();
      
      // في حالة النجاح
      console.log('Password reset successful:', result.message);
      reset(); // مسح الفورم
      navigate('/auth'); // الانتقال لصفحة اللوجين
      
    } catch (error) {
      console.error('Error resetting password:', error);
      // الخطأ هيظهر تلقائياً من Redux state
    }
  };

  // تنظيف الـ UI عند تحميل الكومبوننت
  useEffect(() => {
    dispatch(resetUI());
    
    // التحقق من وجود الإيميل
    if (!userEmail) {
      console.warn('No email found, redirecting to forget password page');
      // إذا لم يكن هناك إيميل، ارجع لصفحة forget password
      navigate('/auth/forgetpassword');
    }
    
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch, userEmail, navigate]);

  // في حالة النجاح، عرض رسالة ثم الانتقال
  useEffect(() => {
    if (message && message === "Password has been reset successfully.") {
      const timer = setTimeout(() => {
        navigate('/auth');
      }, 2000); // انتظار ثانيتين قبل الانتقال
      
      return () => clearTimeout(timer); // تنظيف الـ timer
    }
  }, [message, navigate]);

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

          <form className="w-full max-w-[95%]" onSubmit={handleSubmit((data) => {
            console.log('=== FORM SUBMISSION START ===');
            console.log('Form data received:', data);
            submitForm(data);
          })}>
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
            
            {/* عرض رسالة الخطأ */}
            {reduxError && (
              <p className="text-red-500 text-center text-lg mb-4">
                {typeof reduxError === 'string' ? reduxError : 'حدث خطأ، يرجى المحاولة مرة أخرى'}
              </p>
            )}
            
            {/* عرض رسالة النجاح */}
            {message && (
              <p className="text-green-500 text-center text-lg mb-4">
                {message === "Password has been reset successfully." 
                  ? "تم تعيين كلمة المرور بنجاح! سيتم تحويلك لصفحة تسجيل الدخول..."
                  : message
                }
              </p>
            )}
            
            {/* استبدال Button المخصص بـ button عادي للاختبار */}
            <button
              type="submit"
              disabled={loading === 'pending'}
              className="w-full bg-[#1A7474] text-white p-3 rounded-md disabled:opacity-50"
            >
              {loading === 'pending' ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                'ارسال'
              )}
            </button>
            
            {/* الـ Button الأصلي - معلق مؤقتاً للاختبار
            <Button
              text={loading === 'pending' ? <CircularProgress size={20} color="inherit" /> : "ارسال"}
              color="#1A7474"
              disabled={loading === 'pending'}
              type="submit"
            />
            */}
          </form>
        </div>
      </Main>
    </div>
  );
}