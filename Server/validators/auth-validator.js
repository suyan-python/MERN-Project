const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid email Address" })
    .min(3, { message: "Email atleast of 3 characters" })
    .max(255, { message: "Email not more than 255 characters" }),
  password: z
    .string({ required_error: "Password is Required" })
    .min(5, { message: "Password atleast of 4 characters" }),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name atleast of 3 characters" }),

  phone: z
    .string({ required_error: "Phone is Required" })
    .trim()
    .min(3, { message: "Phone atleast of 3 characters" }),
});

module.exports = { signupSchema, loginSchema };
