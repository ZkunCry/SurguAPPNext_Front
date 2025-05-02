"use client";
import Image from "next/image";
import ErrorImage from "@/public/error.png";
import { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error | AxiosError | string;
  reset: () => void;
}) {
  let message = "Сервер не отвечает",
    code: number | undefined = 500;
  if (error instanceof AxiosError) {
    message = error.message;
    code = error.status;
  } else if (typeof error === "string") message = error;
  else if (error instanceof Error) message = error.message;

  const [isReloading, setIsReloading] = useState(false);

  const handleReset = async () => {
    try {
      setIsReloading(true);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Имитация загрузки
      reset();
    } finally {
      setIsReloading(false);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center  text-center animate-fade-in">
        <Image
          src={ErrorImage}
          alt="Ошибка"
          className="w-36 h-36 mx-auto mb-8 animate-shake"
        />

        <h1 className="text-2xl font-bold dark:!text-white text-gray-800   mb-4">
          Ой! Произошла ошибка
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Не удалось загрузить данные. <br /> Пожалуйста, проверьте соединение
          или попробуйте позже.
        </p>

        <div className="mt-6 p-3 bg-maincolor rounded-lg text-gray-500 text-sm mb-2">
          {`Код ошибки: ${code} | ${message}`}
        </div>
        <Button
          className="text-white"
          onClick={handleReset}
          disabled={isReloading}
        >
          {isReloading ? (
            <LoaderCircle size={30} className="animate-spin" />
          ) : (
            "Перезагрузить"
          )}
        </Button>
      </div>
    </div>
  );
}
