"use client";

import useUserStore from "@/store/useUser";
import { LoaderCircle } from "lucide-react";

export default function UploadLayout({ children }: React.ReactNode) {
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex flex-col">
      {user?.privilege === undefined ? (
        <LoaderCircle className="animate-spin self-center" size={50} />
      ) : user?.privilege > 3 ? (
        children
      ) : (
        <h1 className="text-center">
          У вас нет права для просмотра данной страницы
        </h1>
      )}
    </div>
  );
}
