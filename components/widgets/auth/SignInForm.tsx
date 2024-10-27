"use client";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { signInSchema } from "@/schemas/authschema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, Form } from "react-hook-form";
import { z } from "zod";
const SignInForm = () => {
  const { control } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Form
      className="flex flex-col min-w-[580px] items-center bg-form rounded-[10px] p-[20px]"
      control={control}
    >
      <div className="top flex w-full flex-col">
        <div className="mode self-end">Mode</div>
        <div className="flex flex-col items-center title">
          <h1
            className="text-[1.5rem] uppercase leading-[normal] font-normal"
            style={{
              background:
                "radial-gradient(110.5% 150.26% at 100% -5.51%, #3B456C 0%, #1E74D9 100%);",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Регистрация
          </h1>
          <span className="py-[10px] px-[15px] leading-[normal] text-[#F0F2F6]">
            Пожалуйста, используйте корпоративную почту СурГУ
          </span>
        </div>
      </div>
      <div className="body flex flex-col mt-[20px] mb-[40px] w-full px-[10px]  gap-y-[1.55rem]">
        <div className="form-group space-y-[0.64rem]">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="example@edu.surgu.ru" />
        </div>
        <div className="form-group space-y-[0.64rem]">
          <Label htmlFor="name">Имя</Label>
          <Input id="name" placeholder="Ваше имя" />
        </div>
        <div className="form-group space-y-[0.64rem]">
          <Label htmlFor="name">Фамилия</Label>
          <Input id="surname" placeholder="Ваша фамилия" />
        </div>
        <div className="form-group space-y-[0.64rem]">
          <Label htmlFor="middleename">Отчество</Label>
          <Input id="middlename" placeholder="Ваше отчество" />
        </div>
        <div className="form-group space-y-[0.64rem]">
          <Label htmlFor="email">Пароль</Label>
          <Input id="password" placeholder="Придумайте пароль" />
        </div>
        <div className="form-group text-center">
          <span>Я даю согласие на обработку моих персональных данных</span>
        </div>
      </div>
      <div className="footer w-full flex flex-col items-center gap-y-[20px]">
        <Button className="px-[20px] text-[#1C1D28] bg-grey">Продолжить</Button>
        <span>Уже есть аккаунт? Войти</span>
      </div>
    </Form>
  );
};

export default SignInForm;
