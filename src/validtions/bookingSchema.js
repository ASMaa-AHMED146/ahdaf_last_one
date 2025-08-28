import { z } from "zod";

const bookingSchema = z.object({

  username: z.string().min(1, { message: "اسم المستخدم مطلوب" }),

  
  phoneNumber: z.string()
    .min(1, { message: "رقم الهاتف مطلوب" })
    .regex(/^01[0-2,5]\d{8}$/, { message: "صيغة رقم الهاتف غير صحيحة" }), // Regex لرقم تليفون مصري


  serviceTime: z.string().min(1, { message: "وقت الخدمة مطلوب" }),


  email: z.string()
    .min(1, { message: "البريد الإلكتروني مطلوب" })
    .email({ message: "البريد الإلكتروني غير صحيح" }),


  serviceName: z.string().min(1, { message: "اسم الخدمة مطلوب" }),


  serviceDate: z.string().min(1, { message: "تاريخ الخدمة مطلوب" }),
  
  address: z.string().min(1, { message: "العنوان بالكامل مطلوب" }),
});

export default bookingSchema;