import { z } from "zod";

const signUpSchema = z
  .object({
    email: z.string().min(1, { message: "Email address is required" }).email(),
     name: z.string().min(1, { message: "First name is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters longs" }),
      
    password_confirmation: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
       phone_code:z.string().default("+20"),
       phone_number:z.string().min(11,{ message: "Phone number should be 11 number" })
    }).refine((input) => input.password === input.password_confirmation, {
    message: "Password and Confirm Password does not match",
    path: ["password_confirmation"], 
  })


export default signUpSchema;