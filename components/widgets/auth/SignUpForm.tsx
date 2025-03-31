"use client";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { signUpSchema } from "@/schemas/authschema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, Form } from "react-hook-form";
import { z } from "zod";
import ModeToggle from "../mode/ModeToggle";
import { ErrorMessage } from "@hookform/error-message";
import Link from "next/link";
import { useSignUp } from "@/query-hooks/auth";
const SignUpForm = () => {
  const {
    control,
    register,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutateAsync } = useSignUp();
  const onSubmit = async ({ data }) => {
    const result = mutateAsync(data);
    console.log(result);
  };
  return (
    <Form
      className="flex flex-col max-h-dvh overflow-auto min-w-[580px] items-center bg-form rounded-[10px] p-[20px]"
      control={control}
      onSubmit={onSubmit}
    >
      <div className="top flex w-full flex-col">
        <div className="mode self-end">
          {" "}
          <ModeToggle />
        </div>
        <div className="flex flex-col items-center title">
          <h1
            style={{
              background: "var(--gradient)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
            className="text-[1.5rem]   uppercase leading-[normal] font-normal"
          >
            Регистрация
          </h1>
          <span className="py-[10px] text-text  px-[15px] leading-[normal] text-[#F0F2F6]">
            Пожалуйста, используйте корпоративную почту СурГУ
          </span>
        </div>
      </div>
      <div className="body flex flex-col mt-[20px] mb-[40px] w-full px-[10px]  gap-y-[1.15rem]">
        <div className="form-group space-y-[0.20rem]">
          <Label className="text-text " htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="example@edu.surgu.ru"
            {...register("email")}
          />
          <ErrorMessage
            name="email"
            errors={errors}
            render={({ message }) => (
              <p className=" text-error-text">{message}</p>
            )}
          />
        </div>
        <div className="form-group space-y-[0.64rem]">
          <Label className="text-text " htmlFor="name">
            Имя
          </Label>
          <Input id="name" placeholder="Ваше имя" {...register("name")} />
          <ErrorMessage
            name="name"
            errors={errors}
            render={({ message }) => (
              <p className=" text-error-text">{message}</p>
            )}
          />
        </div>
        <div className="form-group space-y-[0.64rem]">
          <Label className="text-text " htmlFor="name">
            Фамилия
          </Label>
          <Input
            id="surname"
            placeholder="Ваша фамилия"
            {...register("surname")}
          />
          <ErrorMessage
            name="surname"
            errors={errors}
            render={({ message }) => (
              <p className=" text-error-text">{message}</p>
            )}
          />
        </div>
        <div className="form-group space-y-[0.64rem]">
          <Label className="text-text " htmlFor="middleename">
            Отчество
          </Label>
          <Input
            id="middlename"
            placeholder="Ваше отчество(не обязательно)"
            {...register("middleName")}
          />
          <ErrorMessage
            name="middleName"
            errors={errors}
            render={({ message }) => (
              <p className=" text-error-text">{message}</p>
            )}
          />
        </div>
        <div className="form-group space-y-[0.64rem]">
          <Label className="text-text " htmlFor="email">
            Пароль
          </Label>
          <Input
            id="repeatPassword"
            placeholder="Придумайте пароль"
            {...register("password")}
          />
          <ErrorMessage
            name="password"
            errors={errors}
            render={({ message }) => (
              <p className="text-error-text">{message}</p>
            )}
          />
        </div>
        <div className="form-group space-y-[0.64rem]">
          <Label className="text-text " htmlFor="email">
            Пароль
          </Label>
          <Input
            id="repeat_password"
            placeholder="Повторите пароль"
            {...register("repeat_password")}
          />
          <ErrorMessage
            name="repeat_password"
            errors={errors}
            render={({ message }) => (
              <p className="text-error-text">{message}</p>
            )}
          />
        </div>
        <div className="form-group text-center">
          <span>Я даю согласие на обработку моих персональных данных</span>
        </div>
      </div>
      <div className="footer w-full flex flex-col items-center gap-y-[20px]">
        <Button
          active={isValid}
          type="submit"
          className="px-[20px] text-[#1C1D28] bg-grey"
        >
          Продолжить
        </Button>
        <span className="text-text ">
          Уже есть аккаунт?{" "}
          <Link href={"/signin"} className="text-primary">
            {" "}
            Войти
          </Link>{" "}
        </span>
      </div>
    </Form>
  );
};

export default SignUpForm;
