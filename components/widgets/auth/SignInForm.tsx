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

import { ErrorMessage } from "@hookform/error-message";
import { useSignIn } from "@/query-hooks/auth";
import useUserStore from "@/store/useUser";
import { redirect } from "next/navigation";
import { LoaderCircle } from "lucide-react";

const SignInForm = () => {
  const { setCredentials } = useUserStore();
  const {
    control,
    register,
    formState: { isValid, errors },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const { mutateAsync, isPending } = useSignIn();
  console.log(isPending);
  const onSubmit = async ({
    data: { email, password },
  }: {
    data: { email: string; password: string };
  }) => {
    const res = await mutateAsync({ email, password });
    setCredentials(res);
    redirect("/news");
  };
  return (
    <Form
      className="flex flex-col min-w-[580px] items-center dark:bg-maincolor  bg-form rounded-[10px] p-[20px]"
      onSubmit={onSubmit}
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
              background: "var(--gradient)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Вход в аккаунт
          </h1>
        </div>
      </div>
      <div className="body flex flex-col mt-[20px] mb-[40px] w-full px-[10px]  gap-y-[1.55rem]">
        <div className="form-group space-y-[0.64rem]">
          <Label className="text-text" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="example@edu.surgu.ru"
            {...register("email")}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p className=" text-error-text">{message}</p>
            )}
          />
        </div>

        <div className="form-group space-y-[0.64rem]">
          <div className="flex w-full justify-between">
            <Label className="text-text" htmlFor="email">
              Пароль
            </Label>
            <Link className="text-text" href={"/"}>
              Забыли пароль?
            </Link>
          </div>

          <Input
            id="password"
            type="password"
            placeholder="Введите пароль"
            {...register("password")}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <p className=" text-error-text">{message}</p>
            )}
          />
        </div>
      </div>
      <div className="footer w-full flex flex-col items-center gap-y-[20px] mb-[30px]">
        <Button
          active={isValid}
          className="min-w-[180px] px-[20px] text-[#1C1D28] bg-grey"
        >
          {isPending ? (
            <LoaderCircle size={30} className="animate-spin" />
          ) : (
            "Войти"
          )}
        </Button>
        <span className="text-text">
          Нет аккаунта?{" "}
          <Link className="text-primary" href={"/signup"}>
            Зарегистрироваться
          </Link>
        </span>
      </div>
    </Form>
  );
};

export default SignInForm;
