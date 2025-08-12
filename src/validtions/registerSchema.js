import { z } from "zod";

const signUpSchema = z
  .object({
    email: z.string().min(1, { message: "الايميل مطلوب" }).email(),
     name: z.string().min(1, { message: "الاسم بالكامل مطلوب" }),
    password: z
      .string()
      .min(8, { message: "كلمه المرور علي الاقل يجب ان تكون 8 " }),
      
    password_confirmation: z
      .string()
      .min(1, { message: "تاكيد كلمه المرور مطلوبه" }),
       phone_code:z.string().default("+20"),
       phone_number:z.string().min(11,{ message: "رقم الهاتف يجب ان يكون 11 رقم" })
    }).refine((input) => input.password === input.password_confirmation, {
    message: "كلمه المرور وتاكيد كلمه المرور غير متطابقان",
    path: ["password_confirmation"], 
  })


export default signUpSchema;