import { z } from "zod";

export const CreateUserFormSchema = z.object({
  name: z
    .string({ message: "User name is required" })
    .min(3, { message: "User name must be bigger than three letters" }),
  email: z
    .string({ required_error: "User email is required" })
    .email({ message: "Enter a valid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(3, { message: "Password must be bigger than three letters" }),
});
