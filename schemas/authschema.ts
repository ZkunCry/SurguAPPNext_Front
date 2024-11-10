import { z } from "zod";
const regExpMail = new RegExp(
  /^[a-zA-Z0-9._%+-]+@(surgu\.ru|edu\.surgu\.ru)*$/i
);
export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Это поле является обязательным к заполнению" })

    .regex(
      regExpMail,
      "Неверный формат почты. Поддерживается: edu.surgu.ru или surgu.ru"
    ),
  password: z.string().min(9, {
    message: "Пароль должен быть не меньше 9 символов",
  }),
});
export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Это поле является обязательным к заполнению" }),
    middleName: z
      .string()
      .optional()
      .transform((value) => (value ? value : undefined)), // Преобразует пустую строку в undefined
    surname: z
      .string()
      .min(1, { message: "Это поле является обязательным к заполнению" }),
    email: z
      .string()
      .min(1, { message: "Это поле является обязательным к заполнению" })

      .regex(
        regExpMail,
        "Неверный формат почты. Поддерживается: edu.surgu.ru или surgu.ru"
      ),
    password: z.string().min(4, {
      message: "Пароль должен быть больше 9 символов",
    }),
    repeat_password: z.string(),
  })
  .refine((data) => data.password === data.repeat_password, {
    message: "Пароли не совпадают",
    path: ["repeat_password"],
  });

export type SignInType = z.infer<typeof signInSchema>;
export type SignUpType = z.infer<typeof signUpSchema>;
