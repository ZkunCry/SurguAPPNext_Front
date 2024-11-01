"use client";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { signInSchema } from "@/schemas/authschema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm, Form } from "react-hook-form";
import { z } from "zod";
import ModeToggle from "../mode/ModeToggle";
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
      className="flex flex-col min-w-[580px] items-center dark:bg-foreground  bg-form rounded-[10px] p-[20px]"
      control={control}
    >
      <div className="top flex w-full flex-col mb-[69px]">
        <div className="mode self-end">
          <ModeToggle />
        </div>
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
            Вход в аккаунт
          </h1>
        </div>
      </div>
      <div className="body flex flex-col mt-[20px] mb-[40px] w-full px-[10px]  gap-y-[1.55rem]">
        <div className="form-group space-y-[0.64rem]">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="example@edu.surgu.ru" />
        </div>

        <div className="form-group space-y-[0.64rem]">
          <div className="flex w-full justify-between">
            <Label htmlFor="email">Пароль</Label>
            <Link href={"/"}>Забыли пароль?</Link>
          </div>

          <Input id="password" placeholder="Придумайте пароль" />
        </div>
        <div className="form-group text-left">
          <span>Запомнить меня</span>
        </div>
      </div>
      <div className="footer w-full flex flex-col items-center gap-y-[20px] mb-[30px]">
        <Button className="min-w-[180px] px-[20px] text-[#1C1D28] bg-grey">
          Войти
        </Button>
        <span>Нет аккаунта? Зарегистрироваться</span>
      </div>
    </Form>
  );
};

export default SignInForm;
