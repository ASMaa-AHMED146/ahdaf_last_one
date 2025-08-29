import  z from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "الاسم مطلوب" }),
  email: z.string().min(1, { message: "البريد الالكتروني مطلوب" }).email({ message: "البريد الالكتروني غير صحيح" }),
  message: z.string().min(1, { message: "استفسارك مطلوبة" }),
});
export default schema;