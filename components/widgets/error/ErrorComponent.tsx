import Image from "next/image";
import ErrorImage from "@/public/error.png";
import React from "react";

const ErrorComponent = ({ code }: { code: string }) => {
  return (
    <div className="flex flex-col items-center justify-center  text-center animate-fade-in">
      <Image
        src={ErrorImage}
        alt="Ошибка"
        className="w-36 h-36 mx-auto mb-8 animate-shake"
      />

      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Ой! Произошла ошибка
      </h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Не удалось загрузить данные. <br /> Пожалуйста, проверьте соединение или
        попробуйте позже.
      </p>

      <div className="mt-6 p-3 bg-gray-50 rounded-lg text-gray-500 text-sm">
        {`Код ошибки: ${code}`} | Сервер не отвечает
      </div>
    </div>
  );
};

export default ErrorComponent;
