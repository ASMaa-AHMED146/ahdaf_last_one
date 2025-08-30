import { z } from "zod";

const forgetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "البريد الالكتروني مطلوب" })
    .email({ message: "البريد الالكتروني غير صحيح" }),
});

export default forgetPasswordSchema;