import { z } from "zod";
export const signInSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email must be at leat 2 characters",
    })
    .email({
      message: "Email doesn't includes important symbols",
    }),
  password: z.string().min(4, {
    message: "Пароль должен быть не меньше 4 символов",
  }),
});
export const signUpSchema = z
  .object({
    name: z.string({
      required_error: "Данное поле обязательно для заполнения",
    }),
    middleName: z.string().optional(),
    surname: z.string({
      required_error: "Данное поле обязательно для заполнения",
    }),
    email: z
      .string()
      .min(2, {
        message: "Email must be at leat 2 characters",
      })
      .email({
        message: "Email doesn't includes important symbols",
      }),
    password: z.string().min(4, {
      message: "Пароль должен быть больше 4 символов",
    }),
    repeat_password: z.string(),
  })
  .refine((data) => data.password === data.repeat_password, {
    message: "Пароли не совпадают",
    path: ["repeat_password"],
  });
