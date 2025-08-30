import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "الايميل مطلوب" })
    .email({ message: "البريد الالكتروني غير صحيح" }),
  password: z
    .string()
    .min(1, { message: "كلمه المرور مطلوبه" })
    .min(8, { message: "كلمه المرور علي الاقل يجب ان تكون 8 " }),
});

export default loginSchema;