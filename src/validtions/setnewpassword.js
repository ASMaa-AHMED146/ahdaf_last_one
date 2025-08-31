import { z } from "zod";

const setPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "البريد الإلكتروني مطلوب." })
    .email({ message: "البريد الإلكتروني غير صحيح." }),
  code: z
    .string()
    .min(1, { message: " الكود مطلوب." })
    .length(6, { message: "الرمز يجب أن يكون 6 أرقام." })
    .regex(/^\d{6}$/, { message: "الرمز يجب أن يتكون من أرقام فقط." }),
  password: z
    .string()
    .min(1, { message: "كلمة المرور مطلوبة." })
    .min(8, { message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل." }),
  confpassword: z
    .string()
    .min(1, { message: "تأكيد كلمة المرور مطلوب." }),
}).refine(data => data.password === data.confpassword, {
  message: "كلمات المرور لا تتطابق.",
  path: ['confpassword'],
});

export default setPasswordSchema;
